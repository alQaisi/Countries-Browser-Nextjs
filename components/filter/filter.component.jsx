import SearchBox from './Searchbox/searchbox.component';
import RegionSelector from './regionSelector/regionSelector.component';
import { FilterContainer } from './filter.styles';

function Filter({theme,searchText,setSearchText,continent,setVisited,setContinent}){
    return(
        <FilterContainer>
            <SearchBox searchText={searchText} setSearchText={setSearchText} theme={theme}/>
            <RegionSelector continent={continent} setContinent={setContinent} setVisited={setVisited} theme={theme}/>
        </FilterContainer>
    );
}
export default Filter;