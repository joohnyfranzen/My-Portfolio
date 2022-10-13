import "./ProjectsContainer.css"
export default function ProjectsContainer() {

    return(
        <div className="projectsContainer">
            <div className="backgroundContainer"></div>
            <div className="projects">
                <div className="project">
                    <p>Mario Kaboom Js</p>
                    <img src="mario.jpg" alt="calculadora" />
                </div>
                <div className="project">
                    <p>Calculator Js</p>
                    <img id="calculadora" src="calculadora.jpg" alt="calculadora" />
                </div>
                <div className="project">
                    <p>Fly swatter Js</p> 
                    <img src="matamosca.jpg" alt="calculadora" />
                </div>
                <div className="project">
                    <p>Thoughs Node</p> 
                    <img src="thoughs.jpg" alt="thoughs" />
                </div>
                <div className="project">
                    <p>Thoth Laravel React</p> 
                    <img src="thoth.jpg" alt="thoth" />
                </div>
                
            </div>
        </div>
    )
}
