import styled from "styled-components";

export const CountriesContainerElem=styled.div`
    width:100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ${({isError})=>isError && isErrorStyles};
`;

export const LoadMore=styled.button`
    padding:10px 15px;
    box-shadow: 1px 1px 7px 2px rgb(214 214 214);
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    display: block;
    width: fit-content;
    margin: 50px auto 0px;
    position: relative;
    top: -35px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    background-color: #eee;
    :hover{
        background-color: #ccc;
    }
    &.dark{
        background-color: hsl(209,23%,22%);
        color: #ddd;
        box-shadow: none;
        :hover{
            background-color: #5d768b;
        }
    }
`;
