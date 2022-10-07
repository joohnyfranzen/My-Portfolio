import "./About.css"
export default function About() {
    return(
        <div className="main-about">
            <div className="top-container">
                <h1>RESUME</h1>
            </div>
            <div className="profile-container">
                <div className="profile">
                    <div className="img-container">
                        <img src="photo.png" alt="" />
                    </div>
                    <div className="resume-container">
                        <div className="name">
                            <h2>Jonathan Franzen Fagundes </h2>
                        </div>
                        <div className="resume">
                            <div className="mostused">
                                <h3>Most Used</h3>
                            </div>
                            <div className="container">
                                <div className="languages">
                                    <h3>Languages</h3>
                                    <p>Javascript</p>
                                    <p>Typescript</p>
                                    <p>Php</p>
                                    <p>English</p>
                                </div>
                                <div className="about">
                                    <h3>Tecnologies</h3>
                                    <p>Node</p>
                                    <p>Nest</p>
                                    <p>Laravel</p>
                                    <p>React</p>
                                    <p>GraphQl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}