import HeaderButton from './headerButton.component';
import {HeaderContainer,HeaderTitle} from './header.styles';

function Header({theme,handleThemeChange}){
    return(
        <HeaderContainer dark={theme}>
            <HeaderTitle>Where in the world?</HeaderTitle>
            <HeaderButton theme={theme} handleThemeChange={handleThemeChange}/>
        </HeaderContainer>
    )
}
export default Header;