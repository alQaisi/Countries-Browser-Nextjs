import { Fragment,useEffect } from "react";
import Layout from "../../components/Layout/Layout.component";
import Head from "next/head";
import CountriesContainer from "../../components/countriesContainer/countriesContainer.component";
import { useFilterContext } from "../../context/filter.context";

export async function getStaticPaths(){
    
    const paths=["africa","americas","asia","europe","oceania","polar"]
        .map(continent=>({params:{continent}}));

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{continent}}){
    
    const res=await fetch(`https://restcountries.com/v2/region/${continent}`);
    const data=await res.json();

    return {props:{
        data,continent
    }}

}

function Continent({data,continent}){
    const {setContinent,searchText,setSearchText,setVisited}=useFilterContext();
    useEffect(()=>{
        setVisited(true);
        setContinent(continent);
    },[]);

    return (
        <Fragment>
            <Head>
                <title>{ continent }</title>
            </Head>
            <CountriesContainer countries={data}/>
        </Fragment>
    );
}
export default Continent;

Continent.getLayout=function getLayout(page){
    return(
      <Layout>
        {page}
      </Layout>
    );
}