import {SearchBoxElem,SearchBoxInput,SearchIcon} from '../filter.styles'

function SearchBox({theme,searchText,setSearchText}){
    function changeText({target:{value}}){
        setSearchText(value);
    }
    return(
        <SearchBoxElem dark={theme}>
            <SearchIcon dark={theme}/>
            <SearchBoxInput aria-label="Search Box" type="text"  placeholder="Search for a country" value={searchText} dark={theme} onChange={changeText}/>
        </SearchBoxElem>
    );
}
export default SearchBox;