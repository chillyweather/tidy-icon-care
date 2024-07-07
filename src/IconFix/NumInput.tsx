import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { iconSizeAtom } from "../atoms";
import "!./Icons.css";

const NumInput = (props: any) => {
    return (
        <div className={"flex border-slate-100 border-2 border-solid rounded-md p-1"}>
            <div className={"icon "+props.icon}></div>
            <input type={"number"} value="" placeholder={props.label} className={"w-full"} />
        </div>
    )
};

export default NumInput;