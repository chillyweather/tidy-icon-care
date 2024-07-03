import { attachLabelToIcon } from "./attachLabelToIcon";
import { iconCoreFix } from "../IconFix/iconCoreFix";
import addComponenetDescription from "../description/add-description/addDescription";
import { computeMaximumBounds } from "@create-figma-plugin/utilities";
import { splitArray } from "./splitArray";

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

  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.notify("Please select at least one element");
    return;
  }

  let currentFrame: FrameNode | null = null;

  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);
  const iconSizeValue = iconSize.replace(/[\D]+$/, "");

  const selectedElements = selection as any;
  if (!selectedElements?.length) return;

  const bounds = computeMaximumBounds(selectedElements);

  const label = figma.createComponent();
  const labelTextNode = figma.createText();
  labelTextNode.characters = "Label";
  label.appendChild(labelTextNode);
  label.name = "label";
  label.layoutMode = "HORIZONTAL";
  label.layoutSizingVertical = "HUG";

  if (!selectedElements) return;
  const selectionParent = selectedElements[0].parent;
  const limit = rows;

  const xP = selectedElements[0].x;
  const yP = selectedElements[0].y;

  if (selectedElements.length === 1) {
    const iconPlusLabel = attachLabelToIcon(
      selectedElements[0],
      iconDist,
      label.createInstance()
    );
    iconPlusLabel.x = xP;
    iconPlusLabel.y = yP;
    selectionParent?.appendChild(iconPlusLabel);
  }

  if (selectedElements.length > 1) {
    const rows: any = [];
    selectedElements.forEach((item: any) => {
      rows.push(item);
    });

    const result = rows.sort((a: any, b: any) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    if (limit <= 0) return;

    const iconFrame = figma.createFrame();
    currentFrame = iconFrame;
    iconFrame.layoutPositioning = "AUTO";
    iconFrame.layoutMode = "HORIZONTAL";
    iconFrame.counterAxisAlignItems = "MIN";
    iconFrame.counterAxisSizingMode = "AUTO";
    iconFrame.name = "icon frame";

    const iconGrid = splitArray(result, limit);

    iconGrid.forEach((group) => {
      const newColumn = createColumn();
      group.forEach((item: any) => {
        const row = attachLabelToIcon(item, iconDist, label.createInstance());
        row.name = "icon+label";
        newColumn.appendChild(row);
      });
      newColumn.itemSpacing = rowDist;
      iconFrame.appendChild(newColumn);
    });
    iconFrame.itemSpacing = columnDist;

    selectionParent?.appendChild(iconFrame);
    iconFrame.x = bounds[0].x;
    iconFrame.y = bounds[0].y;
  }
  selectedElements.forEach((icon: any) => {
    let workingNode = icon;

    if (icon.type === "INSTANCE") {
      workingNode = icon.detachInstance();
    }

    const parent = workingNode.parent;

    const fixedNode = iconCoreFix(
      workingNode,
      +iconSizeValue,
      scaleIconContent
    );

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

    parent?.insertChild(0, fixedNode);

    fixedNode.children.forEach((child: any) => {
      console.log("coloring");
      if (child.fills.length && child.fills[0].type === "SOLID") {
        applyVectorColor(child, "fill", hexColorValue);
      }
      if (child.strokes.length && child.strokes[0].type === "SOLID") {
        applyVectorColor(child, "stroke", hexColorValue);
      } else {
        return;
      }
    });
  });
  label.remove();
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
