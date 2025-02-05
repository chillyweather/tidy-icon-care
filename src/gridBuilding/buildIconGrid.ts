import { attachLabelToIcon } from "./attachLabelToIcon";
import { iconCoreFix } from "../IconFix/iconCoreFix";
import addComponenetDescription from "../description/add-description/addDescription";
import { computeMaximumBounds } from "@create-figma-plugin/utilities";
import { getSelectionGroupCoordinates } from "./getSelectionGroupCoordinates";
import { checkColorsInIcon } from "./checkColors";

function buildIconColumn(
  rows: number,
  iconDist: number,
  rowDist: number,
  columnDist: number,
  hexColor: string,
  opacity: string,
  iconSize: string,
  addMetaData: boolean,
  scaleIconContent: boolean,
  preserveColors: boolean
) {
  const selectedElements = figma.currentPage.selection;
  if (!selectedElements?.length) return;

  const coord = getSelectionGroupCoordinates(selectedElements);

  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);
  const iconSizeValue = parseInt(iconSize);

  const label = createIconLabel();

  if (!selectedElements) return;
  const selectionParent = selectedElements[0].parent;

  const elementsArray: any = [];

  selectedElements.forEach((item: any) => {
    elementsArray.push(item);
  });

  sortIcons(elementsArray);

  const iconFrame = createIconFrame();

  const iconGrid = splitArray(elementsArray, rows);

  iconGrid.forEach((group) => {
    const newColumn = createColumn();
    group.forEach((item: any) => {
      const iconPlusLabel = attachLabelToIcon(
        item,
        iconDist,
        label.createInstance()
      );
      iconPlusLabel.name = "icon+label";
      newColumn.appendChild(iconPlusLabel);
    });
    newColumn.itemSpacing = rowDist;
    iconFrame.appendChild(newColumn);
  });
  iconFrame.itemSpacing = columnDist;

  selectionParent?.appendChild(iconFrame);
  iconFrame.x = coord.x;
  iconFrame.y = coord.y;
  console.log("iconFrame.x", iconFrame.x);
  console.log("iconFrame.y", iconFrame.y);

  selectedElements.forEach((icon: any) => {
    const iconColors = checkColorsInIcon(icon);
    console.log("iconColors", iconColors);
    let workingNode = icon;

    if (icon.type === "INSTANCE") {
      workingNode = icon.detachInstance();
    }

    const parent = workingNode.parent;

    const fixedNode = iconCoreFix(
      workingNode,
      +iconSizeValue,
      scaleIconContent,
      preserveColors
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

    recolorNodes(fixedNode, hexColorValue);
  });
  label.remove();
}

function sortIcons(rowsArray: any) {
  rowsArray.sort((a: any, b: any) => {
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
}

function createIconLabel() {
  const label = figma.createComponent();
  const labelTextNode = figma.createText();
  labelTextNode.characters = "Label";
  label.appendChild(labelTextNode);
  label.name = "label";
  label.layoutMode = "HORIZONTAL";
  label.layoutSizingVertical = "HUG";
  return label;
}

function recolorNodes(fixedNode: ComponentNode, hexColorValue: string) {
  fixedNode.children.forEach((child: any) => {
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

function handleOneNode(
  selectedElements: any,
  iconDist: number,
  label: ComponentNode,
  xP: any,
  yP: any,
  selectionParent: any
) {
  const iconPlusLabel = attachLabelToIcon(
    selectedElements[0],
    iconDist,
    label.createInstance()
  );
  iconPlusLabel.x = xP;
  iconPlusLabel.y = yP;
  selectionParent?.appendChild(iconPlusLabel);
}

function createIconFrame() {
  const iconFrame = figma.createFrame();
  iconFrame.layoutPositioning = "AUTO";
  iconFrame.layoutMode = "HORIZONTAL";
  iconFrame.counterAxisAlignItems = "MIN";
  iconFrame.counterAxisSizingMode = "AUTO";
  iconFrame.name = "icon frame";
  return iconFrame;
}

function applyVectorColor(
  vector: VectorNode,
  type: "fill" | "stroke",
  hexColorValue: string
) {
  const property = type === "fill" ? "fills" : "strokes";

  removeBoundVariables(vector, property);

  const paintsCopy = JSON.parse(JSON.stringify(vector[property]));
  paintsCopy[0] = figma.variables.setBoundVariableForPaint(
    paintsCopy[0],
    "color",
    null
  );
  vector[property] = paintsCopy;

  const updatedPaint = figma.util.solidPaint(
    `#${hexColorValue}`,
    //@ts-ignore
    vector[property][0]
  );
  vector[property] = [updatedPaint];
}

function removeBoundVariables(node: VectorNode, property: "fills" | "strokes") {
  //@ts-ignore
  if (node[property].length > 0) {
    figma.variables.setBoundVariableForPaint(
      //@ts-ignore
      node[property][0],
      "color",
      null
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

function splitArray(array: any | any[], chunkSize: number) {
  const resArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    resArray.push(chunk);
  }
  return resArray;
}
