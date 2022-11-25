import { Country } from "../../../types/Country";
import type { NextApiRequest,NextApiResponse } from "next";

type ReturnedData=Country[] | string;

export default async function handler({method}:NextApiRequest,res:NextApiResponse<ReturnedData>){
    if(method!=="GET")
        return res.status(400).json("Wrong HTTP Method");
    try{
        const response=await fetch("https://restcountries.com/v2/all");
        const countries:Country[]=await response.json();
        res.status(200).json(countries);
    }catch(err){
        res.status(400).json("Fetching Error");
    }
}