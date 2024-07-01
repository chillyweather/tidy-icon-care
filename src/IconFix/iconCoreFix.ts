import { vectorToOutline } from "./vectorToOutline";
import {
  ERROR_COLOR,
  FLATTENING_ERROR_COLOR,
  SETTING_CONSTRAINTS_ERROR_COLOR,
} from "../content/constants";

const ICON_SIZES = {
  SMALL: 16,
  MEDIUM: 20,
  LARGE: 24,
  EXTRA_LARGE: 32,
};

const SCALE_FACTORS = {
  [ICON_SIZES.SMALL]: 14,
  [ICON_SIZES.MEDIUM]: 18,
  [ICON_SIZES.LARGE]: 20,
  [ICON_SIZES.EXTRA_LARGE]: 24,
};

export function iconCoreFix(
  node: SceneNode,
  iconSize: number,
  scaleIconContent: boolean
): ComponentNode {
  let workingNode: ComponentNode;

  if (node.type === "COMPONENT") {
    const instance = node.createInstance();
    instance.x = node.x;
    instance.y = node.y;
    workingNode = groupToComponent(instance.detachInstance(), iconSize);
    node.remove();
  } else {
    workingNode = groupToComponent(node, iconSize);
  }

  const vectorObj = workingNode.findAllWithCriteria({
    types: [
      "VECTOR",
      "ELLIPSE",
      "POLYGON",
      "RECTANGLE",
      "STAR",
      "TEXT",
      "BOOLEAN_OPERATION",
    ],
  });

  vectorObj.forEach((vector) => {
    if (vector.name === "ic") return;
    if (
      (vector.strokes as readonly Paint[]).length === 0 &&
      (vector.fills as readonly Paint[]).length === 0
    ) {
      vector.remove();
      return;
    }
    if (vector.type === "BOOLEAN_OPERATION" && vector.children.length === 1)
      return;
    vectorToOutline(vector);
  });

  workingNode.name = workingNode.name.toLowerCase();

  const flattened = unionAndFlatten(workingNode);
  resizeIconContent(flattened, iconSize, scaleIconContent);
  return flattened;
}

function isStrangeVector(node: SceneNode): boolean {
  if (!("children" in node) || node.children.length !== 1) return false;
  const child = node.children[0];
  return (
    child.type === "VECTOR" &&
    "fillGeometry" in child &&
    child.fillGeometry.length !== 1
  );
}

function isNormalBooleanNode(node: SceneNode): boolean {
  return (
    "children" in node &&
    node.children.length === 1 &&
    node.children[0].type === "BOOLEAN_OPERATION" &&
    node.children[0].children.length === 1
  );
}

function unionAndFlatten(workingNode: ComponentNode): ComponentNode {
  if (isNormalBooleanNode(workingNode) || isStrangeVector(workingNode)) {
    return workingNode;
  }

  const copy = workingNode.clone();
  try {
    workingNode.children.forEach((child) => figma.flatten([child]));
    figma.union(workingNode.children as VectorNode[], workingNode);
    figma.flatten(workingNode.children as VectorNode[]);
    copy.remove();
    return workingNode;
  } catch (error) {
    console.log("Error in union and flatten:", error);
    copy.fills = [{ type: "SOLID", color: FLATTENING_ERROR_COLOR }];
    return copy;
  }
}

function groupToComponent(node: SceneNode, iconSize: number): ComponentNode {
  const wrapper = figma.createComponent();
  wrapper.name = node.name;
  wrapper.resize(iconSize, iconSize);
  wrapper.x = node.x;
  wrapper.y = node.y;
  node.parent!.appendChild(wrapper);

  if ("children" in node && node.children.length > 1) {
    node.children.forEach((child) => {
      const { x, y } = child;
      wrapper.appendChild(child);
      child.x = x;
      child.y = y;
    });
    figma.ungroup(node as FrameNode | GroupNode);
  } else {
    wrapper.appendChild(node);
  }

  wrapper.fills = [];
  wrapper
    .findAllWithCriteria({ types: ["FRAME", "GROUP"] })
    .forEach((group) => figma.ungroup(group as FrameNode | GroupNode));

  return wrapper;
}

function resizeIconContent(
  workingNode: ComponentNode,
  iconSize: number,
  scaleIconContent: boolean
): void {
  const flatVector = workingNode.children[0];
  if (
    !flatVector ||
    (flatVector.type !== "VECTOR" && flatVector.type !== "BOOLEAN_OPERATION")
  )
    return;

  if (flatVector.type === "BOOLEAN_OPERATION" && flatVector.children) {
    flatVector.children.forEach((child) => {
      if (child.type === "VECTOR") {
        child.constraints = { horizontal: "MIN", vertical: "MIN" };
      }
    });
  }

  flatVector.name = "ic";

  if (scaleIconContent) {
    const scaleFactor =
      SCALE_FACTORS[iconSize as keyof typeof SCALE_FACTORS] || 1;
    const scale = scaleFactor / Math.max(flatVector.width, flatVector.height);
    flatVector.resize(flatVector.width * scale, flatVector.height * scale);
  }

  flatVector.x = workingNode.width / 2 - flatVector.width / 2;
  flatVector.y = workingNode.height / 2 - flatVector.height / 2;

  try {
    //@ts-ignore
    flatVector.constraints = { horizontal: "SCALE", vertical: "SCALE" };
  } catch (error) {
    console.log("Error in setting constraints:", error);
    workingNode.fills = [
      { type: "SOLID", color: SETTING_CONSTRAINTS_ERROR_COLOR },
    ];
  }
}
