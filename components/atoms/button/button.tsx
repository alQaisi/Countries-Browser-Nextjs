import styles from "./button.module.scss";
import { cls } from "../../../lib/cls";

type ButtonProps={
    type:"header" | "border"
    className?:string
    onClick?:(event:React.MouseEvent<HTMLButtonElement>)=>void
    children:React.ReactNode
    id?:string
    "aria-label"?:string
}

const Button:React.FC<ButtonProps>=({type,children,className="",...rest})=>{
    const { header,border }=styles;
    const buttonClasses=cls(className,{[header]:type==="header"},{[border]:type==="border"});
    return(
        <button {...rest} className={buttonClasses}>{children}</button>
    );
}
export default Button;