import { useState,useEffect } from 'react';
import {ScrollToTop} from './scrollArrow.styles';

function ScrollArrow({theme}){
    const [showScroll,setShowScroll]=useState("false");
        
    function checkScrollTop(){
        if(showScroll==="false" && window.pageYOffset>400){
            setShowScroll("true");
        }else if(showScroll && window.pageYOffset<=400){
            setShowScroll("false");
        }
    }
    function scrollTop(){
        window.scrollTo({top:0,behavior:'smooth'});
    }
    useEffect(()=>{
        window.addEventListener('scroll',checkScrollTop);
    },[])
    return(
        <ScrollToTop  dark={theme} showscroll={showScroll} onClick={scrollTop} />
    );
}
export default ScrollArrow;