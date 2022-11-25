import styles from "../../styles/Country.module.scss";
import Head from 'next/head';
import Link from "next/link";
import { cls } from '../../lib/cls';
import { Fragment,useEffect } from "react";
import { GetStaticProps,GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Country } from "../../types/Country";
import { useThemeContext } from "../../context/Theme.context";
import alpha3codes from "../../data/alpha3codes.json";
import { useRouter } from 'next/router'
import BtnCont from "../../components/molecules/ButtonContainer/BtnCont";
import Button from "../../components/atoms/button/button";
import { HomeIcon,BackIcon } from "../../components/atoms/BtnIcons";
import CountryContainer from "../../components/organisms/Country-Container";
import { Loader } from "../../components/atoms/Loader";

interface Params extends ParsedUrlQuery{
    country_code:string
}

export const getStaticPaths:GetStaticPaths=async()=>{
    const paths=Object.keys(alpha3codes).map(country=>({
        params:{country_code:country}
    }));

    return {
        paths,
        fallback:true
    }
}

export const getStaticProps:GetStaticProps<{country:Country},Params>=async(context)=>{
    const params=context.params!;
    const country_code=params.country_code;
    let data:Country={} as Country;
    try{
        const res=await fetch(`https://restcountries.com/v2/alpha/${country_code.toUpperCase()}`);
        data=await res.json();
    }catch(err){
    }
    return {props:{
        country:data
    }}
}

const CountryPage:NextPage<{country:Country}>=({country})=>{
    
    const { theme }=useThemeContext();
    const { isFallback,push,back } = useRouter()

    useEffect(()=>{
        if(!isFallback && !country?.name!)
            push("/404");
    },[isFallback,country?.name,push]);

    if(!country?.name)
        return <div className={cls(styles.countryPageContainer,{[styles.dark]:theme==="dark"})}><Loader theme={theme}/></div>

    return (
        <Fragment>
            <Head>
                <title>{country.name}</title>
            </Head>
            <div className={cls(styles.countryPageContainer,{[styles.dark]:theme==="dark"})}>
                <BtnCont onClick={back} type="header" theme={theme}>
                    <BackIcon/>
                    <Button type="header">Back</Button>
                </BtnCont>
                <Link style={{all:"unset"}} href="/"><BtnCont type="header" theme={theme}>
                    <HomeIcon/>
                    <Button type="header" >Home</Button>
                </BtnCont></Link>
                <CountryContainer country={country}/>
            </div>
        </Fragment>
    );
}
export default CountryPage;