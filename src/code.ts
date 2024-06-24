import { emit, on, showUI } from "@create-figma-plugin/utilities";
import buildIconColumn from "./content/buildIconGrid";

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
};

export default async function () {
  await loadFonts();
  const saveData = await figma.clientStorage.getAsync("params");
  if (saveData) {
    emit("SAVED_DATA", saveData);
  }
  const localData = saveData || {};

  on(
    "SEND",
    async function setData({
      rows,
      iconSpacing,
      rowSpacing,
      columnSpacing,
      hexColor,
      opacity,
      iconSize,
      addMetaData,
    }: {
      rows: string;
      iconSpacing: string;
      rowSpacing: string;
      columnSpacing: string;
      hexColor: string;
      opacity: string;
      iconSize: string;
      addMetaData: boolean;
    }) {
      buildIconColumn(
        +rows,
        +iconSpacing,
        +rowSpacing,
        +columnSpacing,
        hexColor,
        opacity,
        iconSize,
        addMetaData
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
        addMetaData
      );
    }
  );
}

showUI({ height: 404, width: 300 });

function savePluginData(
  localData?: any,
  rows?: string,
  iconSpacing?: string,
  rowSpacing?: string,
  columnSpacing?: string,
  hexColor?: string,
  opacity?: string,
  iconSize?: string,
  addMetaData?: boolean
): void {
  localData.rows = rows;
  localData.iconSpacing = iconSpacing;
  localData.rowSpacing = rowSpacing;
  localData.columnSpacing = columnSpacing;
  localData.hexColor = hexColor;
  localData.opacity = opacity;
  localData.iconSize = iconSize;
  localData.addMetaData = addMetaData;
  figma.clientStorage.setAsync("params", localData);
}
