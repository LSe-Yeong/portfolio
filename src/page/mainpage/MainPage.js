import Header from "../../asset/component/Header"
import "./MainPage.css"
import MyIntro from "./MyIntro"
import Project from "./Project"
import Visual from "./Visual"

function MainPage(){
    return(
        <div className="containor">
            <Header></Header>
            <Visual></Visual>
            <MyIntro></MyIntro>
            <Project></Project>
        </div>
    )
}

export default MainPage