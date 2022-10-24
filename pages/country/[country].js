import Head from "next/head";
import { Fragment,useEffect,useContext } from "react";
import alpha3codes from "./alpha3codes.json";
import { useRouter } from 'next/router'
import { useThemeContext } from '../../context/theme.context';

import {
    HomeIcon,BackIcon,HeaderButton,ButtonContainer,
    BorderButton,BorderButtonContainer,
    CountryCont,Info1,Info2,
    CountryPageContainer
} from '../../pagesStyles/countryPage.styles.jsx';

export async function getStaticPaths(){

    const paths=Object.keys(alpha3codes).map(country=>({
        params:{country:country}
    }));

    return {
        paths,
        fallback:true
    }

}

export async function getStaticProps({params:{country}}){
    let data=null;
    try{
        const res=await fetch(`https://restcountries.com/v2/alpha/${country}`);
        data=await res.json();
    }catch(err){
    }
    
    return {props:{
        ...data
    }}

}

function CountryPage({name,topLevelDomain,nativeName,borders,capital,currencies,flag,languages,population,region,subregion},is){

    const { theme}=useThemeContext();

    const { isFallback, push } = useRouter();
    const router=useRouter();
    
    useEffect(()=>{
        if(!isFallback && !name)
            push("/404");
    },[isFallback,name,push]);

    if(isFallback && !name)
        return <Fragment></Fragment>;

    const bordersCountries=borders?.map(border=>({name:alpha3codes[border],alpha3code:border}));
    const bordersButtons=bordersCountries && [<p key={-1}>Border Countries</p>].concat(bordersCountries.map(border=>(
        <BorderButton key={border.alpha3code} onClick={()=>router.push(`/country/${border.alpha3code}`)}>{ border.name }</BorderButton>
    )));

    return name && (
        <Fragment>
            <Head>
                <title>{name}</title>
            </Head>
            <CountryPageContainer dark={theme}>
                <ButtonContainer dark={theme} onClick={()=>router.back()}>
                    <BackIcon/>
                    <HeaderButton>Back</HeaderButton>
                </ButtonContainer>
                <ButtonContainer dark={theme} onClick={()=>router.push("/")}>
                    <HomeIcon/>
                    <HeaderButton>Home</HeaderButton>
                </ButtonContainer>
                <CountryCont>
                    <div className="flag">
                        { /* eslint-disable-next-line */}
                        <img alt={name} src={flag}/>
                    </div>
                    <div className="CountryInfo">
                        <h1>{ name }</h1>
                        <div className="infoCont">
                            <Info1>
                                <p>Native Name: <span>{nativeName}</span></p>
                                <p>Population: <span>{population}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Subregion: <span>{subregion}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </Info1>
                            <Info2>
                                <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                                { currencies && <p>Currencies: <span>{currencies.map(currency=>currency.name+",")}</span></p> }
                                { languages && <p>Languages: <span>{languages.map(language=>language.name+",")}</span></p> }
                            </Info2>
                        </div>
                        { bordersButtons?.length>1 && <BorderButtonContainer dark={theme}>{ bordersButtons }</BorderButtonContainer> }
                    </div>
                </CountryCont>
            </CountryPageContainer>
        </Fragment>
    );
}

export default CountryPage;