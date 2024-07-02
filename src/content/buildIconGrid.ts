import { attachLabelToIcon } from "./attachLabelToIcon";
import { iconCoreFix } from "../IconFix/iconCoreFix";
import addComponenetDescription from "../description/add-description/addDescription";
import { computeMaximumBounds } from "@create-figma-plugin/utilities";

function buildIconColumn(
  rows: number,
  iconDist: number,
  rowDist: number,
  columnDist: number,
  hexColor: string,
  opacity: string,
  iconSize: string,
  addMetaData: boolean,
  scaleIconContent: boolean
) {
  const selection = figma.currentPage.selection;

  const opacityValue = cleanOpacityValue(opacity);
  const hexColorValue = addOpacityToHex(hexColor, opacityValue);
  const iconSizeValue = iconSize.replace(/[\D]+$/, "");

  const selectedElements = selection as any;
  if (!selectedElements?.length) return;

  const bounds = computeMaximumBounds(selectedElements);

  // selectedElements.forEach((element: any) => {
  //   if (!element.children) {
  //     console.log("applied color to child");
  //     if (element.fills.length && element.fills[0].type === "SOLID") {
  //       applyVectorColor(element, "fill", hexColorValue);
  //     }
  //     if (element.strokes.length && element.strokes[0].type === "SOLID") {
  //       applyVectorColor(element, "stroke", hexColorValue);
  //     } else {
  //       return;
  //     }
  //   } else {
  //     element.children.forEach((child: any) => {
  //       if (child.fills.length && child.fills[0].type === "SOLID") {
  //         applyVectorColor(child, "fill", hexColorValue);
  //       }
  //       if (child.strokes.length && child.strokes[0].type === "SOLID") {
  //         applyVectorColor(child, "stroke", hexColorValue);
  //       } else {
  //         return;
  //       }
  //     });
  //   }
  // });

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

  function removeBoundVariables(
    node: VectorNode,
    property: "fills" | "strokes"
  ) {
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

    if (limit > 0) {
      const iconFrame = figma.createFrame();
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
  }
  selectedElements.forEach((icon: any) => {
    let workingNode = icon;
    if (icon.type === "INSTANCE") {
      workingNode = icon.detachInstance();
    }
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

    console.log("[fixedNode]", fixedNode);
    const parent = fixedNode.parent;
    parent?.insertChild(0, fixedNode);

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
  });
  label.remove();
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
