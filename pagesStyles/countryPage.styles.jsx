import styled,{css} from "styled-components";
import {BsArrowLeft} from 'react-icons/bs';
import {BiHome} from 'react-icons/bi';

const HeaderIconsStyles=css`
    font-size:1.75rem;
    position: relative;
    top:7.5px;
`;
export const HomeIcon=styled(BiHome)`
    ${HeaderIconsStyles};
`;
export const BackIcon=styled(BsArrowLeft)`
    ${HeaderIconsStyles};
`;

export const HeaderButton=styled.button`
    font-family: 'Nunito Sans', sans-serif;
    font-size:1.2rem;
    border:none;
    outline:none;
    background:transparent;
    cursor: pointer;
`;

const DarkButtonContainerStyles=css`
    box-shadow:none;
    background:#2b3743;
    ${HeaderButton}{
        color:#f5f5f5;
    }
`;
export const ButtonContainer=styled.div`
    cursor: pointer;
    border-radius:5px;
    padding:0px 35px 10px 35px;
    margin:50px;
    display:inline-block;
    -webkit-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    -moz-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    ${({dark})=>dark==="dark" && DarkButtonContainerStyles};
`;

export const BorderButton=styled.button`
    cursor: pointer;
    border:none;
    outline:none;
    background:transparent;
    -webkit-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    -moz-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    margin:10px;
    font-size:1rem;
    border-radius:5px;
    padding:7px 20px;
`;
const BorderContainerDarkStyles=css`
    button{
        color:white;
        box-shadow:none;
        background:#2b3743;
    }
`;
export const BorderButtonContainer=styled.div`
    text-align:left;
    p{
        font-weight:800;
        font-size:1.5rem;
        text-align:left;
    }
    ${({dark})=>dark==="dark" && BorderContainerDarkStyles};
`;

export const CountryCont=styled.div`
    margin:50px;
    display:flex;
    .flag img{
        height:auto;
        width:550px
    }
    .CountryInfo{
        margin-left:175px;
        & h1{
            font-size:3rem;
        }
    }
    .infoCont{
        display: flex;
    }
`;

const InfoStyles=css`
    p{
        font-weight:800;
        font-size:1.5rem;
    }
    span{
        font-weight:normal;
    }
`
export const Info1=styled.div`
    margin-right:50px;
    ${InfoStyles};
`;
export const Info2=styled.div`
    margin-left:50px;
    ${InfoStyles};
`;

const DarkCountryPageStyles=css`
    background:hsl(207, 26%, 17%);
    color: #f5f5f5;
`;

export const Warning=styled.h1`
    font-size:2rem;
    min-width: 275px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const CountryPageContainer=styled.div`
    width:100%;
    height: 100%;
    min-height:100vh;
    overflow: auto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background:#f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito Sans', sans-serif;
    font-display: swap;  
    ${({dark})=>dark==="dark" && DarkCountryPageStyles};
    
    .loader{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (max-width:1500px){
        ${CountryCont} .CountryInfo{
            margin-left:50px;
        }
    }
    @media screen and (max-width:1370px){
        ${CountryCont} .CountryInfo{
            margin-left:40px;
            ${Info1} p,${Info2} p{
                font-size:1rem;
            }
        }
        ${CountryCont} .flag img{
            width:425px;
        }
    }
    @media screen and (max-width:1130px){
        ${CountryCont} {
            margin:25px;
            flex-direction:column;
            align-items: center;
            .flag img{
                width:525px;
            }
        }
    }
    @media screen and (max-width:700px){
        ${CountryCont} {
            .flag img{
                width:450px;
            }
            .CountryInfo{
                align-self: flex-start;
                margin-left: 0px;
                .infoCont{
                    flex-direction:column;
                    ${Info1},${Info2}{
                        margin:0;
                    }
                }
            }
        }  
    }
    @media screen and (max-width:650px){
        ${ButtonContainer}{
            margin:25px 15px;
            padding:0 20px 7px 20px;
        }
        ${HeaderButton}{
            font-size:1rem;
        }
        ${HomeIcon},${BackIcon}{
            font-size:1.5rem;
        }
        ${BorderButton}{
            font-size:.8rem;
        }
    }
    @media screen and (max-width:575px){
        ${CountryCont}{
            .flag img{
                width:300px;
            }
            .CountryInfo{
                ${BorderButton}{
                    font-size:.7rem;
                }
            }
        } 
    }
    @media screen and (max-width:360px){
        ${CountryCont}{
            .flag img{
                width:250px;
            }
            .CountryInfo{
                h1{
                    font-size:2.5rem;
                }
            }
        } 
    }
`;