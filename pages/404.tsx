import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.scss";
import { useThemeContext } from "../context/Theme.context";
import { cls } from "../lib/cls";
import Button from "../components/atoms/button/button";

const NotFoundPage:NextPage=()=>{
    const { theme }=useThemeContext();
    return (
        <div className={cls(styles.Error,{[styles["dark"]]:theme==="dark"})}>
            <Head>
                <title>Countries Browser | 404 Not found</title>
            </Head>
            <Link href="/"><button>Go to Home</button></Link>
            <div className={styles.svgWrapper}>
                <div className={styles.ratio}/>
                {
                    theme==="dark"
                    ?<Image src="/assets/404dark.svg" fill alt="404 not found"/>
                    :<Image src="/assets/404normal.svg" fill alt="404 not found"/>
                }
            </div>
        </div>
    );
}
export default NotFoundPage;