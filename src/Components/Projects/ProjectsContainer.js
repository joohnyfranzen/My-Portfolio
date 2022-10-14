import "./ProjectsContainer.css"
export default function ProjectsContainer() {

    return(
        <div className="projectsContainer">
            <div className="backgroundContainer">
            </div>
            <div className="projects">
                <div className="project">
                    <p>Mario Kaboom Js</p>
                    <div className="project-img">
                        <img src="mario.jpg" alt="calculadora" />
                    </div>
                </div>
                <div className="project">
                    <p>Fly swatter Js</p> 
                    <div className="project-img">
                        <img src="matamosca.jpg" alt="calculadora" />
                    </div>
                </div>
                <div className="project">
                    <p>Thoughs Node</p> 
                    <div className="project-img">
                        <img src="thoughs.jpg" alt="thoughs" />
                    </div>
                </div>
                <div className="project">
                    <p>Thoth Laravel React</p>
                    <div className="project-img">
                        <img src="thoth.jpg" alt="thoth" />
                    </div> 
                </div>
            </div>
        </div>
    )
}
