import { useState,useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useThemeContext } from "../../../context/Theme.context";
import styles from "./scrollArrow.module.scss";
import { cls } from "../../../lib/cls";

function ScrollArrow() {

    const { theme }=useThemeContext();

    const [showScroll,setShowScroll]=useState(false);

    function checkScrollTop(){
        if(window.pageYOffset>400){
            setShowScroll(true);
        }else if(window.pageYOffset<=400){
            setShowScroll(false);
        }
    }

    function scrollTop(){
        window.scrollTo({top:0,behavior:'smooth'});
    }
    useEffect(()=>{
        window.addEventListener('scroll',checkScrollTop);
        //eslint-disable-next-line
    },[]);

    const { arrow,dark,visible }=styles;
    const arrow_classes=cls(arrow,{[dark]:theme==="dark"},{[visible]:showScroll})
    return <IoIosArrowDropupCircle className={arrow_classes} onClick={scrollTop}/>;
}

export default ScrollArrow;