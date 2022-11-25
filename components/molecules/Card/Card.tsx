import { Country } from "../../../types/Country";
import Flag from "../../atoms/card-flag/card-flag";
import CardInfo from "../../atoms/card-info/card-info";
import { cls } from "../../../lib/cls";
import Link from "next/link";
import styles from "./Card.module.scss"
import { motion } from "framer-motion";

type CardProps={
    country:Country
    theme:string
}

const Card:React.FC<CardProps>=({country,theme})=>{
    const { flag,name,population,region,capital,alpha3Code}=country;
    return(
        <Link scroll={false} className={styles.LinkWrapper} href={`/country/${alpha3Code}`}>
            <motion.div whileHover={{scale: 1.125,transition: { duration: .5 },}} whileTap={{ scale: 0.9 }} key={name} className={cls(styles.card,{[styles.dark]:theme==="dark"})}>
                <Flag className={styles.CountryImage} src={flag} alt={name}/>
                <CardInfo className={styles.InfoContainer} name={name}>
                    <p>{"Population:"+population}</p>
                    <p>{"Region:"+region}</p>
                    { capital?<p>{"Capital:"+capital}</p>:<></> }
                </CardInfo>
            </motion.div>
        </Link>
    );
}

export default Card;