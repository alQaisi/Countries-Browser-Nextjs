import Image from "next/image";
import React from "react";
import { ImageProps } from "next/image";

const CardFlag:React.FC<ImageProps>=({className,alt,...props})=>{
    return (
        <div className={className} style={{position:"relative"}}>
            <Image  {...props} alt="alt" fill sizes="350px"/>
        </div>
    );
}
export default CardFlag;