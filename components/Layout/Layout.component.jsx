import Header from "../Header/header.component";
import Filter from "../filter/filter.component";
import ScrollArrow from "../scrollArrow/scrollArrow.component";
import { useThemeContext } from '../../context/theme.context';
import { useFilterContext } from "../../context/filter.context";
import { useEffect } from "react";

function Layout({children}){
    const { theme,handleThemeChange }=useThemeContext();
    const {searchText,setSearchText,setVisited,continent,setContinent}=useFilterContext();
    
    useEffect(()=>{
        return ()=>{
            setSearchText("");
            // setContinent("");
        }
    },[setContinent,setSearchText]);

    return (
        <div className={`main ${theme}`}>
            <Header {...{theme,handleThemeChange}} />
            <Filter {...{theme,setVisited,searchText,setSearchText,continent,setContinent}} />
            {children}
            <ScrollArrow theme={theme}/>
        </div>
    );
}
export default Layout;