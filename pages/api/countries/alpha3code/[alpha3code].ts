import { Country } from "../../../../types/Country";
import type { NextApiRequest,NextApiResponse } from "next";
import alpha3codes from "../../../../data/alpha3codes.json";
import { CountriesCodes } from "../../../../types/CountriesCodes";

type ReturnedData=Country | string;

export default async function handler({method,query:{alpha3code}}:NextApiRequest,res:NextApiResponse<ReturnedData>) {
    if(method!=="GET")
        return res.status(400).json("Wrong HTTP Method");
    const codes:CountriesCodes=alpha3codes as CountriesCodes;
    try{
        if(typeof alpha3code !== "string")
            throw new Error();
        if(!codes[alpha3code.toUpperCase()])
            throw new Error;
        const response=await fetch(`https://restcountries.com/v2/alpha/${alpha3code}`);
        const country:Country=await response.json();
        res.status(200).json(country);
    }catch(err){
        res.status(400).json("Fetching Error");
    }
}