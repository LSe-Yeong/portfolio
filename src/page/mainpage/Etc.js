import "./Etc.css"

function Title(){
    return(
        <div className="title">
            <h1>Etc</h1>
        </div>
    )
}

function EtcContent(){
    const education = ["장충고등학교 졸업 (2019.02)","서울시립대학교 졸업 (2025.02)"]
    const license = ["컴퓨터 활용 능력 1급","워드 프로세서 1급","Opic IM1"]
    const award = ["제5회 인공지능학술대회 우수논문 장려상","서울시립대학교 제1회 해커톤 대회 장려상 "]
    const activity = ["서울시립대학교 SE연구실 (2023.11 ~ 2025.02)","서울시립대학교 실전문제연구대회 참여(2023.11~2024.01 , 2024.09 ~ 2025.01)"]
    const career = ["없음"]
    const contact = ["GitHub : @Lse-Yeong","Phone : 010-5029-1387","Mail : ocdee39@gmail.com"]

    function ContentTemplate(props){
        const content = []
        for(let i=0; i<props.content.length;i++){
            const ele = props.content[i]
            content.push(<h5>{ele}</h5>)
        }

        return(
            <div className="etccontent">
                <h3 style={{fontSize:"35px"}}>{props.title}</h3>
                <hr style={{width:"289px",border:"0px",borderTop:"1px solid rgba(66,66,66,0.3)", marginTop:"8px"}}></hr>
                {content}
            </div>
        )
    }

    return(
        <div>
            <div>
                <div style={{display:"flex", marginLeft:"130px",marginRight:"130px" , justifyContent:"space-between",margin:"70px 130px"}}>
                    <ContentTemplate title="Education" content={education}></ContentTemplate>
                    <ContentTemplate title="License" content={license}></ContentTemplate>
                    <ContentTemplate title="Career" content={career}></ContentTemplate>
                </div>
                <div style={{display:"flex",marginLeft:"130px",marginRight:"130px", justifyContent:"space-between", margin:"70px 130px"}}>
                    <ContentTemplate title="Award" content={award}></ContentTemplate>
                    <ContentTemplate title="Activity" content={activity}></ContentTemplate>
                    <ContentTemplate title="Contact" content={contact}></ContentTemplate>
                </div>
            </div>
        </div>
    )
}

function Etc(){
    return(
        <div className="etc">
            <Title></Title>
            <EtcContent></EtcContent>
        </div>
    )
}

export default Etc