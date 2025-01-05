import Header from "../../asset/component/Header"
import "./MainPage.css"
import MyIntro from "./MyIntro"
import TechStack from "./TechStack"
import Visual from "./Visual"
import Etc from "./Etc"
import Footer from "../../asset/component/Footer"
import ProjectPreview from "./ProjectPreview"

function MainPage(){
    return(
        <div className="containor" id="home">
            <Header></Header>
            <Visual></Visual>
            <MyIntro></MyIntro>
            <ProjectPreview></ProjectPreview>
            <TechStack></TechStack>
            <Etc></Etc>
            <Footer></Footer>
        </div>
    )
}

export default MainPage