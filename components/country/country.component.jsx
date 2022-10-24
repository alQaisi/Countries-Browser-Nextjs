import Link from 'next/link.js';
import {CountryImage,InfoContainer,CountryItem} from './country.styles.jsx';

function Country(props){
    const {flag,name,population,region,capital,alpha3Code,theme}=props;
    return(
        <Link href={`/country/${alpha3Code}`}><CountryItem className='country' dark={theme}>
            <CountryImage data-alpha2code={alpha3Code} src={flag} alt={name}/>
            <InfoContainer>
                <p className="countryName">{name}</p>
                <p className="countryInfo">{"Population:"+population}</p>
                <p className="countryInfo">{"Region:"+region}</p>
                <p className="countryInfo">{"Capital:"+capital}</p>
            </InfoContainer>
        </CountryItem></Link>
    );
}
export default Country;