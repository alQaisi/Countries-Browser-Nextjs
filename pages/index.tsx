import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/molecules/Navbar/Navbar'
import Filter from '../components/molecules/Filter/Filter'
import ScrollArrow from '../components/atoms/ScrollArrow/scrollArrow'
import CountriesContainer from '../components/organisms/Countries-Container'
import { GetServerSideProps, NextPage } from "next"
import { Country } from '../types/Country'
import { useThemeContext } from '../context/Theme.context'
import { useCountriesContext } from '../context/CountriesContext'
import { cls } from '../lib/cls'
import { useEffect } from "react";
import { Loader } from '../components/atoms/Loader'

export const getServerSideProps:GetServerSideProps=async()=>{
  try{
    const response=await fetch("https://restcountries.com/v2/all");
    const countries=await response.json();
    return {
      props:{
        countries:countries.slice(0,50)
      }
    }
  }catch(err){
    return {
      props:{
        countries:[],
        notFound:true
      }
    }
  }
}

type HomeProps={
  countries:Country[]
  notFound?:string
}

const Home:NextPage<HomeProps>=({countries,notFound})=>{

  const {isLoading,isError,setCountries,localCountries,continentsCountries,continent}=useCountriesContext();

  const { theme }=useThemeContext();

  useEffect(()=>{
    if(!localCountries.length)
      setCountries(countries);
  },[localCountries,setCountries,countries]);

  const countriesToRender=(continent && !!continentsCountries[continent].length)?continentsCountries[continent]:localCountries;
  return (
    <div className={cls(styles.container,{[styles.dark]:theme==="dark"})}>
      <Head>
        <title>{continent || "Countries Browser"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Filter/>
      <ScrollArrow/>
      {
        isError && 
          <div className={styles.svgWrapper}>
                <div className={styles.ratio}/>
                {
                    theme==="dark"
                    ?<Image src="/assets/DarkNetwork.svg" fill alt="network error"/>
                    :<Image src="/assets/MainNetwork.svg" fill alt="network error"/>
                }
          </div>
      }
      { 
        !isError && (isLoading
        ?<Loader theme={theme}/>
        :(!!countries.length && <CountriesContainer countries={countriesToRender}/>))
      }
      {/* { (notFound || isError) && <h2 className={cls(styles.warning,{[styles.darkWarning]:theme==="dark"})}>There is something wrong! <p>please try again later</p></h2> } */}
    </div>
  );
}

export default Home;