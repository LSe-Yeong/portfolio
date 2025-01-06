import "./Project.css"
import { ReactComponent as LeftArrow } from '../../asset/image/왼쪽 화살표.svg';
import { ReactComponent as RightArrow } from '../../asset/image/오른쪽 화살표.svg';
import { ReactComponent as StopIcon } from '../../asset/image/정지 아이콘.svg';
import { useNavigate } from "react-router-dom";
import mathImage1 from "../../asset/image/수학문제거래1.png"
import mathImage2 from "../../asset/image/수학문제거래2.png"
import aiCharacterImage1 from "../../asset/image/AI캐릭터.png"
import aiCharacterImage2 from "../../asset/image/AI캐릭터2.png"
import yudleImage1 from "../../asset/image/유들게임.png"
import yudleImage2 from "../../asset/image/유들게임2.png"


const projects=[
    {
        "title":"표절도 / 유사도 기반 수학 문제 거래 플랫폼",
        "content":[
            {"item":"프로젝트 배경","content":"시중에 거래되는 수학 문제는 최초 저자를 확인하기 어렵기 때문에 이를 악용하여 표절 문제를 거래하는 문제가 생겨 이를 해결하고자 문제에 표절도를 부여하는 거래 사이트를 구축하고자 함  "},
            {"item":"개발 기간 및 인원","content":"개발 기간 :  2023.11 ~ 2024.02\n개발 인원 :  FE (1), BE (1), UI/UX (1)"},
            {"item":"주요 기능","content":"1. 판매자는 문제를 업로드 할 수 있음\n2. 문제를 업로드 할 때 표절도 검사를 진행함\n3. 표절도 확인 후 문제 등록 가능\n----------------------------------\n1. 구매자는 문제를 탐색할 수 있음\n2. 문제를 구매할 때 해당 문제에 대한 표절도 확인 가능\n3. 유형별로 판매중인 문제 확인 가능"},
            {"item":"기술 스택","content":"React, SpringBoot, MySQL, FastAPI, OpenAI"},
            {"item":"내 역할","content":"SpringBoot를 이용하여 문제 CRUD RestAPI 기능 구현\nMySQL를 이용하여 데이터베이스 설계 및 구축\nReact 담당 동료와 RestAPI 통신 관리"},
            {"item":"참고자료","content":[{"title":"관련 논문","url":"/files/수학문제논문.pdf"},{"title":"Github","url":"https://github.com/ProblemTradeService/PTD"}]},
        ],
        "imageInfo":[
            {"backgroundImage":mathImage1,"backgroundSize":"770px 558px","backgroundPosition":"-80px -110px"},
            {"backgroundImage":mathImage2,"backgroundSize":"641px 458px","backgroundPosition":"-10px -45px"}
        ]
    },
    {
        "title":"게임에서 LLM과 기억 시스템을 활용한 AI 캐릭터",
        "content":[
            {"item":"프로젝트 배경","content":"보통의 게임 NPC는 정해진 대사만 말하기 때문에 사용자에게 지루함을\n느끼게 할 수 있다. 따라서 사용자의 질문에 자연스러운 답변을 하는\nAI 캐릭터를 도입하고자 한다."},
            {"item":"개발 기간 및 인원","content":"개발 기간 :  2024.03 ~ 2024.06\n개발 인원 :  FE (1), BE / DB (1), AI (1)"},
            {"item":"프로젝트 내용","content":"1. 본 프로젝트에서는 기억 시스템 아키텍처, RAG 기술 등을 이용하여 AI 캐릭터 시스템을 구축해 사용자 몰입 저하 문제를 해결하고자 한다.\n2. RAG와 VectorDB를 활용하여 사용자와 대화한 내용을 기억하고 AI 캐릭터는 다음 대화에서 이를 기억해 답변을 한다.\n3. LLM 모델의 토큰 사용량을 줄이기 위하여 유사도, 중요도, 최신성 이라는 기준을 만들어 사용자의 기억을 가지고 온다."},
            {"item":"기술 스택","content":"Unity, FastAPI, ChromaDB, OpenAI"},
            {"item":"내 역할","content":"자연어 임베딩 모델과 ChromaDB를 이용한 기억 데이터 임베딩 및 입출력 구현\nRAG기술 중 유사성,중요성,최신성을 반영한 Retrieve 시스템 구현\nFastAPI를 이용한 Main Server와 RestAPI 통신 구현\n 개발 테스트를 위한 AWS EC2 가상머신 배포"},
            {"item":"참고자료","content":[{"title":"관련 논문","url":"/files/AI캐릭터논문.pdf"},{"title":"Github","url":"https://github.com/MustRelease/RAGServer"},{"title":"논문 대회 수상","url":"/files/논문대회수상.jpg"}]},    
        ],
        "imageInfo":[
            {"backgroundImage":aiCharacterImage1,"backgroundSize":"777px 624px","backgroundPosition":"-97px -108px"},
            {"backgroundImage":aiCharacterImage2,"backgroundSize":"725px 398px","backgroundPosition":"-53px -9px"}
        ]
    },
    {
        "title":"Yudle 자음 모음 단어 맞추기",
        "content":[
            {"item":"프로젝트 배경","content":"친구들 사이에서 kordle이라는 단어를 맞추는 게임이 유명해지게 돼서 친구들에게 배포, 프레임워크 학습등의 목적으로 진행하게된 클론 프로젝트이다."},
            {"item":"개발 기간 및 인원","content":"개발 기간 :  2024.02 ~ 2024.12\n개발 인원 : 개인 프로젝트 "},
            {"item":"주요 기능","content":"1. 사용자는 6개의 박스에 원하는 자모음을 넣어 조합한 단어를 제출할 수 있다.\n2. 이후 숫자 야구와 비슷한 형태로 자음 모음 위치를 정답 단어와 비교하여 색깔로 표시된다.\n3. 총 6번의 기회가 주어지고 얼마나 빨리 맞췄는지, 얼마나 적은 횟수로 맞췄는지에 따라 점수가 산출된다.\n4. 이후 닉네임을 적어 랭킹 시스템에 등록할 수 있다."},
            {"item":"기술 스택","content":"React, FastAPI, MySQL, AWS EC2"},
            {"item":"고민 사항","content":"1. 단어 체크 알고리즘을 어떻게 구현해야 할 지\n2. 자음 모음 변수는 redux로 관리할지 useState로 관리할지\n3. 반응형 웹 / 앱 으로 모바일 기기에서도 작동하도록 하기"},
            {"item":"참고자료","content":[{"title":"게임 사이트","url":"https://yudle.store/"},{"title":"Github","url":"https://github.com/LSe-Yeong/ggodle"}]},
        ],
        "imageInfo":[
            {"backgroundImage":yudleImage1,"backgroundSize":"258px 400px","backgroundPosition":"181px 0px"},
            {"backgroundImage":yudleImage2,"backgroundSize":"266px 576px","backgroundPosition":"177px -10px"}
        ]
    },
]

