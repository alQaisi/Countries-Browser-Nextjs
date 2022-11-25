import {BiSearch} from 'react-icons/bi';

type SearchBoxProps=React.ComponentProps<"input">;

const SearchBox:React.FC<SearchBoxProps>=({className,...props})=>{
    return (
        <div className={className}>
            <BiSearch/>
            <input {...props}/>
        </div>
    );
}

export default SearchBox;