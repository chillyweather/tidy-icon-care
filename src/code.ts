import { emit, on, showUI } from "@create-figma-plugin/utilities";
import buildIconColumn from "./gridBuilding/buildIconGrid";

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
};

export default async function () {
  showUI({ height: 436, width: 300 });
  await loadFonts();
  const saveData = await figma.clientStorage.getAsync("params");
  if (saveData) {
    emit("SAVED_DATA", saveData);
  }
  const localData = saveData || {};

  on(
    "SEND",
    async function ({
      rows,
      iconSpacing,
      rowSpacing,
      columnSpacing,
      hexColor,
      opacity,
      iconSize,
      addMetaData,
      scaleIconContent,
    }: {
      rows: string;
      iconSpacing: string;
      rowSpacing: string;
      columnSpacing: string;
      hexColor: string;
      opacity: string;
      iconSize: string;
      addMetaData: boolean;
      scaleIconContent: boolean;
    }) {
      buildIconColumn(
        +rows,
        +iconSpacing,
        +rowSpacing,
        +columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData,
        scaleIconContent
      );

      savePluginData(
        localData,
        rows,
        iconSpacing,
        rowSpacing,
        columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData,
        scaleIconContent
      );
    }
  );
}

function savePluginData(
  localData?: any,
  rows?: string,
  iconSpacing?: string,
  rowSpacing?: string,
  columnSpacing?: string,
  hexColor?: string,
  opacity?: string,
  iconSize?: string,
  addMetaData?: boolean,
  scaleIconContent?: boolean
): void {
  localData.rows = rows;
  localData.iconSpacing = iconSpacing;
  localData.rowSpacing = rowSpacing;
  localData.columnSpacing = columnSpacing;
  localData.hexColor = hexColor;
  localData.opacity = opacity;
  localData.iconSize = iconSize;
  localData.addMetaData = addMetaData;
  localData.scaleIconContent = scaleIconContent;
  figma.clientStorage.setAsync("params", localData);
}
