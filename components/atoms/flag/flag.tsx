import styles from "./flag.module.scss";
import Image from "next/image";

type FlagProps={
    src:string,
    alt:string
}

const Flag:React.FC<FlagProps>=({alt,src})=>{
    return(
        <Image className={styles.flag} alt={alt} src={src} fill/>
    );
}
export default Flag;