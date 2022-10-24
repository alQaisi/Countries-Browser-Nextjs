import {SelectRegion} from '../filter.styles';
import { useEffect } from "react";
import { useRouter } from "next/router";

function RegionSelector({theme,continent,setContinent,setVisited}){
    const router=useRouter();
    function changeRegion({target:{value}}){
        setVisited(false);
        if(!value)
            router.push("/")
        setContinent(value);
    }

    return(
        <SelectRegion aria-label="Select Region" dark={theme} value={continent} onChange={changeRegion}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="polar">Polar</option>
        </SelectRegion>
    );
}

export default RegionSelector;