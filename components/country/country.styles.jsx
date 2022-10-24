import styled,{css} from "styled-components";

const darkStyles=css`
    box-shadow:none;
    background:hsl(209, 23%, 22%);
    color:#ddd;
    :hover{
        background:#3e5263;
    }
`;

export const CountryImage=styled.img`
    width:340px;
    height:200px;
    object-fit:cover;
    border-top-left-radius:8px;
    border-top-right-radius:8px;    
`;

export const InfoContainer=styled.div`
    margin:5px 0 25px 25px;
    & p{
        margin-top:0px;
        max-width:310px;
        word-wrap: break-word;
    }
    & .countryName{
        font-size:1.5rem;
        font-weight:600;
    }
`;
export const CountryItem=styled.a`
    all:unset;
    margin:40px 50px;
    display: inline-block;
    -webkit-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    -moz-box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    box-shadow: 1px 1px 7px 2px rgba(214,214,214,1);
    border-radius:8px;
    transition: all .6s ease-in-out;
    cursor: pointer; 
    overflow: hidden;
    transform: scale(0);
    &:hover{
        background-color: #ddd;
    }
    ${({dark})=>dark==="dark" && darkStyles}
    @keyframes initialEffect {
        from{
            transform: scale(0);
        }to{
            transform: scale(1);
        }
    }
    animation: initialEffect .5s ease-in-out .25s 1 normal forwards;
    @media screen and (max-width:879px){
        ${CountryImage}{
            height: auto;
            object-fit: unset;
        }
    }
    @media screen and (max-width:450px){
        margin:40px 15px;
        ${CountryImage}{
            width:235px;
        }
        & p{
            max-width:210px;
        }
    }
`;