function Title(props){
    return(
        <div className="title">
            <h1>{projects[props.id].title}</h1>
        </div>
    )
}

function ProjectImage(props){
    const id = props.id
    const imageCount = 2
    const projectImageInfo = projects[id].imageInfo
    const styles = [{},{}]
    for(let i=0;i<imageCount;i++){
        styles[i].backgroundImage = `url(${projectImageInfo[i].backgroundImage})`
        styles[i].backgroundPosition = projectImageInfo[i].backgroundPosition
        styles[i].backgroundSize = projectImageInfo[i].backgroundSize
    }
 
    return(
        <div className="projectimage">
            <div className="projectimagecontent1" style={styles[0]}></div>
            <div className="projectimagecontent2" style={styles[1]}></div>
        </div>
    )
}

function ProjectContent(props){
    const project = projects[props.id]
    function ProjectContentTemplate(props){
        // const project = props.project[props.id]
        const idx = parseInt(props.idx)
        let projectContent = null
        if(project.content[idx].item!="참고자료"){
            projectContent = project.content[idx].content.split("\n").map((line, index) => (
                <h5 key={index}>{line}</h5>
            ));
        }
        else{
            projectContent = []
            for(let i=0;i<project.content[idx].content.length;i++){
                const etcContent = project.content[idx].content
                projectContent.push(
                    <a href={etcContent[i].url}>
                        <span style={{color:"red",marginRight:"10px"}}>{etcContent[i].title}</span>
                    </a>
                )
            }
        }

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
            <ProjectContentTemplate project={projects} idx="0"></ProjectContentTemplate>
            <ProjectContentTemplate project={projects} idx="1"></ProjectContentTemplate>
            <ProjectContentTemplate project={projects} idx="2"></ProjectContentTemplate>
            <ProjectContentTemplate project={projects} idx="3"></ProjectContentTemplate>
            <ProjectContentTemplate project={projects} idx="4"></ProjectContentTemplate>
            <ProjectContentTemplate project={projects} idx="5"></ProjectContentTemplate>
        </div>
    )
}

function HomeButton(){
    const navigate = useNavigate();

    return(
        <div className="homebutton">
             <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                <h2>뒤로가기</h2>
            </a>
        </div>
    )
}

function Project(props){
    const id = props.id
    if(id>=projects.length){
        return(
            <div>
                <h1 style={{textAlign:"center"}}>프로젝트 정보가 존재하지 않습니다.</h1>
            </div>
        )
    }

    return(
        <div className="project">
            <Title id={id}></Title>
            <div style={{display:"flex",alignItems:"center",marginTop:"50px"}}>
                <ProjectImage id={id}></ProjectImage>
                <hr style={{height:"800px",border:"0px",borderRight:"0.5px solid rgba(66,66,66,0.3)",marginLeft:"80px"}}></hr>
                <ProjectContent id={id}></ProjectContent>
            </div>
            <HomeButton></HomeButton>
        </div>
    )
}

export default Project