import React from "react";
import { cls } from "../../../lib/cls";
import { Theme } from "../../../types/Theme";
import styles from "./BtnCont.module.scss";

type BtnContProps={
    children:JSX.Element | JSX.Element[]
    theme:Theme
    type:"header" | "border"
    onClick?:(event:React.MouseEvent<HTMLDivElement>)=>void
    style?:React.CSSProperties
}

const BtnCont:React.FC<BtnContProps>=({children,theme,type,...rest})=>{
    return(
        <div {...rest} className={cls(styles.btnCont,{[styles.dark]:theme==="dark"},styles[type])}>
            {children}
        </div>
    );
}
export default BtnCont;