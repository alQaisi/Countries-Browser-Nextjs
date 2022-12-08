import { RiMoonLine,} from "react-icons/ri";
import { MdLightMode } from "react-icons/md";

type props=React.ComponentProps<"button"> & {
    children:string
}

const ThemeToggle:React.FC<props>=({children,className,onClick,...rest})=>{
    return (
        <span className={className} onClick={onClick}>
            <button id="theme-toggle" aria-label="theme-toggle" {...rest}>
                <RiMoonLine/>
                <MdLightMode/>
            </button>
            <p>{children}</p>
        </span>
    );
}

export default ThemeToggle;