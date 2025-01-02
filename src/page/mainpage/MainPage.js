import Header from "../../asset/component/Header"
import "./MainPage.css"
import MyIntro from "./MyIntro"
import Project from "./Project"
import TechStack from "./TechStack"
import Visual from "./Visual"
import Etc from "./Etc"

function MainPage(){
    return(
        <div className="containor">
            <Header></Header>
            <Visual></Visual>
            <MyIntro></MyIntro>
            <Project></Project>
            <TechStack></TechStack>
            <Etc></Etc>
        </div>
    )
}

export default MainPage