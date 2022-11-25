import styles from "./style.module.scss";
import CountryInfo from "../../molecules/CountryInfo";
import Flag from "../../atoms/flag/flag";
import { Country } from "../../../types/Country";

const CountryCont:React.FC<{country:Country}>=({country})=>{
    return(
        <div className={styles.CountryCont}>
            <div><Flag src={country.flag} alt={country.name}/></div>
            <CountryInfo country={country}/>
        </div>
    );
}
export default CountryCont;