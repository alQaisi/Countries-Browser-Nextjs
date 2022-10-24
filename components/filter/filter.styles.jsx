import styled,{css} from "styled-components";
import {BiSearch} from 'react-icons/bi';


const filterItemsEffectNormal=css`
    border-radius:8px;
    -webkit-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    -moz-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
`;
const filterItemsEffectDark=css`
    border-radius:8px;
    background:#2b3743;
    color:hsl(0, 0%, 100%);
    box-shadow: none;  
`;


export const SearchIcon=styled(BiSearch)`
    color:lightslategray;
    font-size:1.563rem;
    margin:7px;
    position: relative;
    cursor: pointer;
    ${({dark})=>dark==="dark" && filterItemsEffectDark};
`;

const placeHolderDark=css`
    &::placeholder{
        color:rgb(160, 163, 167);
    }
    color:hsl(0, 0%, 100%);
`;
export const SearchBoxInput=styled.input`
    background:transparent;
    outline:none;
    border:none;
    font-size:1rem;
    position: relative;
    bottom:15px;
    width:600px;
    color:hsl(200, 15%, 8%);
    ${({dark})=>dark==="dark" && placeHolderDark};  
`;

export const SearchBoxElem=styled.div`
    ${({dark})=>dark==="dark"?filterItemsEffectDark:filterItemsEffectNormal};
    width:auto;
    margin-left:50px;
    padding: 10px 25px;
    height:35px;
`;

export const SelectRegion=styled.select`
    margin-right:50px;
    cursor:pointer;
    outline:none;
    border:none;
    min-width:195px;
    padding-left:15px;
    padding-right:20px;
    background:transparent;
    font-family: 'Nunito Sans', sans-serif;
    bottom:-15px;
    font-size:1rem;
    height:auto;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({dark})=>dark==="dark"?filterItemsEffectDark:filterItemsEffectNormal};
`;

export const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:60px;
    @media screen and (max-width:1075px){
        &{
            margin-top:20px;
            margin-bottom:5px;
        }
        ${SearchBoxElem}{
            margin-left:25px;
        }
        ${SearchBoxInput}{
            width:450px;
        }
        ${SelectRegion}{
            margin-right:25px;
            min-width:175px;
        }
    }
    @media screen and (max-width:800px){
        ${SearchBoxElem}{
            height: 25px;
        }
        ${SearchBoxInput}{
            width:300px;
            bottom:20px;
        }
        ${SearchIcon}{
            bottom:5px;
        }
    }
    @media screen and (max-width:650px){
        flex-direction: column;
        ${SearchBoxElem}{
            margin:0 15px;
            padding:0;
            padding-bottom:12px;
        }
        ${SearchBoxInput}{
            font-size:.85rem;
            width:80%;
            bottom:15px;
        }
        ${SearchIcon}{
            bottom:0px;
        }
        ${SelectRegion}{
            margin:25px 25px 0 15px;
            height:35px;
            max-width:75px;
            height:35px;
            font-size:.8rem;
        }
    }
    @media screen and (max-width:490px){
        ${SearchBoxInput}{
            max-width:350px;
        }
    }
`;