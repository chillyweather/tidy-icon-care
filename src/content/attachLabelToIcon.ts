export function attachLabelToIcon(
  icon: any,
  spacing: any,
  labelInstance: InstanceNode
) {
  let label = labelInstance.children[0];
  if (label.type !== "TEXT") {
    label = figma.createText();
  }
  labelInstance.y = icon.y;
  labelInstance.x = icon.x + 26;
  label.characters = icon.name;
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
