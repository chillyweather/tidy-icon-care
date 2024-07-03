import { attachLabelToIcon } from "./attachLabelToIcon";
import { iconCoreFix } from "../IconFix/iconCoreFix";
import addComponenetDescription from "../description/add-description/addDescription";
import { computeMaximumBounds } from "@create-figma-plugin/utilities";
// import { splitArray } from "./splitArray";

export interface IconColumnOptions {
  rows: number;
  spacing: {
    icon: number;
    row: number;
    column: number;
  };
  color: {
    hex: string;
    opacity: string;
  };
  iconSize: string;
  addMetaData: boolean;
  scaleIconContent: boolean;
}

function buildIconColumn(options: IconColumnOptions): void {
  const {
    rows,
    spacing: { icon: iconDist, row: rowDist, column: columnDist },
    color: { hex: hexColor, opacity },
    iconSize,
    addMetaData,
    scaleIconContent,
  } = options;

  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);

  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("Please select at least one element");
    return;
  }

  const selectedElements = selection as any;

  const [topLeft] = computeMaximumBounds(selectedElements);
  const label = createLabelComponent();

  const createdFrames: FrameNode[] = [];
  const fixedIcons: ComponentNode[] = [];

  selection.forEach((node) => {
    if (figma.getNodeById(node.id)) {
      const iconPlusLabel = handleSingleNode(node, iconDist, label, topLeft);
      const icon = iconPlusLabel?.children[0];
      fixIconStructure(
        [icon],
        iconSize,
        scaleIconContent,
        addMetaData,
        hexColor,
        opacity,
        fixedIcons
      );
      if (iconPlusLabel) {
        createdFrames.push(iconPlusLabel);
      }
    }
  });

  if (createdFrames.length > 1) {
    handleMultipleNodes(createdFrames, rows, rowDist, columnDist, topLeft);
  }

  if (fixedIcons.length > 0) {
    fixedIcons.forEach((component) => {
      reColoringVectors(component, hexColor);
    });
  }

  selection.forEach((node) => {
    if (figma.getNodeById(node.id)) {
      node.remove();
    }
  });
  label.remove();
}

function fixIconStructure(
  elements: any[],
  iconSize: string,
  scaleIconContent: boolean,
  addMetaData: boolean,
  hexColor: string,
  opacity: string,
  fixedIcons: ComponentNode[]
) {
  const iconSizeValue = parseInt(iconSize);
  elements.forEach((icon: any) => {
    const parent = icon.parent;

    let workingNode = icon;

    if (icon.type === "INSTANCE") {
      workingNode = icon.detachInstance();
    }

    const fixedNode = iconCoreFix(
      workingNode,
      +iconSizeValue,
      scaleIconContent
    );
    fixedIcons.push(fixedNode);

    if (addMetaData) {
      addComponenetDescription(
        [fixedNode],
        true,
        "🟣 To do",
        true,
        true,
        "replace",
        hexColor
      );
    }

    parent.insertChild(0, fixedNode);
  });
}

function reColoringVectors(fixedNode: ComponentNode, hexColorValue: string) {
  fixedNode.children.forEach((child: any) => {
    console.log(child);
    if (child.fills.length && child.fills[0].type === "SOLID") {
      applyVectorColor(child, "fill", hexColorValue);
    }
    if (child.strokes.length && child.strokes[0].type === "SOLID") {
      applyVectorColor(child, "stroke", hexColorValue);
    } else {
      return;
    }
  });
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

function handleSingleNode(
  node: SceneNode,
  iconDist: number,
  labelComponent: ComponentNode,
  position: Vector
): FrameNode | null {
  const iconPlusLabel = attachLabelToIcon(
    node,
    iconDist,
    labelComponent.createInstance()
  );
  iconPlusLabel.x = position.x;
  iconPlusLabel.y = position.y;

  // Find a safe parent to append to
  const safeParent = node.parent || figma.currentPage;

  // Append the new structure
  safeParent.appendChild(iconPlusLabel);

  return iconPlusLabel;
}

function handleMultipleNodes(
  selection: readonly FrameNode[],
  rows: number,
  rowDist: number,
  columnDist: number,
  position: Vector
): void {
  const sortedNodes = sortNodesByName(selection);
  const iconGrid = splitArray(sortedNodes, rows);

  const iconFrame = figma.createFrame();
  iconFrame.name = "icon frame";
  iconFrame.layoutPositioning = "AUTO";
  iconFrame.layoutMode = "HORIZONTAL";
  iconFrame.counterAxisAlignItems = "MIN";
  iconFrame.counterAxisSizingMode = "AUTO";
  iconFrame.itemSpacing = columnDist;

  iconGrid.forEach((group) => {
    const column = createColumn(rowDist);
    group.forEach((node) => {
      if (figma.getNodeById(node.id)) {
        column.appendChild(node);
      }
    });
    iconFrame.appendChild(column);
  });

  figma.currentPage.appendChild(iconFrame);

  iconFrame.x = position.x;
  iconFrame.y = position.y;
}

function sortNodesByName(nodes: readonly FrameNode[]): SceneNode[] {
  return [...nodes].sort((a, b) =>
    a.children[0].name.localeCompare(b.children[0].name)
  );
}

function splitArray<T>(array: T[], size: number): T[][] {
  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, [] as T[][]);
}

function createColumn(rowDist: number): FrameNode {
  const column = figma.createFrame();
  column.name = "column";
  column.layoutPositioning = "AUTO";
  column.layoutMode = "VERTICAL";
  column.counterAxisSizingMode = "AUTO";
  column.itemSpacing = rowDist;
  return column;
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

// function createColumn() {
//   const iconColumn = figma.createFrame();
//   iconColumn.layoutPositioning = "AUTO";
//   iconColumn.layoutMode = "VERTICAL";
//   iconColumn.counterAxisAlignItems = "MIN";
//   iconColumn.counterAxisSizingMode = "AUTO";
//   iconColumn.name = "icon column";
//   return iconColumn;
// }

export default buildIconColumn;
