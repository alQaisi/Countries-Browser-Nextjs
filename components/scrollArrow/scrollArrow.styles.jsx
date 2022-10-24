import styled from "styled-components";
import {IoIosArrowDropupCircle} from 'react-icons/io';

export const ScrollToTop=styled(IoIosArrowDropupCircle)`
    position: fixed; 
    bottom: 20px;
    right:20px;
    font-size:3rem;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.75;
    color:hsl(207, 26%, 17%);
    &:hover{
        opacity: 1;
    }
    @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 0.5;
        }
    }
    ${({dark})=>dark==="dark" && `color:hsl(0, 0%, 100%);`};
    ${({showscroll})=>showscroll==="true"?`display:block;`:`display:none;`};
`;