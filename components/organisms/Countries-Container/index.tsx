import { Country } from "../../../types/Country"
import Card from "../../molecules/Card/Card";
import { Children } from "react";
import styles from "./styles.module.scss";
import { useThemeContext } from "../../../context/Theme.context";
import { useSearchContext } from "../../../context/SearchContext";
import { cls } from "../../../lib/cls";

type ContainerProps={
    countries:Country[]
}

const CountriesContainer:React.FC<ContainerProps>=({countries})=>{

    const { theme="" }=useThemeContext();
    const { searchText }=useSearchContext();
    const cards=Children.toArray(countries
        .filter(country=>country.name.toLowerCase().includes(searchText.toLowerCase()))
        .map(country=><Card country={country} theme={theme}/>))
    
    return(
        <div id="countries-container" className={cls(styles.container)}>
            {cards}
        </div>
    );
}

export default CountriesContainer;