import { vectorToOutline } from "./vectorToOutline";
import {
  ERROR_COLOR,
  FLATTENING_ERROR_COLOR,
  SETTING_CONSTRAINTS_ERROR_COLOR,
} from "../content/constants";

export function iconCoreFix(
  node: SceneNode,
  iconSize: number,
  scaleIconContent: boolean
) {
  let workingNode: SceneNode;

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
    } else {
      if (vector.type === "BOOLEAN_OPERATION" && vector.children.length === 1)
        return;
      vectorToOutline(vector);
    }
  });
  workingNode.name = workingNode.name.toLowerCase();

  // const flattened = workingNode;
  const flattened = unionAndFlatten(workingNode);
  resizeIconContent(flattened, iconSize, scaleIconContent);
  return flattened;
}

function isStrangeVector(node: any) {
  if (node.children.length !== 1) return false;
  const child = node.children[0];
  return child.type === "VECTOR" && child.fillGeometry.length !== 1;
}

function isNormalBooleanNode(node: any) {
  return (
    node.children.length === 1 &&
    node.children[0].type === "BOOLEAN_OPERATION" &&
    node.children[0].children.length === 1
  );
}

function unionAndFlatten(workingNode: ComponentNode) {
  if (isNormalBooleanNode(workingNode) || isStrangeVector(workingNode)) {
    return workingNode;
  }
  const copy = workingNode.clone();
  try {
    workingNode.children.forEach((child) => {
      figma.flatten([child]);
    });
    figma.union(workingNode.children, workingNode);
    figma.flatten(workingNode.children);
    copy.remove();
    return workingNode;
  } catch (error) {
    console.log("error in union and flatten");
    copy.fills = [{ type: "SOLID", color: FLATTENING_ERROR_COLOR }];
    return copy;
  }
}

function groupToComponent(node: any, iconSize: number): ComponentNode {
  const wrapper = figma.createComponent();
  wrapper.resize(iconSize, iconSize);
  wrapper.x = node.x;
  wrapper.y = node.y;
  node.parent.appendChild(wrapper);
  if (node.children && node.children.length > 1) {
    node.children.forEach((child: any) => {
      const xPos = child.x;
      const yPos = child.y;
      wrapper.appendChild(child);
      child.x = xPos;
      child.y = yPos;
    });
    figma.ungroup(node);
  } else {
    wrapper.appendChild(node);
  }
  wrapper.name = node.name;
  wrapper.fills = [];
  wrapper
    .findAllWithCriteria({
      types: ["FRAME", "GROUP"],
    })
    .forEach((group: any) => {
      figma.ungroup(group);
    });

  return wrapper;
}

function resizeIconContent(
  workingNode: any,
  iconSize: number,
  scaleIconContent: boolean
) {
  const flatVector = workingNode.children[0];

  if (
    flatVector &&
    flatVector.type === "BOOLEAN_OPERATION" &&
    flatVector.children &&
    flatVector.children.length === 1
  ) {
    const child = flatVector.children[0];
    if (
      child &&
      child.type === "VECTOR" &&
      child.width === flatVector.width &&
      child.height === flatVector.height
    ) {
      child.x = 0;
      child.y = 0;
    }
  }
  if (
    !flatVector ||
    (flatVector.type !== "VECTOR" && flatVector.type !== "BOOLEAN_OPERATION")
  )
    return;
  if (flatVector.type === "BOOLEAN_OPERATION" && flatVector.children) {
    flatVector.children.forEach((child: any) => {
      if (child.type === "VECTOR") {
        child.constraints = {
          horizontal: "MIN",
          vertical: "MIN",
        };
      }
    });
  }
  flatVector.name = "ic";
  if (scaleIconContent) {
    if (iconSize === 16) {
      const scale = 14 / Math.max(flatVector.width, flatVector.height);
      flatVector.resize(flatVector.width * scale, flatVector.height * scale);
    } else if (iconSize === 20) {
      const scale = 18 / Math.max(flatVector.width, flatVector.height);
      flatVector.resize(flatVector.width * scale, flatVector.height * scale);
    } else if (iconSize === 24) {
      const scale = 20 / Math.max(flatVector.width, flatVector.height);
      flatVector.resize(flatVector.width * scale, flatVector.height * scale);
    } else if (iconSize === 32) {
      const scale = 24 / Math.max(flatVector.width, flatVector.height);
      flatVector.resize(flatVector.width * scale, flatVector.height * scale);
    }
  }
  flatVector.x = workingNode.width / 2 - flatVector.width / 2;
  flatVector.y = workingNode.height / 2 - flatVector.height / 2;
  try {
    flatVector.constraints = {
      horizontal: "SCALE",
      vertical: "SCALE",
    };
  } catch (error) {
    console.log("error in setting constraints");
    workingNode.fills = [
      { type: "SOLID", color: SETTING_CONSTRAINTS_ERROR_COLOR },
    ];
  }
}
