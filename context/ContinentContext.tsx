import React, { createContext,useContext,useState,useEffect } from "react";
import { ProviderProps } from "../types/Provider";
import { Continent } from "../types/Continent";
import { useRouter } from "next/router";

type ContinentContextType={
    continent:Continent,
    handleContinentChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void
}
const ContinentContext=createContext<ContinentContextType>({} as ContinentContextType);

const continents=["asia","africa","americas","europe","oceania","polar"];

export const ContinentProvider:React.FC<ProviderProps>=({children})=>{

    const {query,push}=useRouter();

    const [continent,setContinent]=useState("");

    useEffect(()=>{
        typeof query.continent !== "object" && setContinent(query.continent || "");
    },[query.continent]);
    
    function handleContinentChange({target:{value}}:React.ChangeEvent<HTMLSelectElement>){
        setContinent(value);
        if(!value)
            return push('/',undefined,{shallow:true});
        push(`/?continent=${value}`,undefined,{shallow:true});
    }
    
    useEffect(()=>{
        if(continent && !continents.includes(continent.toLowerCase()))
            push('/',undefined,{shallow:true});
    },[continent,push]);

    const value={continent,handleContinentChange};
    
    return (
        <ContinentContext.Provider value={value}>{children}</ContinentContext.Provider>
    );
}

export const useContinentContext=():ContinentContextType=>{
    return useContext(ContinentContext);
}