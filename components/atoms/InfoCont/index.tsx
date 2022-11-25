import styles from "./styles.module.scss";
import { Theme } from "../../../types/Theme";
import { cls } from "../../../lib/cls";

const InfoCont:React.FC<{order:"first"|"second",children:JSX.Element | JSX.Element[]}>=({order,children})=>{
    const classes=cls(styles.info,styles[order]);
    return(
        <div className={classes}>
            {children}
        </div>
    );
}
export default InfoCont;