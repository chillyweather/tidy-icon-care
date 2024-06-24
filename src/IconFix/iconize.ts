import { detachInstance } from "./detachInstance";
import { iconCoreFix } from "./iconCoreFix";

function iconize(nodes: any[], iconSize: string) {
  if (nodes[0] === undefined) {
    figma.notify("please, select an icon, uncertainity kills me!");
    figma.closePlugin();
    return;
  }

  const result: any[] = [];

  for (const node of nodes) {
    const icon = detachInstance(node);
    const convertedFrame = iconCoreFix(icon);

    result.push(convertedFrame);
  }
  return result;
}

export { iconize };
