import { NextPage } from "next"
import { useThemeContext } from "../context/Theme.context";
import styles from "../styles/Offline.module.scss";
import homeStyles from "../styles/Home.module.scss";
import { cls } from "../lib/cls";
import Image from "next/image";

const Offline:NextPage=()=>{
    const { theme }=useThemeContext();
    return  (
        <div className={cls(homeStyles.container,{[homeStyles["dark"]]:theme==="dark"},styles.offline)}>
            <div className={styles.svgWrapper}>
                <div className={styles.ratio}/>
                {
                    theme==="dark"
                    ?<Image src="/assets/DarkNetwork.svg" fill alt="network error"/>
                    :<Image src="/assets/Network.svg" fill alt="network error"/>
                }
            </div>
            <h1 className={theme==="dark"?styles.darkWarning:""}>Check your internet connection !</h1>
        </div>
    );
}
export default Offline;