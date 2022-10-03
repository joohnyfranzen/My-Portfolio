import "./Home.css"
export default function Home() {
    return(
        <div>
            <div className="border-effect">
                <span className="light-effect">.</span>
                <div className="effect">Hello World</div>
            </div>
            <div className="name-container">
                <div className="in-container">
                    <h1>Hi, <br/>
                        I´m Jonathan, <br/> 
                        a fullstack <span className="web">Web</span> developer.
                    </h1>
                    <div className="down-container">
                        <p>
                            Front-end
                            </p>
                            <p>
                            Back-end
                            </p>
                            <p>
                            Fullstack
                            </p>
                    </div>
                </div>
            <div className="home-img"><img src="/moon.jpg" alt="" /></div>        
            </div>    
        </div>
    )
}