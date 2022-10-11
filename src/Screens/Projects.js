import { useState } from "react";
import "./About.css"
export default function About() {

    const paragraphs=[
        {id:0,value:"Hello DEV, my name is Jonathan, I have twenty six years old, a brazilian, studing analisys and system development at Wyden University, "},
        {id:1,value:"Apple1"},
        {id:2,value:"Apple2"},
        {id:3,value:"Apple3"},
        {id:4,value:"Apple4"},
        {id:5,value:"May the force be with you!!!"},
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
                <div className="paragraph">{paragraphData}</div>
                <div className="items">
                    {paragraphs.map((data,i)=>
                    <h1 onClick={()=>handleClick(i)}>.</h1>
                    )}
                </div>
            </div>
        </div>
    )
}