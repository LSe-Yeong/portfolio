import "./MyIntro.css"

function ProfileImage(){
    return(
        <div className="profileimage"> </div>
    )
}

function MyIntroContent(){
    const explanation = [
        "기본적인 CS 지식을 확실하게 정립하기 위해 전공 과목 학습에 집중을 하였고\n그 결과 지속적으로 4점대의 학점을 받을 수 있었습니다. ",
        "SE 연구실에서 동료들과 다양한 프로젝트를 진행하였고 그에 대한 성과로 \nLLM과 RAG를 이용하는 쳇봇 프로젝트에서 우수 논문 장려상을 수상했습니다.\n또한 교내 해커톤 대회에 참가하여 “서울시 도서관 통합 시스템” 이라는 주제로 \n장려상을 수상했습니다.  ",
        "친구들 사이에서 Kordle이라는 게임이 유명해져서 이것을 만들어 배포한 경험이 있습니다.\n특히 랭킹 시스템과 타이머 기능을 추가하여 게임을 더욱 확장하여 친구들에게 제공했습니다.",
    ]
    
    function ContentTemplate(props){
        const content = explanation[props.idx].split("\n").map((line, index) => (
            <h6 key={index}>{line}</h6>
          ));
       
        const marginValue = props.idx == 0 ? "0px" : "20px"

        return(
            <div style={{marginTop:marginValue}}>
                <h4>{props.title}</h4>
                <hr style={{width:"250px",border:"0px",borderTop:"1px solid rgba(66,66,66,0.3)", margin:"5px 0px"}}></hr>
                {content}
            </div>
        )
    }

    return(
        <div className="myintrocontent">
            <h3>안녕하세요<br></br>
            <span style={{color:"red"}}>편리한 세상을 만들 개발자</span> 이세영 입니다
            </h3>
            <h5>
            저의 개발자로서의 최종 목표는<br></br>
            편리함과 재미를 줄 수 있는 컨텐츠를 제공하여<br></br>
            세상을 더 편리하게 만드는 것입니다.
            </h5>
            <div style={{marginTop:"20px"}}>
                <ContentTemplate title="1. 기초를 중요하게 생각합니다." idx={0}></ContentTemplate>
                <ContentTemplate title="2. 프로젝트에 있어 도전적인 성격입니다." idx={1}></ContentTemplate>
                <ContentTemplate title="3. 간단한 서비스를 만들어 배포한 경험이 있습니다." idx={2}></ContentTemplate>
            </div>
        </div>
    )
}

function MyIntro(){
    return(
        <div className="myintro" id="myintro">
            <div>
                <h2 style={{marginTop:"70px"}}>My Intro</h2>
            </div>
            <div className="myintroelement">
                <ProfileImage></ProfileImage>
                <MyIntroContent></MyIntroContent>
            </div>
        </div>
    )
}

export default MyIntro