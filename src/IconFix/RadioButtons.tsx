import { h, JSX } from "preact";
import { Dispatch, StateUpdater } from "preact/hooks";
import { useAtom } from "jotai";
import { labelCaseAtom } from "../atoms";
import "!./RadioButtons.css";

export default function () {
  const [value, setValue]: [string, Dispatch<StateUpdater<string>>] =
    useAtom(labelCaseAtom);

  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  }

  return (
    <div className={"flex gap-2 items-center py-2"}>
      <input
        type={"radio"}
        onChange={handleChange}
        checked={value === "lowercase"}
        id={"lowercase"}
        value="lowercase"
      />
      <label for={"lowercase"}>lowercase</label>
      <input
        type={"radio"}
        onChange={handleChange}
        checked={value === "uppercase"}
        id={"uppercase"}
        value="uppercase"
      />
      <label for={"uppercase"}>UPPERCASE</label>
      <input
        type={"radio"}
        onChange={handleChange}
        checked={value === "sentence"}
        id={"sentence"}
        value="sentence"
      />
      <label for={"sentence"}>Sentence Case</label>
    </div>
  );
}
