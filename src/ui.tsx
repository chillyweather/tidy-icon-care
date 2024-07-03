import {
  Button,
  Container,
  render,
  VerticalSpace,
  TextboxNumeric,
  Text,
} from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useState, useCallback, useMemo, useEffect } from "preact/hooks";
import { useAtom } from "jotai";
import ColorPickerElement from "./IconFix/ColorPicker";
import SizeDropdown from "./IconFix/Dropdown";
import CheckBoxElement from "./IconFix/CheckBox";

import {
  hexColorAtom,
  opacityAtom,
  iconSizeAtom,
  addMetaDataAtom,
  scaleIconContentAtom,
} from "./atoms";

import "!./output.css";

function Plugin() {
  const [rows, setRows] = useState<string>("");
  const [iconSpacing, setIconSpacing] = useState<string>("");
  const [rowSpacing, setRowSpacing] = useState<string>("");
  const [columnSpacing, setColumnSpacing] = useState<string>("");
  const [hexColor, setHexColor] = useAtom(hexColorAtom);
  const [opacity, setOpacity] = useAtom(opacityAtom);
  const [iconSize, setIconSize] = useAtom(iconSizeAtom);
  const [addMetaData, setAddMetaData] = useAtom(addMetaDataAtom);
  const [scaleIconContent, setScaleIconContent] = useAtom(scaleIconContentAtom);

  const handleRowInput = useCallback((e: any) => {
    setRows(e.target.value);
  }, []);

  const handleIconInput = useCallback((e: any) => {
    setIconSpacing(e.target.value);
  }, []);

  const handleRowsInput = useCallback((e: any) => {
    setRowSpacing(e.target.value);
  }, []);

  const handleColumnInput = useCallback((e: any) => {
    setColumnSpacing(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    const data = {
      rows: rows,
      iconSpacing: iconSpacing,
      rowSpacing: rowSpacing,
      columnSpacing: columnSpacing,
      hexColor: hexColor,
      opacity: opacity,
      iconSize: iconSize,
      addMetaData: addMetaData,
      scaleIconContent: scaleIconContent,
    };
    emit("SEND", data);
  }, [
    rows,
    iconSpacing,
    rowSpacing,
    columnSpacing,
    hexColor,
    opacity,
    iconSize,
    addMetaData,
    scaleIconContent,
  ]);

  const handleSavedData = useCallback(
    (data: {
      rows: any;
      iconSpacing: any;
      rowSpacing: any;
      columnSpacing: any;
      hexColor: string;
      opacity: string;
      iconSize: string;
      addMetaData: boolean;
      scaleIconContent: boolean;
    }) => {
      if (data) {
        setRows(data.rows || 10);
        setIconSpacing(data.iconSpacing || 10);
        setRowSpacing(data.rowSpacing || 16);
        setColumnSpacing(data.columnSpacing || 36);
        setHexColor(data.hexColor || "#0D0C0C");
        setOpacity(data.opacity || "100");
        setIconSize(data.iconSize || "24px");
        setAddMetaData(data.addMetaData || false);
        setScaleIconContent(data.scaleIconContent || false);
      }
    },
    []
  );

  on("SAVED_DATA", handleSavedData);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCorrectKeyCombo =
        (event.ctrlKey || event.metaKey) && event.key === "Enter";

      if (isCorrectKeyCombo) {
        handleClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  const LayoutSettings = useMemo(() => {
    const rowStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    };

    const metadataCheckBoxRowStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "50px",
    };

    const scaleCheckBoxRowStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "28px",
    };

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={rowStyle}>
          <Text>Rows</Text>
          <TextboxNumeric
            revertOnEscapeKeyDown
            integer
            onInput={handleRowInput}
            value={rows}
            variant="border"
            style={{ width: "144px" }}
          />
        </div>
        <VerticalSpace space="small" />
        <div style={rowStyle}>
          <Text>Icon spacing ↔️</Text>
          <TextboxNumeric
            revertOnEscapeKeyDown
            integer
            onInput={handleIconInput}
            value={iconSpacing}
            variant="border"
            style={{ width: "144px" }}
          />
        </div>
        <VerticalSpace space="small" />
        <div style={rowStyle}>
          <Text>Row spacing ↕️</Text>
          <TextboxNumeric
            revertOnEscapeKeyDown
            integer
            onInput={handleRowsInput}
            value={rowSpacing}
            variant="border"
            style={{ width: "144px" }}
          />
        </div>
        <VerticalSpace space="small" />
        <div style={rowStyle}>
          <Text>Column spacing ↔️</Text>
          <TextboxNumeric
            revertOnEscapeKeyDown
            integer
            onInput={handleColumnInput}
            value={columnSpacing}
            variant="border"
            style={{ width: "144px" }}
          />
        </div>
        <VerticalSpace space="extraLarge" />
        <div style={rowStyle}>
          <Text>Icon color</Text>
          <ColorPickerElement />
        </div>
        <VerticalSpace space="small" />
        <div style={rowStyle}>
          <Text>Icon size</Text>
          <SizeDropdown />
        </div>
        <VerticalSpace space="medium" />
        <div style={scaleCheckBoxRowStyle}>
          <Text>Scale icon content</Text>
          <CheckBoxElement label="" type="scale" />
        </div>
        <VerticalSpace space="medium" />
        <div style={metadataCheckBoxRowStyle}>
          <Text>Add metadata</Text>
          <CheckBoxElement label="" type="metadata" />
        </div>
        <VerticalSpace space="extraLarge" />
        <button
        className={"bg-indigo-500 text-white p-3 text-lg rounded-lg hover:bg-indigo-400"}
          onClick={() => handleClick()}
        >
          Build icon grid
        </button>
      </div>
    );
  }, [
    rows,
    iconSpacing,
    rowSpacing,
    columnSpacing,
    handleRowInput,
    handleIconInput,
    handleRowsInput,
    handleColumnInput,
    handleClick,
  ]);

  return (
    <Container space="medium">
      <VerticalSpace space="extraLarge" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className={"title"}>Icon grid</h2>
        <div
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        ></div>
      </div>
      <VerticalSpace space="extraLarge" />

      {LayoutSettings}

      <VerticalSpace space="large" />
    </Container>
  );
}

export default render(Plugin);
