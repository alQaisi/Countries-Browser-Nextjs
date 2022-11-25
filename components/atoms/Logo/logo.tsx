type Props=React.ComponentProps<"p"> & {
    children:string
}
const Logo:React.FC<Props>=({children,...rest})=>{
    return (
        <p {...rest}>{children}</p>
    );
}

export default Logo;