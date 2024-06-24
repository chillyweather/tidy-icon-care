import { h, JSX } from "preact";
import { Checkbox, Text } from "@create-figma-plugin/ui";
import { Dispatch, StateUpdater } from "preact/hooks";
import { useAtom } from "jotai";
import { addMetaDataAtom } from "../atoms";

export default function ({ label }: { label: string }) {
  const [value, setValue]: [boolean, Dispatch<StateUpdater<boolean>>] =
    useAtom(addMetaDataAtom);
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    setValue(newValue);
  }
  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>{label}</Text>
    </Checkbox>
  );
}
