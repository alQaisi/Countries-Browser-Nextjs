import { Theme } from "../../../types/Theme"
import  LightLoader from "../../../public/assets/lightLoader.svg";
import DarkLoader from "../../../public/assets/darkLoader.svg";
import styles from "./styles.module.scss";
import { cls } from "../../../lib/cls";

export const Loader:React.FC<{theme:Theme,className?:string}>=({theme,className=""})=>{
    return theme==="dark"?<DarkLoader className={cls(styles.loader,className)}/>:<LightLoader className={cls(styles.loader,className)}/>
}
