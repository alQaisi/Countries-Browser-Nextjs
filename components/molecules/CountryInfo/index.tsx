import styles from "./styles.module.scss";
import { Country } from "../../../types/Country";
import InfoCont from "../../atoms/InfoCont";
import { useThemeContext } from "../../../context/Theme.context";
import alpha3codes from "../../../data/alpha3codes.json";
import Button from "../../atoms/button/button";
import Link from "next/link";
import BtnCont from "../ButtonContainer/BtnCont";

type CountriesCodesType={
    [key:string]:string
}
const data:CountriesCodesType=alpha3codes as CountriesCodesType

const CountryInfo:React.FC<{country:Country}>=({country:{name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders}})=>{
    const { theme }=useThemeContext();
    const bordersCountries=borders?.map((border)=>({name:data[border],alpha3code:border}));

    const bordersButtons=bordersCountries && [<p key={-1}>Border Countries</p>].concat(bordersCountries.map(border=>(
        <Link  style={{all:"unset"}} key={border.alpha3code} href={`/country/${border.alpha3code}`}><Button type="border">{ border.name }</Button></Link>
    )));
    
    return(
        <div className={styles.CountryInfo}>
            <h1>{ name }</h1>
            <div className={styles.infoCont}>
                <InfoCont order="first">
                    <p>Native Name: <span>{nativeName}</span></p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Subregion: <span>{subregion}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </InfoCont>
                <InfoCont order="second">
                    <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                    { currencies && <p>Currencies: <span>{currencies.map(currency=>currency.name+",")}</span></p> }
                    { languages && <p>Languages: <span>{languages.map(language=>language.name+",")}</span></p> }
                </InfoCont>
            </div>
            { bordersButtons?.length>1 && <BtnCont style={{cursor:"initial"}} type="border" theme={theme}>{bordersButtons}</BtnCont> }
        </div>
    );
}
export default CountryInfo;