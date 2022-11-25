type InfoProps={
    name:string,
    children:JSX.Element | JSX.Element[]
    className:string,
}

const CardInfo:React.FC<InfoProps>=({name,children,className})=>{
    return(
        <div className={className}>
            <p className="countryName">{name}</p>
            {children}
        </div>
    );
}
export default CardInfo;