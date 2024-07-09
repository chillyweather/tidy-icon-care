import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { iconSizeAtom } from "../atoms";
import "!./Icons.css";

const NumInput = (props: any) => {
    return (
        <div className={"input relative flex border-slate-200 border border-solid rounded p-2 gap-2 w-full focus-within:border-indigo-500"}>
            <div className={"icon p-0 pr-6 border-r border-solid border-slate-300 h-full "+props.icon}></div>
            <input type={"number"} value="" placeholder={props.label} className={"w-full"} />
        </div>
    )
};

export default NumInput;