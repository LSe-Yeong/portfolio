import "./TechStack.css"
import reactImage from "../../asset/image/리액트.png"
import reactReduxImage from "../../asset/image/리액트리덕스.jpg"
import springBootImage from "../../asset/image/스프링부트.png"
import fastAPIImage from "../../asset/image/FastAPI.webp"
import mySQLImage from "../../asset/image/mySQL.webp"
import chromaImage from "../../asset/image/chromaDB.png"
import awsEC2Image from "../../asset/image/awsEC2.jfif"
import vercelImage from "../../asset/image/vercel.jfif"

const frontEnd = {
    "title":"FrontEnd",
    "content":[
        {"title":"react","backgroundImage":reactImage,"backgroundSize":"388px 224px","backgroundPosition":"-104px -20px"},
        {"title":"react-redux","backgroundImage":reactReduxImage,"backgroundSize":"280px 186px","backgroundPosition":"-48px 0px"},
    ]}

const backEnd = {
    "title":"BackEnd / DB",
    "content":[
        {"title":"SpringBoot","backgroundImage":springBootImage,"backgroundSize":"334px 208px","backgroundPosition":"-77px -11px"},
        {"title":"FastAPI","backgroundImage":fastAPIImage,"backgroundSize":"424px 222px","backgroundPosition":"-124px -20px"},
        {"title":"MySQL","backgroundImage":mySQLImage,"backgroundSize":"210px 210px","backgroundPosition":"-16px -16px"},
        {"title":"Chroma DB","backgroundImage":chromaImage,"backgroundSize":"558px 301px","backgroundPosition":"-187px -47px"},
    ]}

    
const awsInfra = {
    "title":"Aws / Infra",
    "content":[
        {"title":"AWS EC2","backgroundImage":awsEC2Image,"backgroundSize":"497px 315px","backgroundPosition":"-158px -38px"},
        {"title":"Vercel","backgroundImage":vercelImage,"backgroundSize":"704px 396px","backgroundPosition":"-264px -98px"},
    ]}


function Title(){
    return(
        <div className="title">
            <h1>Tech Stack</h1>
        </div>
    )
}

function TechStackContent(){
    function TechStackImage(props){
        const techStack = props.content[props.idx]
        const backgroundImage = techStack.backgroundImage
        const backgroundSize = techStack.backgroundSize
        const backgroundPosition = techStack.backgroundPosition

        const marginValue = props.idx == 0 ? "0px" : "40px"

        const imageStyle = {
            backgroundImage : `url(${backgroundImage})`,
            backgroundSize : backgroundSize,
            backgroundPosition : backgroundPosition
        }

        return(
            <div className="techstackimagecontent" style={{marginLeft:marginValue}}>
                <div className="techstackimage" style={imageStyle}></div>
                <div>
                    <h2>{techStack.title}</h2>
                </div>
            </div>
        )
    }

    function TechStackTemplate(props){

        const stackType = props.content
        const techImageContent = []

        for(let i=0; i<stackType.content.length;i++){
            techImageContent.push(<TechStackImage content={stackType.content} idx={i}></TechStackImage>)
        }

        return(
            <div className="techstacktemplate">
                <div>
                    <h2>{props.content.title}</h2>
                </div>
                <div style={{display:"flex", marginTop:"25px"}}>
                    {techImageContent}
                </div>
            </div>
        )
    }

    return(
        <div className="techstackcontent">
            <TechStackTemplate content={frontEnd}></TechStackTemplate>
            <TechStackTemplate content={backEnd}></TechStackTemplate>
            <TechStackTemplate content={awsInfra}></TechStackTemplate>
        </div>
    )
}

function TechStack(){
    return(
        <div className="techstack">
            <Title></Title>
            <TechStackContent></TechStackContent>
        </div>
    )
}  

export default TechStack