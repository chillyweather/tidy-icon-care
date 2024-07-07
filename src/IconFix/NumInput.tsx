import { h, JSX } from "preact";
import { useAtom } from "jotai";
import { iconSizeAtom } from "../atoms";
import "./Icons.css";

const NumInput = (props: any) => {
    return (
        <div className={"flex"}>
            <div className={"icon "+props.icon}></div>
            <input type={"number"} value="" placeholder={props.label} />
        </div>
    )
};

export default NumInput;