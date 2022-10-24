import { RiMoonLine,RiMoonFill} from "react-icons/ri";
import {ButtonContainer,Button,ButtonDark} from './header.styles';

function HeaderButton({theme,handleThemeChange}){
    return(
        <ButtonContainer onClick={handleThemeChange}>
            {
                theme==='dark'
                ?<ButtonDark aria-label="dark moode button"><RiMoonFill/></ButtonDark>
                :<Button aria-label="dark moode button" ><RiMoonLine/></Button>
            }
            <p>Dark Mode</p>
        </ButtonContainer>
    )
}
export default HeaderButton;