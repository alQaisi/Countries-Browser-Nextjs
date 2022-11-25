import { createContext,useContext,useState,useEffect } from "react";
import { Country } from "../types/Country";
import { useContinentContext } from "./ContinentContext";

type Continents={
    [key:string]:Country[],
}
type CountriesContextType={
    localCountries:Country[],
    continentsCountries:Continents
    isLoading:boolean,
    continent:string | undefined
    setCountries:React.Dispatch<React.SetStateAction<Country[]>>
}
const defaultContinentsValues={"asia":[],"africa":[],"americas":[],"europe":[],"oceania":[],"polar":[]};

export const CountriesContext=createContext<CountriesContextType>({} as CountriesContextType);

const continents=["asia","africa","americas","europe","oceania","polar"];

export const CountriesProvider:React.FC<{children:React.ReactNode}>=({children})=>{

    const { continent }=useContinentContext();


    const [localCountries,setCountries]=useState<Country[]>([]);
    const [isLoading,setIsLoading]=useState(false);
    const [continentsCountries,setContinentsCountries]=useState(defaultContinentsValues as Continents);

    useEffect(()=>{
        async function getContinentCountries(continent:string) {
          try{
            setIsLoading(true);
            const result=await fetch(`/api/countries/continent/${continent}`);
            const data=await result.json();
            if(typeof data ==="string")
              throw new Error();
            setContinentsCountries({...continentsCountries,[continent]:data});
          }catch(err){
            alert("Check your internet connection, or try again later !")
          }finally{
            setIsLoading(false);
          }
        }
        if(continent && continents.includes(continent.toLowerCase())){
          !continentsCountries[continent].length && getContinentCountries(continent.toLowerCase());
        }
      },[continent,continentsCountries]);

    useEffect(()=>{
        if(localCountries.length<=50){
          (async function(){
            try{
              setIsLoading(true);
              const result=await fetch(`/api/countries`);
              const data=await result.json();
              setCountries(data);
            }catch(err){
            }finally{
              setIsLoading(false);
            }
          })()
        }
      },[localCountries]);

    const value={isLoading,localCountries,continentsCountries,setCountries,continent}
    
    return(
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    );
}

export function useCountriesContext(){
    return useContext(CountriesContext);
}