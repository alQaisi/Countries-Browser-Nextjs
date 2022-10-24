import { createContext,useContext,useEffect,useState } from "react";

const ThemeContext=createContext();

export function ThemeProvider({children}){
    
    const [theme,setTheme]=useState();

    function handleThemeChange(){
        const newTheme=theme==="dark"?"light":"dark";
        localStorage.setItem("theme",newTheme);
        setTheme(newTheme);
    }

    useEffect(()=>{
        const oldTheme=localStorage.getItem("theme");
        oldTheme===null?setTheme("light"):setTheme(oldTheme);
    },[]);

    const value={handleThemeChange,theme};

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}