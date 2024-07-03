export function attachLabelToIcon(
  icon: SceneNode,
  iconDist: number,
  label: InstanceNode
): FrameNode {
  const iconPlusLabel = figma.createFrame();
  iconPlusLabel.name = "icon+label";
  iconPlusLabel.layoutPositioning = "AUTO";
  iconPlusLabel.layoutMode = "HORIZONTAL";
  iconPlusLabel.counterAxisSizingMode = "AUTO";
  iconPlusLabel.counterAxisAlignItems = "CENTER";
  iconPlusLabel.itemSpacing = iconDist;

  // Clone the icon instead of using it directly
  const iconClone = icon.clone();
  iconPlusLabel.appendChild(iconClone);
  iconPlusLabel.appendChild(label);
  iconPlusLabel.fills = [];

  return iconPlusLabel;
}
