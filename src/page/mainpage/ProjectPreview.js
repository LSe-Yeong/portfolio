import "./ProjectPreview.css"
import mathProjectImage from "../../asset/image/수학문제거래1.png"
import aiCharacterImage from "../../asset/image/AI캐릭터.png"
import yudleImage from "../../asset/image/유들게임.png"

const project1 = {
    "title":"제목: 표절도 유사도 기반 수학 문제 거래 플랫폼",
    "backgrondImage":mathProjectImage,
    "backgroundSize":"548px 398px",
    "backgroundPosition":"-64px -75px",
    "content" : "프로젝트 기간 : 2023.11 ~ 2024.02\n프로젝트 인원 : FE(1), BE(1), UI/UX (1)\n내 역할 : BackEnd"
}

const project2 = {
    "title":" 제목: 게임에서 LLM과 기억 시스템을 활용한 AI 캐릭터",
    "backgrondImage":aiCharacterImage,
    "backgroundSize":"663px 534px",
    "backgroundPosition":"-145px -119px",
    "content" : "프로젝트 기간 : 2024.03 ~ 2024.06\n프로젝트 인원 : FE(1), BE/DB(1), AI(1)\n내 역할 : BackEnd And Database"
}

const project3 = {
    "title":"제목 : Yudle 자음 모음 단어 맞추기",
    "backgrondImage":yudleImage,
    "backgroundSize":"192px 300px",
    "backgroundPosition":"96px 7px",
    "content" : "프로젝트 기간 : 2024.02 ~ 2024.12\n프로젝트 인원 : 개인 프로젝트\n내 역할 : FullStack"
}

function Title(){
    return(
        <div className="title">
            <h1>Project</h1>
        </div>
    )
}

function ProjectPreviewContent(){
    function PreviewContentTemplate(props){
        function DetailButton(props){
            const marginValue = props.marginValue
            return(
                <div className="detailbutton" style={{marginTop:marginValue}}>
                    <h2>자세히 보기</h2>
                </div>
            )
        }

        const project = props.content

        const projectExplanation = project.content.split("\n").map((line, index) => (
            <h6 key={index}>{line}</h6>
          ));

        const projectStyle = {
            backgroundImage : `url(${project.backgrondImage})`,
            backgroundSize : project.backgroundSize,
            backgroundPosition : project.backgroundPosition
        }

        return(
            <div className="previewcontenttemplate">
                <div className="previewimage" style={projectStyle}></div>
                <div style={{marginTop:"8px"}}>
                    <h2>{project.title}</h2>
                    <hr style={{width:"180px",border:"0px",borderTop:"1px solid rgba(66,66,66,0.3)", margin:"8px 0px"}}></hr>
                    {projectExplanation}
                    <DetailButton marginValue="20px"></DetailButton>
                </div>
            </div>
        )
    }

    return(
        <div className="projectpreviewcontent">
            <PreviewContentTemplate content={project1}></PreviewContentTemplate>
            <PreviewContentTemplate content={project2}></PreviewContentTemplate>
            <PreviewContentTemplate content={project3}></PreviewContentTemplate>
        </div>
    )
}

function ProjectPreview(){
    return(
        <div className="projectpreview">
            <Title></Title>
            <ProjectPreviewContent></ProjectPreviewContent>
        </div>
    )
}

export default ProjectPreview