import React, { createContext,useContext,useState } from "react";
import { ProviderProps } from "../types/Provider";

type SearchContextProps={
    searchText:string
    handleTextChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const SearchContext=createContext<SearchContextProps>({} as SearchContextProps);

export const SearchProvider:React.FC<ProviderProps>=({children})=>{
    
    const [searchText,setSearchText]=useState("");

    function handleTextChange({target:{value}}:React.ChangeEvent<HTMLInputElement>){
        setSearchText(value);
    }

    const value={searchText,handleTextChange};

    return(
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    );
}

export const useSearchContext=():SearchContextProps=>{
    return useContext(SearchContext);
}