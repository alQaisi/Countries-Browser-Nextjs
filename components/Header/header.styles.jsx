import styled,{css} from "styled-components";

export const Button=styled.button`
    cursor: pointer;
    font-weight:lighter;
    outline:none;
    border:none;
    background:rgb(0 0 0 /0);
    font-size:20px;
    margin-bottom:5px;
    margin-right:5px;
`;
export const ButtonDark=styled(Button)`
    color: white;
    background:#2b3743;
`;

export const ButtonContainer=styled.div`
    display:flex;
    margin-top:7.5px;
    font-size:1.125rem;
    margin-right:75px;
    font-weight:400;
    cursor: pointer;
`;

export const HeaderTitle=styled.p`
    font-weight:800;
    font-size:1.5rem;
    margin-left:75px;
    margin-top:20px;
`;

const DarkHeaderStyles=css`
    color: white;
    background:#2b3743;
    -webkit-box-shadow: 0px 3px 0px 1px rgba(29,42,51,1);
    -moz-box-shadow: 0px 3px 0px 1px rgba(29,42,51,1);
    box-shadow: 0px 3px 0px 1px rgba(29,42,51,1);
`;
export const HeaderContainer=styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;  
    -webkit-box-shadow: 0px 1px 0px 1px rgba(194,194,194,0.43);
    -moz-box-shadow: 0px 1px 0px 1px rgba(194,194,194,0.43);
    box-shadow: 0px 1px 0px 1px rgba(194,194,194,0.43);
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${({dark})=>dark==="dark" && DarkHeaderStyles};
    @media screen and (max-width:700px){
        ${HeaderTitle}{
            margin-left:50px;
            font-size:1.25rem;
        }
        ${ButtonContainer}{
            margin-right:50px;
            font-size:1rem;
        }
    }
    @media screen and (max-width:475px){
        ${HeaderTitle}{
            margin-left:25px;
            font-size:1rem;
        }
        ${ButtonContainer}{
            margin-right:25px;
            font-size:0.813rem;
        }
    }
    @media screen and (max-width:320px){
        ${HeaderTitle}{
            margin-left:15px;
            font-size:.8rem;
        }
        ${ButtonContainer}{
            margin-right:15px;
            font-size:.75rem;
        }
        ${Button}{
            font-size:.938rem;
            margin-right:2px;
            margin-bottom:2.5px;
        }
    }
`;