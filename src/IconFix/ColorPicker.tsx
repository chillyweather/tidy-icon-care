import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import { TextboxColor } from "@create-figma-plugin/ui";
import { useAtom } from "jotai";
import { hexColorAtom, opacityAtom } from "../atoms";
import { memo } from "preact/compat";

const MemoizedTextboxColor = memo(TextboxColor);

const ColorPickerElement = ({ isDisabled }: { isDisabled: boolean }) => {
  const [hexColor, setHexColor] = useAtom(hexColorAtom);
  const [opacity, setOpacity] = useAtom(opacityAtom);
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value;
    setHexColor(newHexColor);
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value;
    setOpacity(newOpacity);
  }
  return (
    <MemoizedTextboxColor
      hexColor={hexColor.slice(0, 1) === '#' ? hexColor.slice(1) : hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity.slice(opacity.length - 1, opacity.length) === '%' ? opacity.slice(0, opacity.length - 1) : opacity}
      variant="border"
      disabled={isDisabled}
    />
  );
};

export default ColorPickerElement;
