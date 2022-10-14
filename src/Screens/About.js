import { useEffect, useRef, useState } from "react"
import "./About.css"
export default function About() {

    const chapters=[
        {id:0, value: "Hello world"},
        {id:1, value: "Hello world"},

    ]
    const numbers=[
        {id:0, value: "Chapter 1"},
        {id:1, value: "Chapter 2"},

    ]

    const crawl = useRef(null)
    const [chapterData, setChapterData]=useState(chapters[0].value)
    const [numberData, setNumberData]=useState(numbers[0].value)

    const handleChapter=(index)=>{
        const chapterSelected=chapters[index].value
        setChapterData(chapterSelected)
        const numberSelected=numbers[index].value
        setNumberData(numberSelected)
        crawl.current.className = "crawl";
        setTimeout(() => {
            crawl.current.className = "crawl animation-crawl";
        }, 1);
    }
    return(
        <div className="about-main">
            <div className="chapter-main">
                <div className="chapters">
                    <div className="chapter">
                        <p onClick={()=>handleChapter(0)}>Chapter One</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(1)}>Chapter Two</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(2)}>Chapter Thre</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(3)}>Chapter Four</p>
                    </div>
                </div>
            </div>
            <div className="fade"></div>
            <section className="star-wars">
                <div ref={crawl} className={"crawl animation-crawl"}>
                    <div className="title">
                        <h1>{numberData}</h1>
                        <br/>
                    </div>
                    <p>
                        {chapterData}
                    </p>
                </div>
            </section>
        </div>
    )
}