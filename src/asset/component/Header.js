import "./Header.css"
import { ReactComponent as ComputerImg } from '../image/프로필 컴퓨터.svg';

function Header(){

    function Logo(){
        return(
            <div className="logo">
                <ComputerImg className="computerImg"></ComputerImg>
                <span className="logotext">SE YEONG</span>
            </div>
        )
    }

    function NavBar(){
        return(
            <div className="navbar">
                <span style={{marginLeft:"0px"}}>My Intro</span>
                <span>Project</span>
                <span>Tech Stack</span>
                <span>Etc</span>
            </div>
        )
    }

    return(
        <div className="header">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    )
}

export default Header