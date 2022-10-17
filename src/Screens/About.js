import { useRef, useState } from "react"
import "./About.css"
export default function About() {

    
    const chapters=[
        {id:0, value: "Our story tells about a small blue planet, located in the solar system, which is in one of the outer spiral arms of the galaxy called the milky way, in the edge quadrant of the Laniakea supercluster, which is 500 million light years in diameter, and is one of 100,000 galaxies in this cluster, why do we talk about it? because in particular, on this blue planet, with excellent conditions to harbor life, there is a world moved by news... "},
        {id:1, value: "In mid of 1996 a boy named Jonathan was born, with a desire to learn, in a small town called Jaraguá do Sul, he lived his childhood having a lot of fun, at 8 years old, his father had bought a computer, where he began to research and listen to music on the internet, which by the way, in his time was very weak, but it was an innovation that transformed the world, so he installed his first MMORPG and had adventures  through the lands of Prontera in the game called Ragnarok Online, at 11 he had already played several games , and had a good sense of writing and basic English, he was totally immersed in the world of computing, learning and living different experiences with people from different places over the internet... "},
        {id:2, value: "When he was thirteen years old, his teachers put him to write texts on the computer because they noticed his ease and speed in writing, he realy liked that, having developed aptitude for many things such as basic logic, he began to take English courses to advance in this strange language, and to his surprise several ports and sources from different places became possible improving his knowledge, that's when, he became a teenager... "},
        {id:3, value: "Jonathan now, a teenager, once a boy very immersed in the world of computing, he started going out with his friends, skateboarding, playing ball and meeting girls, that's when he met the girl who would turn him into who he is today by the way, he lived with affection, studied in different places, until he joined the IFSC teaching institution as a technician in Chemistry, there he made several friends, learned many different things, realizing how the world was a very big place, he also noticed how what he knew was a mere drop in an ocean of knowledge and incredible people... "},
        {id:4, value: "Studying then at the IFSC, he learned several interesting things, wrote many others too, developing with a group of friends, his first scientific project, where he indicated his skills and those of his friends versed in computing knowledge as an object of study, leaving their first academic project, 'Electronic games and learning', in this project they studied the skills and knowledge that a person can develop from board games and the possibility of using them as a tool in the classroom... "},
        {id:5, value: "His second project was also one of his ideas, which obviously was seen as positive and attractive by colleagues in his group, 'There's a lot of moisture and background in this city' he said, so they went on to research fungal microbial growth, using two additives, to delay its growth, between these two products was turpentine, a compound used in the paper industry because it contains antimicrobial properties, while the other product was called silver nanoparticle, produced in the laboratory with the help of one of the professors, it is responsible for damaging hyphae cells, thus preventing their growth... "},
        {id:6, value: "While his third project was about researching medicinal clay, as well as the ways it acted on the skin, a bibliographic mapping was carried out, understanding that it has several minerals that act as small funnels, with their geometries, making the dirt out from the skin, when it comes across it, is grabbed by its structures, in addition to several other health benefits... "},
        {id:7, value: "Unfortunately, before graduating, Jonathan had left his coach aside due to personal problems, passed the Enem and finished high school, starting then to dedicate himself to understanding fungi, something that had left him very excited, he understood its properties, like their capabilities, and predicted that in the not too distant future, it would be possible, from fungi and bacteria to basically decompose almost everything, using genetic engineering, they could use the fungus as a producer of medicines and specific products that were scarce..."},
        {id:8, value: "From that stage, he dedicated himself to discovering ways to make fungi viable in cultures of decomposition of organic residues for the generation of electric energy with natural gas, facing several obstacles to have any success, this turned his eyes away, but not discouraged him, it was when he started to study about energy generated from fungi with a technology called PEM, teflon a membrane that would allow the proton passage, this opens the possibility of generating PEM batteries for organic decomposition cultures, it was In the same period he started a biomedical college, but after two years of studies he locked it up to dedicate himself to something else... "},
        {id:9, value: "Finally arriving in the present times, Jonathan with the support of his namesake, discussed about the formalization of this technology and what he would need to be able to develop it on a scale that would help the environment, and his friend said to him 'Programming can do everything and a lot more', after he insisted a lot, as much as Jonathan's brother, he endeavored to learn what this programming was about, he had already experienced it with games where he changed the environment and developed new utilities, but he would never have put a knowledge practical about these tools, that's when this wonderful and magical adventure begins..."},
        {id:10, value: "Starting in the world of programming, he found himself totally, he realized that it was not just an area of ​​activity, but a whole cluster of information that came together and shared knowledge to improve the lives of everyone on the planet, all this vision made his eyes sparkle and his heart fills with the possibilities he saw since he was a child, improving people's lives in a real way, the world was being transformed and he would have real participation in it, he threw himself headlong, spending more than 6 hours a day in his room studying the most diverse tools and technologies, he got to know the concepts and languages ​​that he had not witnessed, created tools, took courses, asked for advice from his brother, many councils, his brother Ederson must have been tired, for that it was more than 10 times in the same day that he helped him to fix bugs and defects that he found on the way, opening many doors, and allowing him to go further, in his I just had the following message, all this knowledge will be used, everything I'm learning can be applied in a real way, not only in projects, but in concepts to innovate, create from scratch, new technologies and, or methodologies... Thank you for reading this far!!! May the force be with you"},
    ]


    const capitulos=[
        {id:0, value: "Nossa história fala de um pequeno planeta azul, localizado no sistema solar, que por sua vez fica em um dos braços expirais externos da galáxia denominada via láctea, no quadrante da borda do superaglomerado Laniakea que possui 500 milhões de anos luz de diâmetro, sendo está uma de 100 mil galáxias existentes nesse aglomerado, por que falamos disso? porque em especial, nesse planeta azul, com condições excelentes para abrigar vida, existe um mundo movido a novidades... "},
        {id:1, value: "Em meados de 1996 um garoto chamado Jonathan nasceu, com uma chama de vontade por aprender, em uma pequena cidade chamada Jaraguá do Sul, viveu sua infância se divertindo muito, aos 8 anos, seu pai havia comprado um computador, onde começou a pesquisar e ouvir músicas pela internet, que por sinal, em sua época era muito fraca, mas era uma inovação que transformou o mundo, então instalou seu primeiro MMORPG e se aventurou pelas terras de Prontera no jogo chamado Ragnarok Online, aos 11 já havia jogado diversos jogos, e tinha um senso de escrita e um inglês básico, ele estava totalmente imerso no mundo da computação, aprendendo e vivendo diversas experiencias com pessoas de lugares diferentes pela internet..."},
        {id:2, value: "Quando tinha treze anos, seus professores o colocavam para redigir textos no computador por que percebiam sua facilidade e velocidade para escrever, ele gostava muito do que fazia, tendo criado aptidão para muitas coisas como lógica básica, começou a fazer cursos de inglês para avançar nessa língua estranha, e para sua surpresa diversas portas e fontes de lugares diferentes se tornaram possíveis aprimorando seu conhecimento, foi quando, ele virou adolescente... "},
        {id:3, value: "Jonathan agora, adolescente, outrora um garoto muito imerso no mundo da computação, começou a sair com seus amigos, andar de skate, jogar bola e conhecer garotas, foi quando conheceu a garota que o transformaria em quem ele é hoje por sinal, viveu com afeto, estudou em lugares diferentes, até que entrou para a instituição de ensino IFSC no técnico em Química, lá ele fez diversos amigos, aprendeu muitas coisas diferentes, percebendo como o mundo era um lugar muito grande, também notou como o que ele sabia era uma mera gota em um oceano de conhecimentos e pessoas incríveis... "},
        {id:4, value: "Estudando então no IFSC, ele aprendeu diversas coisas interessantes, escreveu muitas outras também, desenvolvendo com um grupo de amigos, seu primeiro projeto cientifico, onde ele indicou as habilidades suas e de seus amigos versados em conhecimentos de computação como objeto de estudo, saindo então seu primeiro projeto acadêmico, 'Jogos eletrônicos e a aprendizagem', neste projeto estudaram as habilidades e conhecimentos que uma pessoa pode desenvolver a partir de jogos de mesa e a possibilidade de eles serem utilizados como ferramenta nas salas de aula..."},
        {id:5, value: "Seu segundo projeto, também foi uma de suas ideias, que obviamente, foi vista como positiva e atrativa pelos colegas de seu grupo, 'Tem muita umidade e fundo nessa cidade' ele disse, então passaram a pesquisar o crescimento microbiano de fungos, utilizando dois aditivos, para retardar seu desenvolvimento, entre esses dois produtos, estava a terebintina, composto utilizado na indústria do papel por conter propriedades antimicrobianas, enquanto o outro produto era chamado de nanopartícula de prata, produzido em laboratório com o auxílio de um dos professores, ela é responsável por danificar as células das hifas, impedindo assim o seu crescimento... "},
        {id:6, value: "Enquanto seu terceiro projeto, se tratava de pesquisar a argila medicinal, como também as formas que ela agia na pele, foi feito um mapeamento bibliográfico, se entendendo que ela possui diversos minerais que atuam como pequenos funis, com suas geometrias, fazendo com que a sujeira da pele, quando se encontre com ela, seja agarrada por suas estruturas, além também de diversos outros benefícios a saúde da mesma...  "},
        {id:7, value: "Infelizmente, antes de se formar, Jonathan havia deixado seu técnico de lado por problemas pessoas, passou pelo Enem e finalizou o ensino médio, começando então a se dedicar a entender fungos, algo que o havia deixado com muita empolgação, entendeu suas propriedades, como suas capacidades, e previu que em um futuro não muito distante, seria possível, a partir de fungos e bactérias decompor basicamente quase tudo, utilizando de engenharia genética, eles poderiam utilizar do fungo como produtor de medicamentos e produtos específicos que eram escassos... "},
        {id:8, value: "A partir dessa fase, ele se dedicou a descobrir formas de tornar os fungos viáveis em culturas de decomposição de resíduos orgânicos para geração de energia elétrica com gás natural, se deparando com diversos obstáculos para ter algum sucesso, isso o desviou os olhares, mas não o desmotivou, foi quando ele começou a estudar sobre a energia gerada a partir de fungos com uma tecnologia chamada PEM, e a teflon uma membrana que possibilitaria a passagem protônica, isso abre a possibilidade de gerar baterias de PEM para culturas de decomposição orgânica, foi nesse mesmo período que ele começou uma faculdade de biomedicina, mas apôs dois anos de estudos a trancou para se dedicar a algo além... "},
        {id:9, value: "Finalmente chegando nos tempos atuais, Jonathan com apoio de seu xará, discutia sobre a formalização dessa tecnologia e o que ele precisaria para poder a desenvolver em uma escala que ajudasse ao meio ambiente, e seu amigo o dizia 'A programação pode fazer tudo e muito mais', apôs muito ele insistir, tanto como o irmão de Jonathan, ele se empenhou em aprender o que se tratava essa tal programação, já havia a experienciado com jogos onde ele mudava o ambiente e desenvolvia novas utilidades, mas nunca teria colocado um conhecimento prático a respeito dessas ferramentas, é então que se inicia essa maravilhosa e mágica aventura... "},
        {id:10, value: "Iniciando no mundo da programação, ele se encontrou totalmente, percebeu que não se tratava apenas de uma área de atuação, mas de todo um aglomerado de informações que se uniam e compartilhavam conhecimento para melhorar a vida de todos no planeta, toda essa visão fez seus olhos brilharem e seu coração se encher com as possibilidades que ele via desde quando era criança, melhorar a vida das pessoas de forma real, o mundo estava sendo transformado e ele teria real participação nisso, ele se jogou de cabeça, passando mais de 6 horas por dia dentro de seu quarto estudando as mais diversas ferramentas e tecnologias, passou a conhecer os conceitos e linguagens que não havia presenciado, criou ferramentas, fez cursos, pediu concelhos de seu irmão, muitos concelhos, seu irmão Ederson deve ter ficado cansado, por que eram mais de 10 vezes em um mesmo dia que ele o ajudava a concertar bugs e defeitos que ele encontrava no caminho, abrindo muitas portas, e o possibilitando ir mais longe, em sua mente só passava a seguinte mensagem, todo esse conhecimento, vai ser usado, tudo que estou aprendendo pode ser aplicado de forma real, não apenas em projetos, mas em conceitos para inovar, criar do zero, novas tecnologias e, ou metodologias... Grato por ler até aqui !!! May the force be with you "},

    ]

    const numbers=[
        {id:0, value: "Chapter 1"},
        {id:1, value: "Chapter 2"},
        {id:2, value: "Chapter 3"},
        {id:3, value: "Chapter 4"},
        {id:4, value: "Chapter 5"},
        {id:5, value: "Chapter 6"},
        {id:6, value: "Chapter 7"},
        {id:7, value: "Chapter 8"},
        {id:8, value: "Chapter 9"},
        {id:9, value: "Chapter 10"},
        {id:10, value: "Chapter 11"},
    ]

    const numeros=[
        {id:0, value: "Capítulo 1"},
        {id:1, value: "Capítulo 2"},
        {id:2, value: "Capítulo 3"},
        {id:3, value: "Capítulo 4"},
        {id:4, value: "Capítulo 5"},
        {id:5, value: "Capítulo 6"},
        {id:6, value: "Capítulo 7"},
        {id:7, value: "Capítulo 8"},
        {id:8, value: "Capítulo 9"},
        {id:9, value: "Capítulo 10"},
        {id:10, value: "Capítulo 11"},
    ]

    const [languageData, setLanguageData]=useState(chapters)
    const [languageNData, setLanguageNData]=useState(numbers)

    const crawl = useRef(null)
    const [chapterData, setChapterData]=useState(languageData[0].value)
    const [numberData, setNumberData]=useState(languageNData[0].value)

    const handleChapter=(index)=>{
        const chapterSelected=languageData[index].value
        setChapterData(chapterSelected)
        const numberSelected=languageNData[index].value
        setNumberData(numberSelected)
        crawl.current.className = "crawl";
        setTimeout(() => {
            crawl.current.className = "crawl animation-crawl";
        }, 1);
    }
    const handleLanguagePortugues=()=>{
        setLanguageData(capitulos) 
        setLanguageNData(numeros)
    }

    const handleLanguageEnglish=()=>{
        setLanguageData(chapters)
        setLanguageNData(numbers)

    }

    return(
        <div className="about-main">
            <div className="chapter-main">
                <div className="chapters">
                    <div className="chapter">
                        <p onClick={()=>handleLanguageEnglish()}>English</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleLanguagePortugues()}>Portugues</p>
                    </div>
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
                    <div className="chapter">
                        <p onClick={()=>handleChapter(4)}>Chapter Five</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(5)}>Chapter Six</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(6)}>Chapter Seven</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(7)}>Chapter Eight</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(8)}>Chapter Nine</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(9)}>Chapter Ten</p>
                    </div>
                    <div className="chapter">
                        <p onClick={()=>handleChapter(10)}>Last Chapter</p>
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