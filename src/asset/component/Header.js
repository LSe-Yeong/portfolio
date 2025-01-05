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
                <a href="#myintro"><span style={{marginLeft:"0px"}}>My Intro</span></a>
                <a href="#project"><span>Project</span></a>
                <a href="#techstack"><span>Tech Stack</span></a>
                <a href="#etc"><span>Etc</span></a>
            </div>
        )
    }

    return(
        <div className="header">
            <a href="/"><Logo></Logo></a>
            <NavBar></NavBar>
        </div>
    )
}

export default Header