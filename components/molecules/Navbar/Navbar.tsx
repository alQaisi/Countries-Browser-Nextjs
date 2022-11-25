import styles from "./Navbar.module.scss";
import ThemeToggle from "../../atoms/ThemeToggle/themeToggle";
import Logo from "../../atoms/Logo/logo";
import { useThemeContext } from "../../../context/Theme.context";
import { cls } from "../../../lib/cls";

const Navbar:React.FC=()=>{
    const { theme,handleThemeChange }=useThemeContext();
    return (
        <div className={cls(styles.Navbar,{[styles.dark]:theme==="dark"})}>
            <Logo className={styles.logo}>Where in the world?</Logo>
            <ThemeToggle className={styles.themeToggle} onClick={handleThemeChange}>
                {`${theme==="dark"?"Light":"Dark"} Mode`}
            </ThemeToggle>
        </div>
    );
}

export default Navbar;
