import { h, JSX } from "preact";
import { useEffect } from "preact/hooks";
import "!./Icons.css";

const NumInput = ({
  icon,
  label,
  min,
  value,
  setValue,
}: {
  icon: string;
  label: string;
  min: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  useEffect(() => {
    if (value < min) {
      setValue(min);
    }
  }, [value, min]);

  function handleValueChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div>
      <div className={"text-slate-600"}>{label}</div>
      <div
        className={
          "input relative flex border-slate-200 border border-solid rounded p-2 gap-2 w-full focus-within:border-indigo-500"
        }
      >
        <div
          className={
            "icon p-0 pr-6 border-r border-solid border-slate-300 " + icon
          }
        ></div>
        <input
          type={"number"}
          value={value}
          placeholder={label}
          className={"w-full"}
          min={parseInt(min)}
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default NumInput;
