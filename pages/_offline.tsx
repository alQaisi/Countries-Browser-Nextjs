import { NextPage } from "next"
import { useRouter } from 'next/router'
import Image from "next/image";
import Head from 'next/head';
import { useThemeContext } from "../context/Theme.context";
import styles from "../styles/Offline.module.scss";
import homeStyles from "../styles/Home.module.scss";
import { cls } from "../lib/cls";
import { HomeIcon,BackIcon } from "../components/atoms/BtnIcons";
import BtnCont from "../components/molecules/ButtonContainer/BtnCont";
import Button from "../components/atoms/button/button";

const Offline:NextPage=()=>{
    const { theme }=useThemeContext();
    const { push,back } = useRouter()
    return  (
        <div className={cls(homeStyles.container,{[homeStyles["dark"]]:theme==="dark"},styles.offline)}>
            <Head>
                <title>Country Browser | Offline</title>
            </Head>
            <div className={cls(styles.header,{[styles["dark"]]:theme==="dark"})}>
                <BtnCont onClick={back} type="header" theme={theme}>
                    <BackIcon/>
                    <Button type="header">Back</Button>
                </BtnCont>
                <BtnCont onClick={()=>push("/")} type="header" theme={theme}>
                    <HomeIcon/>
                    <Button type="header" >Home</Button>
                </BtnCont>
            </div>
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