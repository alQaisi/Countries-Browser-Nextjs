import { createContext,useContext,useState,useEffect } from "react";
import { Theme } from "../types/Theme";
import { ProviderProps } from "../types/Provider";

type ThemeContextType={
    theme:Theme,
    handleThemeChange:()=>void
}

const ThemeContext=createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider:React.FC<ProviderProps>=({children})=>{
    
    const [theme,setTheme]=useState<Theme>()

    function handleThemeChange(){
        const newTheme=theme==="dark"?"light":"dark";
        setTheme(newTheme);
    }

    useEffect(()=>{
        const oldTheme=localStorage.getItem("theme");
        oldTheme===null?setTheme("light"):setTheme(oldTheme as Theme);
    },[]);

    useEffect(()=>{
        theme && localStorage.setItem("theme",theme);
    },[theme]);

    const value={theme,handleThemeChange}

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useThemeContext(){
    return useContext(ThemeContext);
}