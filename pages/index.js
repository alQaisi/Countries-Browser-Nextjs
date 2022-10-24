import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout.component';
import CountriesContainer from '../components/countriesContainer/countriesContainer.component';


export async function getStaticProps(){


  const response=await fetch("https://restcountries.com/v2/all");
  const data=await response.json();
  return {props:{
    countries:data
  }};
}

export default function Home({countries}) {
  return (
    <CountriesContainer countries={countries}/>
  );
}

Home.getLayout=function getLayout(page){
  return(
    <Layout>
      {page}
    </Layout>
  )
}

