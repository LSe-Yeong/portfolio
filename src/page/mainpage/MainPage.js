import Header from "../../asset/component/Header"
import "./MainPage.css"
import MyIntro from "./MyIntro"
import Project from "./Project"
import TechStack from "./TechStack"
import Visual from "./Visual"
import Etc from "./Etc"
import Footer from "../../asset/component/Footer"

function MainPage(){
    return(
        <div className="containor">
            <Header></Header>
            <Visual></Visual>
            <MyIntro></MyIntro>
            <Project></Project>
            <TechStack></TechStack>
            <Etc></Etc>
            <Footer></Footer>
        </div>
    )
}

export default MainPage