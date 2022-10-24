import { Children,Fragment,useState } from 'react';
import Country from '../country/country.component';
import { CountriesContainerElem,LoadMore } from './countriesContainer.styles.jsx';
import { useThemeContext } from '../../context/theme.context';

function CountriesContainer({countries,searchText}){
    const { theme }=useThemeContext();
    const [pageSize,setPageSize]=useState(30);
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsCount,setItemsCount]=useState(countries.slice(0,pageSize*currentPage).length);
    
    function loadMoreCountries(){
        const newPage=currentPage+1;
        const newItemCount=pageSize*newPage;
        setCurrentPage(newPage);
        setItemsCount(newItemCount);
    }

    const items=Children.toArray(Object.values(countries.slice(0,pageSize*currentPage)).filter(country=>(
        country.name.toLowerCase().includes(searchText)
    )).map(country=>(
        <Country {...country} theme={theme}/>
    )));

    return (
        <Fragment>
            <CountriesContainerElem> { items } </CountriesContainerElem>;
            { itemsCount<countries.length && <LoadMore className={theme} onClick={loadMoreCountries}>Load More</LoadMore> }
        </Fragment>
    );
}
export default CountriesContainer;