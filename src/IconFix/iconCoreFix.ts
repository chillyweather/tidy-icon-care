import { vectorToOutline } from "./vectorToOutline";

export function iconCoreFix(node: SceneNode) {
  let workingNode: SceneNode;
  if (node.type === "COMPONENT") {
    const inst = node.createInstance().detachInstance();
    workingNode = groupToComponent(inst);
    node.remove();
  } else {
    workingNode = groupToComponent(node);
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
    if (
      (vector.strokes as readonly Paint[]).length === 0 &&
      (vector.fills as readonly Paint[]).length === 0
    ) {
      vector.remove();
    } else {
      vectorToOutline(vector);
    }
  });

  workingNode.name = workingNode.name.toLowerCase();
  if (
    !(
      workingNode.children.length === 1 &&
      workingNode.children[0].type === "VECTOR" &&
      workingNode.children[0].name === "ic"
    )
  ) {
    figma.union(workingNode.children, workingNode);
    const flatVector = figma.flatten(workingNode.children);
  }
  const flatVector = workingNode.children[0];
  if (!flatVector || flatVector.type !== "VECTOR") return;
  flatVector.name = "ic";
  flatVector.constraints = {
    horizontal: "SCALE",
    vertical: "SCALE",
  };
  return workingNode;
}

function groupToComponent(node: any): ComponentNode {
  const wrapper = figma.createComponent();
  wrapper.resize(node.width, node.height);
  wrapper.x = node.x;
  wrapper.y = node.y;
  node.parent.appendChild(wrapper);
  wrapper.appendChild(node);
  node.x = 0;
  node.y = 0;
  wrapper.name = node.name;
  wrapper.fills = [];
  figma.ungroup(node);
  return wrapper;
}
