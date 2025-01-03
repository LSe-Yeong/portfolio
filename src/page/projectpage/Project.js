import "./Project.css"
import { ReactComponent as LeftArrow } from '../../asset/image/왼쪽 화살표.svg';
import { ReactComponent as RightArrow } from '../../asset/image/오른쪽 화살표.svg';
import { ReactComponent as StopIcon } from '../../asset/image/정지 아이콘.svg';

const project1={
    "title":"표절도 / 유사도 기반 수학 문제 거래 플랫폼",
    "content":[
        {"item":"프로젝트 배경","content":"시중에 거래되는 수학 문제는 최초 저자를 확인하기 어렵기 때문에 이를 악용하여 표절 문제를 거래하는 문제가 생겨 이를 해결하고자 문제에 표절도를 부여하는 거래 사이트를 구축하고자 함  "},
        {"item":"개발 기간 및 인원","content":"개발 기간 :  2023.11 ~ 2024.02\n개발 인원 :  FE (1), BE (1), UI/UX (1)"},
        {"item":"주요 기능","content":"1. 판매자는 문제를 업로드 할 수 있음\n2. 문제를 업로드 할 때 표절도 검사를 진행함\n3. 표절도 확인 후 문제 등록 가능\n----------------------------------\n1. 구매자는 문제를 탐색할 수 있음\n2. 문제를 구매할 때 해당 문제에 대한 표절도 확인 가능\n3. 유형별로 판매중인 문제 확인 가능"},
        {"item":"기술 스택","content":"React, SpringBoot, MySQL, FastAPI, OpenAI"},
        {"item":"내 역할","content":"SpringBoot를 이용하여 문제 CRUD RestAPI 기능 구현\nMySQL를 이용하여 데이터베이스 설계 및 구축\nReact 담당 동료와 RestAPI 통신 관리"},
        {"item":"기타","content":"깃허브, 관련 논문, 발표 자료"},
    ]}

function Title(){
    return(
        <div className="title">
            <h1>Project</h1>
        </div>
    )
}

function NavigationBar(){
    function NaviBox(){
        return(
            <div className="navibox">
                <div className="naviboxcontent">
                    <LeftArrow className="naviicon"></LeftArrow>
                    <StopIcon className="naviicon"></StopIcon>
                    <RightArrow className="naviicon"></RightArrow>
                    <h5><span style={{fontSize:"20px",fontWeight:"700",color:"black"}}>2</span> / 4</h5>
                </div>
            </div>
        )
    }

    function NaviTitle(props){
        return(
            <div className="navititle">
                <h5>{props.title}</h5>
            </div>
        )
    }

    return(
        <div className="navigationbar">
           <NaviBox></NaviBox>
           <NaviTitle title={project1.title}></NaviTitle>
        </div>
    )
}

function ProjectImage(){
    return(
        <div className="projectimage">
            <div className="projectimagecontent1"></div>
            <div className="projectimagecontent2"></div>
        </div>
    )
}

function ProjectContent(){
    function ProjectContentTemplate(props){
        const project = props.project
        const idx = parseInt(props.idx)
        const projectContent = project.content[idx].content.split("\n").map((line, index) => (
            <h5 key={index}>{line}</h5>
          ));
        const marginValue = idx == 0 ? "0px": "37px"
        return(
            <div>
                <div style={{marginTop:marginValue}}>
                    <h4>{project.content[idx].item}</h4>
                    <hr style={{width:"160px",border:"0px",borderTop:"1px solid rgba(66,66,66,0.3)",marginTop:"6px"}}></hr>
                    <div style={{marginTop:"13px"}}>
                        {projectContent}
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="projectcontent">
            <ProjectContentTemplate project={project1} idx="0"></ProjectContentTemplate>
            <ProjectContentTemplate project={project1} idx="1"></ProjectContentTemplate>
            <ProjectContentTemplate project={project1} idx="2"></ProjectContentTemplate>
            <ProjectContentTemplate project={project1} idx="3"></ProjectContentTemplate>
            <ProjectContentTemplate project={project1} idx="4"></ProjectContentTemplate>
            <ProjectContentTemplate project={project1} idx="5"></ProjectContentTemplate>
        </div>
    )
}

function Project(){
    return(
        <div className="project">
            <Title></Title>
            <NavigationBar></NavigationBar>
            <div style={{display:"flex",alignItems:"center",marginTop:"50px"}}>
                <ProjectImage></ProjectImage>
                <hr style={{height:"800px",border:"0px",borderRight:"0.5px solid rgba(66,66,66,0.3)",marginLeft:"80px"}}></hr>
                <ProjectContent></ProjectContent>
            </div>
        </div>
    )
}

export default Project