import { h, JSX } from "preact";
import { Dispatch, StateUpdater } from "preact/hooks";
import { useAtom } from "jotai";
import {
  addMetaDataAtom,
  scaleIconContentAtom,
  preserveColorsAtom,
} from "../atoms";
import "!./CheckBox.css";

export default function ({ label, type }: { label: string; type: string }) {
  const [value, setValue]: [boolean, Dispatch<StateUpdater<boolean>>] = (() => {
    switch (type) {
      case "metadata":
        return useAtom(addMetaDataAtom);
      case "preserve":
        return useAtom(preserveColorsAtom);
      default:
        return useAtom(scaleIconContentAtom);
    }
  })();
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    setValue(newValue);
  }
  return (
    <div className={"flex gap-2 items-center py-2"}>
      <input
        type={"checkbox"}
        onChange={handleChange}
        checked={value}
        id={type}
      />
      <label for={type}>{label}</label>
    </div>
  );
}
