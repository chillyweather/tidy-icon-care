import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { iconSizeAtom } from "../atoms";
import "!./Icons.css";

const NumInput = (props: any) => {
    return (
        <div className={"flex border-slate-200 border border-solid rounded p-2 gap-2 w-full"}>
            <div className={"icon p-0 pr-5 border-r border-solid border-slate-200 "+props.icon}></div>
            <input type={"text"} value="" placeholder={props.label} className={"w-full"} />
        </div>
    )
};

export default NumInput;