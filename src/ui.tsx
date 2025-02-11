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
import RadioButtonsElement from "./IconFix/RadioButtons";
import NumInput from "./IconFix/NumInput";

import {
  hexColorAtom,
  opacityAtom,
  iconSizeAtom,
  addMetaDataAtom,
  scaleIconContentAtom,
  preserveColorsAtom,
  labelCaseAtom,
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
  const [preserveColors, setPreserveColors] = useAtom(preserveColorsAtom);
  const [labelCase, setLabelCase] = useAtom(labelCaseAtom);

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
      preserveColors: preserveColors,
      labelCase: labelCase,
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
    preserveColors,
    labelCase,
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
      preserveColors: boolean;
      labelCase: string;
    }) => {
      if (data) {
        setRows(data.rows || 10);
        setIconSpacing(data.iconSpacing || 10);
        setRowSpacing(data.rowSpacing || 16);
        setColumnSpacing(data.columnSpacing || 36);
        setHexColor(data.hexColor || "0D0C0C");
        setOpacity(data.opacity || "100%");
        setIconSize(data.iconSize || "24px");
        setAddMetaData(data.addMetaData || false);
        setScaleIconContent(data.scaleIconContent || false);
        setPreserveColors(data.preserveColors || false);
        setLabelCase(data.labelCase || "lowercase");
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
        <div className="flex flex-col gap-4">
          <div className={"flex gap-3"}>
            <NumInput
              label="No. of rows"
              icon="row"
              min="1"
              value={rows}
              setValue={setRows}
            ></NumInput>
            <NumInput
              label="Label spacing"
              icon="spacing"
              min="0"
              value={iconSpacing}
              setValue={setIconSpacing}
            ></NumInput>
          </div>
          <div className={"flex gap-3"}>
            <NumInput
              label="Rows gutter"
              icon="row-gutter"
              min="0"
              value={rowSpacing}
              setValue={setRowSpacing}
            ></NumInput>
            <NumInput
              label="Columns gutter"
              icon="col-gutter"
              min="0"
              value={columnSpacing}
              setValue={setColumnSpacing}
            ></NumInput>
          </div>
        </div>

        <hr
          className={
            "border-b border-t-0 border-slate-100 border-solid pt-4 mb-0"
          }
        />

        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-4">
          Icon properties
        </h2>
        <div style={rowStyle} className={"flex w-60"}>
          <p>Color:</p>
          <ColorPickerElement isDisabled={preserveColors} />
        </div>
        <div style={rowStyle} className={"flex pt-4 w-60"}>
          <p>Icon size:</p>
          <SizeDropdown />
        </div>

        <hr
          className={
            "border-b border-t-0 border-slate-100 border-solid pt-4 mb-0"
          }
        />
        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-4">
          Content
        </h2>
        <CheckBoxElement label="Scale icon content" type="scale" />
        <CheckBoxElement label="Add metadata" type="metadata" />
        <hr
          className={
            "border-b border-t-0 border-slate-100 border-solid pt-4 mb-0"
          }
        />
        <h2 className="font-medium text-sm text-slate-700 pb-4 pt-4">Label</h2>
        <RadioButtonsElement />
        <button
          className={
            "bg-indigo-500 text-white font-medium p-3 text-sm rounded-lg outline-blue-200 outline mt-10 hover:bg-indigo-400 active:bg-indigo-600 focus-visible:outline-4"
          }
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
        <h2 className="font-medium text-sm text-slate-700 pt-5">Some text</h2>
        <p className={"text-zinc-500"}>
          We need short description for Tidy icons care
        </p>
      </div>

      {LayoutSettings}
    </Container>
  );
}

export default render(Plugin);
