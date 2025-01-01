import "./MyIntro.css"

function ProfileImage(){
    return(
        <div className="profileimage"> </div>
    )
}

function MyIntroContent(){
    const education = ["장충고등학교 졸업 (2019.02)","서울시립대학교 졸업(2025.02)"]
    const license = ["컴퓨터 활용 능력 1급","워드 프로세서 1급","Opic IM1"]
    const award = ["제5회 인공지능학술대회 우수논문 장려상","서울시립대학교 해커톤 대회 장려상 "]
    const activity = ["서울시립대학교 SE연구실 (2023.11 ~  )","서울시립대학교 실전문제연구대회 참여"]

    function ContentTemplate(props){
        const content = []
        for(let i=0; i<props.content.length;i++){
            const ele = props.content[i]
            content.push(<h5>{ele}</h5>)
        }

        return(
            <div className="myintrocontent">
                <h3 style={{fontSize:"35px"}}>{props.title}</h3>
                <hr style={{width:"289px",border:"0px",borderTop:"1px solid rgba(66,66,66,0.3)", marginTop:"8px"}}></hr>
                {content}
            </div>
        )
    }

    return(
        <div style={{marginLeft:"40px"}}>
            <h3>안녕하세요 <br></br> <span style={{color:"red"}}>세상을 바꾸는 개발자</span> 호랑사또 입니다</h3>
            <div>
                <div style={{width:"618px", display:"flex", justifyContent:"space-between",marginTop:"70px"}}>
                    <ContentTemplate title="학력" content={education}></ContentTemplate>
                    <ContentTemplate title="자격증" content={license}></ContentTemplate>
                </div>
                <div style={{width:"618px", display:"flex", justifyContent:"space-between", marginTop:"35px"}}>
                    <ContentTemplate title="수상" content={award}></ContentTemplate>
                    <ContentTemplate title="활동" content={activity}></ContentTemplate>
                </div>
            </div>
        </div>
    )
}

function MyIntro(){
    return(
        <div className="myintro">
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