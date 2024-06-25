import { iconCoreFix } from "./iconCoreFix";

function iconize(nodes: any[], iconSize: number) {
  if (nodes[0] === undefined) {
    figma.notify("please, select an icon, uncertainity kills me!");
    figma.closePlugin();
    return;
  }

  const result: any[] = [];

  for (const node of nodes) {
    let workingNode = node;
    if (node.type === "INSTANCE") {
      workingNode = node.detachInstance();
    }
    const convertedFrame = iconCoreFix(workingNode, iconSize);

    result.push(convertedFrame);
  }
  return result;
}

export { iconize };
