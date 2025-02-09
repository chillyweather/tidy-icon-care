import { toSentenceCase } from "../IconFix/utils";

export function attachLabelToIcon(
  icon: SceneNode,
  spacing: number,
  labelInstance: InstanceNode,
  labelCase: string
): FrameNode {
  if (icon.type !== "COMPONENT_SET") {
    let label = getOrCreateLabel(labelInstance);
    setPosition(labelInstance, icon);
    const iconText = formatIconText(icon.name, labelCase);
    icon.name = iconText;
    setLabelProperties(label, iconText);
    return createIconPlusLabelFrame(icon, labelInstance, spacing);
  } else {
    let label = getOrCreateLabel(labelInstance);
    setPosition(labelInstance, icon);
    const iconText = formatIconText(icon.name, labelCase);
    icon.name = iconText;
    setLabelProperties(label, iconText);
    return createIconPlusLabelFrame(icon, labelInstance, spacing);
  }
}

function getOrCreateLabel(labelInstance: InstanceNode): TextNode {
  let label = labelInstance.children[0];
  if (label.type !== "TEXT") {
    label = figma.createText();
  }
  return label;
}

function setPosition(labelInstance: InstanceNode, icon: SceneNode): void {
  labelInstance.y = icon.y;
  labelInstance.x = icon.x + 26;
}

function formatIconText(iconName: string, labelCase: string): string {
  switch (labelCase) {
    case "uppercase":
      return iconName.trim().toUpperCase().replace(/ /g, "-");
    case "sentence":
      return toSentenceCase(iconName).replace(/ /g, "-");
    default:
      return iconName.trim().toLowerCase().replace(/ /g, "-");
  }
}

function setLabelProperties(label: TextNode, iconText: string): void {
  label.characters = iconText;
  label.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.04928385466337204,
        g: 0.04624933376908302,
        b: 0.04624933376908302,
      },
      boundVariables: {},
    },
  ];
}

function createIconPlusLabelFrame(
  icon: SceneNode,
  labelInstance: InstanceNode,
  spacing: number
): FrameNode {
  const iconPlusLabel = figma.createFrame();
  iconPlusLabel.layoutPositioning = "AUTO";
  iconPlusLabel.layoutMode = "HORIZONTAL";
  iconPlusLabel.counterAxisSizingMode = "AUTO";
  iconPlusLabel.counterAxisAlignItems = "CENTER";
  iconPlusLabel.itemSpacing = spacing;
  iconPlusLabel.appendChild(icon);
  iconPlusLabel.appendChild(labelInstance);
  iconPlusLabel.fills = [];
  return iconPlusLabel;
}
