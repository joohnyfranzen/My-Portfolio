import { useState } from "react";
import "./Projects.css"
import { BiCodeAlt, BiNavigation } from "react-icons/bi";
import ProjectsContainer from "../Components/Projects/ProjectsContainer";
export default function Projects() {

    const paragraphs=[
        {id:0,value:"A calculator made in the course of udemy with Javascript, that helped me to elaborate the logic and knowledge about programming."},
        {id:1,value:"A game made in the course of udemy using javascript, the game consists of using elements of the dom html to check where it was clicked to score if the user managed to kill the fly in time, the game has three levels, being easy, difficult, and chucknorris, with different times to kill the fly."},
        {id:2,value:"A game that replicates the old mario, made from a tutorial on youtube using Canvas javascript tools, a framework called Kaboom.js, sprites were used to create the map, monsters, character, and other tools."},
        {id:3,value:"My first application made in node, from the Udemy course, it was created with an MVC structure, with mysql database, with sequelize as orm and express as server, in it, the person could post content that could be seen by others the users."},
        {id:4,value:"A challenge made in node requested by a company from my city to certify my knowledge about the framework, in which several databases were used and also sought the integration of two databases, one of them being a backup to store the information for every 2 o'clock in the morning."},
        {id:5,value:"A backend application made in Nest from a youtube tutorial, where several programming knowledge was used, with a focus on an Api, end to end tests were also used, where I obtained different knowledge of the functioning of these tests to complement my studies."},
        {id:6,value:"This is an application developed together with my brother where I would focus on the back-end and he on the front... In this project we propose to make an App to unite people who need a job, to people who need the service, developed in Nest, the project used a huge database with several relationships, it was placed on Stand-By until we got enough time for its finalization."},
        {id:7,value:"A continuation of the LeidyNest application, where I introduced the Docker tool for carrying out tests in a container to put a real application in the cloud."},
        {id:8,value:"Another step of the LeidyNest application, where this time the sqlite database was used to introduce in docker the possibility of having an internal database without the need for a connection since it was a testing phase."},
        {id:9,value:"The My Property project was carried out from a Udemy course based on Laravel's Api, it was made a back-end Api of an application aimed at the real estate sector, with several options in the database, relationships and many other things, the project was finished in the month of September, bringing a good load of knowledge about this PHP framework."},
        {id:10,value:"Application made in Laravel and GraphQL, from a tutorial on youtube, I developed and applied knowledge of Laravel with its Models and database fully focused on GraphQL, in this project an interesting didactic of documentation was used where I tried to describe to the reader the possible problems that he would find in the execution of the project."},
        {id:11,value:"ThothCode-Laravel was an application that I took a long time to make, totally Fullstack, where I learned and applied a lot of knowledge, without a tutorial and with a huge challenge to develop a real application that could be used as a social network, in it the user could interact with him and with the posts of other users, it was very gratifying to know that I managed to do this project after having studied for so long, I realized that my studies and efforts were rewarded."},
        {id:12,value:"ThothCode-React was a project of great value and development for me, I was based on many tutorials on the internet and help from several Youtube videos to carry out the front-end of this application, since it would be Fullstack, With the use of Axios tool I could be able to make the integration, I had a huge difficulty in several moments, but luckily I managed to finish it."},
        {id:13,value:"And finally this portfolio that you are reading, it was made using React, and at first sight it has been easy to develop, since it is a static site, I am resuming my initial studies about the standard html css and use of some tools and adding icons... Thanks for reading this far, may the force be with you. bye."}, 
    ];

    const [paragraphData, setParagraphData]=useState(paragraphs[0].value)

    const handleClick=(index)=>{
        console.log(index)
        const paragraphSlider=paragraphs[index].value;
        setParagraphData(paragraphSlider)
    }
    return(
        <div className="main-about">
            <div className="about">
                <div className="items">
                    <div className="item-container">
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(0)}>Calculator-JS</p> 
                            <a className="linkTo" rel="noopener noreferrer" target="_blank" href="https://joohnyfranzen.github.io/Calculator-JS/"><BiNavigation className="icon"/></a>
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Calculator-JS"><BiCodeAlt className="icon" /></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(1)}>MataMosca-JS</p> 
                            <a className="linkTo" rel="noopener noreferrer" target="_blank" href="https://joohnyfranzen.github.io/Js-Game-MataMosca/"><BiNavigation className="icon" /></a>
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Js-Game-MataMosca"><BiCodeAlt className="icon"/></a>
                        </div>                        
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(2)}>Mario-JS</p> 
                            <a className="linkTo" rel="noopener noreferrer" target="_blank" href="https://joohnyfranzen.github.io/Mario-Game/"><BiNavigation className="icon"/></a>
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Mario-Game"><BiCodeAlt className="icon"/></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(3)}>Thoughts-Node</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Thougths"><BiCodeAlt className="icon"/></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(4)}>Challenge-Node</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Desafio-Multiplier-Integracao-Node"><BiCodeAlt className="icon"/></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(5)}>RestApi-Nest</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Nest-Rest-api"><BiCodeAlt className="icon"/></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(6)}>LeidyApp-Nest</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Leidy-Nest-App"><BiCodeAlt className="icon"/></a>
                        </div>
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(7)}>LeidyApp-Nest-Docker</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/App-Nest_Docker"><BiCodeAlt className="icon"/></a>
                        </div>     
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(8)}>LeidyApp-Nest-Docker-Sqlite</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Leidy_App-Nest_Sqlite_Docker_v1"><BiCodeAlt className="icon"/></a>
                        </div>    
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(9)}>My_Property-Laravel</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/My_Property-Laravel_Project"><BiCodeAlt className="icon"/></a>
                        </div> 
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(10)}>Laravel-GraphQL</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/GraphQl_Laravel_Example"><BiCodeAlt className="icon"/></a>
                        </div>  
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(11)}>ThothCode-Laravel</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Thoth-Code-Laravel"><BiCodeAlt className="icon"/></a>
                        </div>   
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(12)}>ThothCode-React</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/Thoth-Code-React"><BiCodeAlt className="icon"/></a>
                        </div>  
                        <div className="item-container-2">
                            <p onClick={()=>handleClick(13)}>ThisPortfolio-React</p> 
                            <a className="git" rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen/portfolio"><BiCodeAlt className="icon"/></a>
                        </div>                    
                    </div>
               </div>
                <div className="paragraph">{paragraphData}</div>
            </div>
            <ProjectsContainer/>
        </div>
    )
}