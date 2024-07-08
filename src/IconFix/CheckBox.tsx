import { h, JSX } from "preact";
import { Checkbox, Text } from "@create-figma-plugin/ui";
import { Dispatch, StateUpdater } from "preact/hooks";
import { useAtom } from "jotai";
import { addMetaDataAtom, scaleIconContentAtom } from "../atoms";
import "!./CheckBox.css";

export default function ({ label, type }: { label: string; type: string }) {
  const [value, setValue]: [boolean, Dispatch<StateUpdater<boolean>>] =
    type === "metadata"
      ? useAtom(addMetaDataAtom)
      : useAtom(scaleIconContentAtom);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    setValue(newValue);
  }
  return (
    <div className={"flex gap-2 items-center"}>
      <input type={"checkbox"} onChange={handleChange} checked={value} id={label} />
      <label for={label}>{label}</label>
    </div>
    // <Checkbox onChange={handleChange} value={value}>
    //   <Text>{label}</Text>
    // </Checkbox>
  );
}
