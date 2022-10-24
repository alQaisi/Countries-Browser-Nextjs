import { createContext,useEffect,useContext,useState } from "react";
import { useRouter } from "next/router";

const FilterContext=createContext({});

export function FilterProvider({children}){
    const router=useRouter();
    const [continent,setContinent]=useState("");
    const [visited,setVisited]=useState(false);
    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
        setSearchText("")
        if(!visited && continent){
            router.push(`/continent/${continent}`)
        }
    },[continent]);


    const value={searchText,setSearchText,continent,setContinent,setVisited};

    return (
        <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    );
}

export function useFilterContext() {
    return useContext(FilterContext);
}