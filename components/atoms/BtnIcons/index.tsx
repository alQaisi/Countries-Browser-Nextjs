import styles from "./styles.module.scss";
import { BsArrowLeft } from 'react-icons/bs';
import  {BiHome } from 'react-icons/bi';

export const HomeIcon:React.FC=()=>{
    return(
        <BiHome className={styles.icon}/>
    );
}

export const BackIcon:React.FC=()=>{
    return(
        <BsArrowLeft className={styles.icon}/>
    );
}