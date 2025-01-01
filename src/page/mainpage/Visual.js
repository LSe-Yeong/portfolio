import "./Visual.css"
import { ReactComponent as GitHub } from '../../asset/image/깃허브.svg';
import { ReactComponent as Mail } from '../../asset/image/메일 아이콘.svg';
import { ReactComponent as Insta } from '../../asset/image/인스타 아이콘.svg';

function MainContent(){
    return(
        <div className="maincontent">
            <div>
                <span style={{fontSize:"32px",fontWeight:"500"}}>2024</span> <br></br>
                <span style={{fontSize:"64px",fontWeight:"700"}}>Web Developer</span> <br></br>
                <span style={{fontSize:"64px",fontWeight:"700"}}>Portfolio</span>
            </div>
            <div className="profileimgbox">

            </div>
        </div>
    )
}

function Contact(){
    function BasisLogoType(props){
        const type = props.type
        const content = []
        if(type=="github"){
            content.push(<GitHub className="icon"></GitHub>)
            content.push(<span>Lse-Yeong</span>)
        }
        else if(type=="mail"){
            content.push(<Mail className="icon"></Mail>)
            content.push(<span>ocdee39@gmail.com</span>)
        }
        else if(type=="insta"){
            content.push(<Insta className="icon"></Insta>)
            content.push(<span>sezero_lee</span>)
        }
        else{
            content.push(<h2>Error</h2>)
        }

        return(
            <div className="contactlogo">
                {content}
            </div>
        )
    }

    return(
        <div className="contact">
            <BasisLogoType type="github"></BasisLogoType>
            <BasisLogoType type="mail"></BasisLogoType>
            <BasisLogoType type="insta"></BasisLogoType>
        </div>
    )
}

function Visual(){
    return(
        <div className="visual">
            <MainContent></MainContent>
            <hr className="horline"></hr>
            <Contact></Contact>
        </div>
    )
}  

export default Visual