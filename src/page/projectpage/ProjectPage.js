import { useParams } from "react-router-dom"
import Header from "../../asset/component/Header"
import Project from "./Project"

function ProjectPage(){
    const id = useParams().id
    
    return(
        <div className="containor">
            <Project id={id}></Project>
        </div>
    )
}

export default ProjectPage