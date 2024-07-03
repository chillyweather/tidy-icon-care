import { attachLabelToIcon } from "./attachLabelToIcon";
import { iconCoreFix } from "../IconFix/iconCoreFix";
import addComponentDescription from "../description/add-description/addDescription";
import { computeMaximumBounds } from "@create-figma-plugin/utilities";
import { splitArray } from "./splitArray";

interface IconColumnOptions {
  rows: number;
  iconDist: number;
  rowDist: number;
  columnDist: number;
  hexColor: string;
  opacity: string;
  iconSize: string;
  addMetaData: boolean;
  scaleIconContent: boolean;
}

function buildIconColumn(options: IconColumnOptions): void {
  const {
    rows,
    iconDist,
    rowDist,
    columnDist,
    hexColor,
    opacity,
    iconSize,
    addMetaData,
    scaleIconContent,
  } = options;

  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("Please select at least one element");
    return;
  }

  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);
  const iconSizeValue = parseInt(iconSize);

  const bounds = computeMaximumBounds(selection as SceneNode[]);
  const label = createLabelComponent();

  if (selection.length === 1) {
    handleSingleSelection(selection[0], iconDist, label, bounds);
  } else {
    handleMultipleSelection(
      selection,
      rows,
      iconDist,
      rowDist,
      columnDist,
      label,
      bounds
    );
  }

  processSelectedElements(
    selection,
    iconSizeValue,
    hexColorValue,
    addMetaData,
    scaleIconContent
  );

  label.remove();
}

function createLabelComponent(): ComponentNode {
  const label = figma.createComponent();
  const labelTextNode = figma.createText();
  labelTextNode.characters = "Label";
  label.appendChild(labelTextNode);
  label.name = "label";
  label.layoutMode = "HORIZONTAL";
  label.layoutSizingVertical = "HUG";
  return label;
}

function handleSingleSelection(
  node: SceneNode,
  iconDist: number,
  label: ComponentNode,
  bounds: [Vector, Vector]
): void {
  const iconPlusLabel = attachLabelToIcon(
    node,
    iconDist,
    label.createInstance()
  );
  iconPlusLabel.x = bounds[0].x;
  iconPlusLabel.y = bounds[0].y;
  node.parent?.appendChild(iconPlusLabel);
}

function handleMultipleSelection(
  selection: readonly SceneNode[],
  rows: number,
  iconDist: number,
  rowDist: number,
  columnDist: number,
  label: ComponentNode,
  bounds: [Vector, Vector]
): void {
  const sortedNodes = sortNodesByName(selection);
  const iconGrid = splitArray(sortedNodes, rows);

  const iconFrame = figma.createFrame();
  iconFrame.layoutPositioning = "AUTO";
  iconFrame.layoutMode = "HORIZONTAL";
  iconFrame.counterAxisAlignItems = "MIN";
  iconFrame.counterAxisSizingMode = "AUTO";
  iconFrame.name = "icon frame";

  iconGrid.forEach((group) => {
    const column = createColumn();
    group.forEach((item: any) => {
      const row = attachLabelToIcon(item, iconDist, label.createInstance());
      row.name = "icon+label";
      column.appendChild(row);
    });
    column.itemSpacing = rowDist;
    iconFrame.appendChild(column);
  });

  iconFrame.itemSpacing = columnDist;
  selection[0].parent?.appendChild(iconFrame);
  iconFrame.x = bounds[0].x;
  iconFrame.y = bounds[0].y;
}

function sortNodesByName(nodes: readonly SceneNode[]): SceneNode[] {
  return [...nodes].sort((a, b) => a.name.localeCompare(b.name));
}
function processSelectedElements(
  selection: readonly SceneNode[],
  iconSize: number,
  hexColorValue: string,
  addMetaData: boolean,
  scaleIconContent: boolean
): void {
  selection.forEach((icon) => {
    let workingNode =
      icon.type === "INSTANCE" ? (icon as InstanceNode).detachInstance() : icon;
    const fixedNode = iconCoreFix(workingNode, iconSize, scaleIconContent);

    if (addMetaData) {
      addComponentDescription(
        [fixedNode],
        true,
        "🟣 To do",
        true,
        true,
        "replace",
        hexColorValue
      );
    }

    workingNode.parent?.insertChild(0, fixedNode);

    fixedNode.children.forEach((child) => {
      if (isVectorLike(child)) {
        if (hasSolidFill(child)) {
          applyVectorColor(child, "fill", hexColorValue);
        }
        if (hasSolidStroke(child)) {
          applyVectorColor(child, "stroke", hexColorValue);
        }
      }
    });
  });
}

function isVectorLike(node: SceneNode): node is VectorNode {
  return "fills" in node && "strokes" in node;
}

function hasSolidFill(node: VectorNode): boolean {
  return (
    Array.isArray(node.fills) &&
    node.fills.length > 0 &&
    node.fills[0].type === "SOLID"
  );
}

function hasSolidStroke(node: VectorNode): boolean {
  return (
    Array.isArray(node.strokes) &&
    node.strokes.length > 0 &&
    node.strokes[0].type === "SOLID"
  );
}

type ColorType = "fill" | "stroke";

function applyVectorColor(
  vector: VectorNode,
  type: ColorType,
  hexColorValue: string
): void {
  const property: PaintProperty = type === "fill" ? "fills" : "strokes";

  try {
    removeBoundVariables(vector, property);

    const paints = vector[property] as Paint[];
    if (paints.length === 0) {
      console.warn(`No ${property} found on vector ${vector.name}`);
      return;
    }

    const paintCopy = JSON.parse(JSON.stringify(paints[0])) as SolidPaint;
    figma.variables.setBoundVariableForPaint(paintCopy, "color", null);

    const updatedPaint = figma.util.solidPaint(`#${hexColorValue}`, paintCopy);
    vector[property] = [updatedPaint];
  } catch (error) {
    console.error(
      `Failed to apply ${type} color to vector ${vector.name}:`,
      error
    );
  }
}

type PaintProperty = "fills" | "strokes";

function removeBoundVariables(node: VectorNode, property: PaintProperty): void {
  const paints = node[property] as SolidPaint[];

  if (paints.length === 0) {
    console.warn(`No ${property} found on node ${node.name}`);
    return;
  }

  const firstPaint = paints[0];
  try {
    figma.variables.setBoundVariableForPaint(firstPaint, "color", null);
  } catch (error) {
    console.error(
      `Failed to remove bound variable from ${property} of node ${node.name}:`,
      error
    );
  }
}

function addOpacityToHex(hex: string, opacity: number): string {
  opacity = Math.max(0, Math.min(1, opacity));
  const alphaHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return hex + alphaHex;
}

function cleanOpacityValue(input: string): number {
  const cleanedValue = input.replace(/[\D]+$/, "");
  return +cleanedValue / 100;
}

function createColumn() {
  const iconColumn = figma.createFrame();
  iconColumn.layoutPositioning = "AUTO";
  iconColumn.layoutMode = "VERTICAL";
  iconColumn.counterAxisAlignItems = "MIN";
  iconColumn.counterAxisSizingMode = "AUTO";
  iconColumn.name = "icon column";
  return iconColumn;
}

export default buildIconColumn;
