import Header from "../../asset/component/Header"
import "./MainPage.css"
import MyIntro from "./MyIntro"
import Visual from "./Visual"

function MainPage(){
    return(
        <div className="containor">
            <Header></Header>
            <Visual></Visual>
            <MyIntro></MyIntro>
        </div>
    )
}

export default MainPage