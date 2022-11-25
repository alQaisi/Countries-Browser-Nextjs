import SearchBox from "../../atoms/SearchBox/SearchBox";
import Region from "../../atoms/Region/Region";
import styles from "./Filter.module.scss";
import { cls } from "../../../lib/cls";
import { useThemeContext } from "../../../context/Theme.context";
import { useContinentContext } from "../../../context/ContinentContext";
import { useSearchContext } from "../../../context/SearchContext";

const Filter:React.FC=()=>{
    const { searchText,handleTextChange }=useSearchContext();
    const { theme }=useThemeContext();
    const { continent,handleContinentChange }=useContinentContext();
    const filterClasses=cls(styles.Filter,{[styles.dark]:theme==="dark"});
    return (
        <div className={filterClasses}>
            <SearchBox className={styles.SearchBox} aria-label="Search Box" type="search" onChange={handleTextChange} value={searchText} placeholder="Search for a country"/>
            <Region className={styles.Region} aria-label="Select Region" value={continent} onChange={handleContinentChange}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="polar">Polar</option>
            </Region>
        </div>
    );
}

export default Filter;