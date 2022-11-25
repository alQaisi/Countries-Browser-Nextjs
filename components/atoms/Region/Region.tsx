type OptionProps=React.ComponentProps<"option">;

type RegionProps=React.ComponentProps<"select"> & {
    children:JSX.Element | JSX.Element[];
}

export const Option:React.FC<OptionProps>=({children,value})=>{
    return(
        <option value={value}>{children}</option>
    );
} 

const Region:React.FC<RegionProps>=({children,...rest})=>{
    return (
        <select {...rest}>
            {children}
        </select>
    );
}
export default Region;