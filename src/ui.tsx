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
import NumInput from "./IconFix/NumInput";

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

    return (
      <div className={"flex flex-col"}>

        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-8">Grid</h2>
        <div className="flex flex-col gap-6">
          <div className={"flex gap-3"}>
            <NumInput label="No. of rows" icon="row"></NumInput>
            <NumInput label="Label spacing" icon="spacing"></NumInput>
          </div>
          <div className={"flex gap-3"}>
            <NumInput label="Rows gutter" icon="row-gutter"></NumInput>
            <NumInput label="Columns gutter" icon="col-gutter"></NumInput>
          </div>
        </div>

        <hr className={"border-b border-t-0 border-slate-100 border-solid pt-8 mb-4"} />

        {/* <div style={rowStyle}>
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
        </div> */}
        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-4">Icon properties</h2>
        <div style={rowStyle} className={"flex"}>
          <Text>Icon color</Text>
          <ColorPickerElement />
        </div>
        <div style={rowStyle} className={"flex pt-4"}>
          <Text>Icon size</Text>
          <SizeDropdown />
        </div>
        
        <hr className={"border-b border-t-0 border-slate-100 border-solid pt-8 mb-4"} />
        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-4">Content</h2>
        <CheckBoxElement label="Scale icon content" type="scale" />
        <CheckBoxElement label="Add metadata" type="metadata" />
        <button
          className={"bg-indigo-500 text-white font-medium p-3 text-sm rounded-lg outline-blue-200 outline hover:bg-indigo-400 active:bg-indigo-600 focus-visible:outline-4"}
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
      <div className={"flex flex-col gap-2"}>
        <h2 className="font-medium text-sm text-slate-700 pt-8">Some text</h2>
        <p className={"text-zinc-500"}>We need short description for Tidy icons care</p>
      </div>

      {LayoutSettings}

    </Container>
  );
}

export default render(Plugin);
