import { vectorToOutline } from "./vectorToOutline";
import {
  ERROR_COLOR,
  FLATTENING_ERROR_COLOR,
  SETTING_CONSTRAINTS_ERROR_COLOR,
  OUTLINE_ERROR_COLOR,
} from "../gridBuilding/constants";

type BuildingErrorType =
  | "outlineError"
  | "uniteError"
  | "flattenError"
  | "constraintsError"
  | null;

let BUILDING_ERROR: BuildingErrorType = null;

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
  scaleIconContent: boolean,
  preserveColors: boolean,
  labelCase: string
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

  workingNode.name =
    labelCase === "lowercase"
      ? workingNode.name.toLowerCase()
      : workingNode.name.toUpperCase();

  outlineVectors(workingNode);

  const flattened = unionAndFlatten(workingNode);

  if (BUILDING_ERROR) {
    resizeIconContent(flattened, iconSize, scaleIconContent);
    setErrorBackground(flattened);
    BUILDING_ERROR = null;
    return flattened;
  } else {
    resizeIconContent(flattened, iconSize, scaleIconContent);
    return flattened;
  }
}

//=================================================================//

function setErrorBackground(copy: ComponentNode) {
  if (BUILDING_ERROR === "outlineError") {
    copy.fills = [
      {
        type: "SOLID",
        color: OUTLINE_ERROR_COLOR,
      },
    ];
  } else if (BUILDING_ERROR === "uniteError") {
    copy.fills = [
      {
        type: "SOLID",
        color: FLATTENING_ERROR_COLOR,
      },
    ];
  } else if (BUILDING_ERROR === "flattenError") {
    copy.fills = [
      {
        type: "SOLID",
        color: FLATTENING_ERROR_COLOR,
      },
    ];
  } else if (BUILDING_ERROR === "constraintsError") {
    copy.fills = [
      {
        type: "SOLID",
        color: SETTING_CONSTRAINTS_ERROR_COLOR,
      },
    ];
  }
}

function outlineVectors(workingNode: ComponentNode) {
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

  try {
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
  } catch (error) {
    console.log("Outline error:", error);
    BUILDING_ERROR = "outlineError";
  }
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

function isNormalBooleanNode(node: any): boolean {
  return (
    node.children &&
    node.children.length === 1 &&
    node.children[0].type === "BOOLEAN_OPERATION"
  );
}

function unionAndFlatten(workingNode: ComponentNode): ComponentNode {
  if (isNormalBooleanNode(workingNode) || isStrangeVector(workingNode)) {
    return workingNode;
  }

  try {
    const booleanChildren = workingNode.findAllWithCriteria({
      types: ["BOOLEAN_OPERATION"],
    });
    if (booleanChildren.length === 0) {
      figma.union(workingNode.children as VectorNode[], workingNode);
    } else {
      throw new Error("Boolean children found");
    }
  } catch (error) {
    console.log("Error in union:", error);
    BUILDING_ERROR = "uniteError";
  }

  try {
    // workingNode.children.forEach((child) => figma.flatten([child]));
    figma.flatten(workingNode.children as VectorNode[]);
  } catch (error) {
    console.log("Error in flatten:", error);
    BUILDING_ERROR = "flattenError";
  }
  return workingNode;
}

function groupToComponent(node: SceneNode, iconSize: number): ComponentNode {
  const wrapper = figma.createComponent();
  wrapper.name = node.name;
  wrapper.resize(iconSize, iconSize);
  wrapper.x = node.x;
  wrapper.y = node.y;
  node.parent!.appendChild(wrapper);

  if (
    "children" in node &&
    node.children.length > 1 &&
    node.type !== "BOOLEAN_OPERATION"
  ) {
    node.children.forEach((child) => {
      const { x, y } = child;
      wrapper.appendChild(child);
      child.x = x;
      child.y = y;
    });
    if (isUngroupableNodeValid(node))
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

type UngroupableNode =
  | FrameNode
  | GroupNode
  | ComponentNode
  | ComponentSetNode
  | InstanceNode
  | SectionNode;

function isUngroupableNodeValid(
  node: UngroupableNode | null | undefined
): boolean {
  if (!node) return false;
  if (node.removed) return false;
  if (!node.parent) return false;
  if (!["FRAME", "GROUP", "COMPONENT", "COMPONENT_SET"].includes(node.type))
    return false;
  if (node.type === "GROUP" && node.children.length === 0) return false;
  return true;
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

  if (flatVector.type === "VECTOR")
    flatVector.constraints = { horizontal: "SCALE", vertical: "SCALE" };
}
