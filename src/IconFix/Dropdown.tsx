import { h, JSX } from "preact";
import { Dropdown, DropdownOption } from "@create-figma-plugin/ui";
import { Dispatch, StateUpdater } from "preact/hooks";
import { useAtom } from "jotai";
import { iconSizeAtom } from "../atoms";

function SizeDropdown({ disabled }: { disabled?: boolean }) {
  const [value, setValue]: [string, Dispatch<StateUpdater<string>>] =
    useAtom(iconSizeAtom);
  const options: Array<DropdownOption> = [
    {
      value: "16px",
    },
    {
      value: "24px",
    },
    {
      value: "32px",
    },
    {
      value: "48px",
    },
  ];
  function handleChange(event: any) {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  }

  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="border"
      disabled={disabled}
      style={{ width: "144px" }}
    />
  );
}

export default SizeDropdown;
