import { useRef, useState } from "react"
import "./About.css"
export default function About() {

    
    const chapters=[
        {id:0, value: "Hello world"},
        {id:1, value: "Hello world"},
        {id:2, value: "Hello world"},
        {id:3, value: "Hello world"},
        {id:4, value: "Hello world"},
        {id:5, value: "Hello world"},
        {id:6, value: "Hello world"},
        {id:7, value: "Hello world"},
        {id:8, value: "Hello world"},
        {id:9, value: "Hello world"},
        {id:10, value: "Hello world"},
    ]


    const capitulos=[
        {id:0, value: "Nossa história fala de um pequeno planeta azul, localizado no sistema solar, que por sua vez fica em um dos braços expirais externos da galaxia denominada via lactea, no quadrante da borda do superaglomerado Laniakea que possui 500 milhoes de anos luz de diametro, sendo está uma de 100 mil galaxias existentes nesse aglomerado, por que falamos disso? porque em especial, nesse planeta azul, com condições excelentes para abrigar vida, existe um mundo movido a novidades..."},
        {id:1, value: "Em meados de 1996 um garoto chamado Jonathan nasceu, com uma chama de impeto e vontade de aprender, em uma pequena cidade chamada Jaragua do Sul, viveu sua infancia se divertindo muito, aos 8 anos, seu pai havia comprado um computador, onde começou a pesquisar e ouvir músicas e pela internet, que por sinal, em sua época era muito fraca, mas era uma inovação que transformou o mundo, então instalou seu primeiro MMORPG e se aventurou pelas terras de Prontera no jogo chamado Ragnarok Online, aos 11 ja havia jogado diversos jogos, e tinha um senso de escrita e um inglês bâsico, ele estava totalmente imerso no mundo da computação, aprendendo e vivendo diversas experiencias com pessoas de lugares diferentes pela internet..."},
        {id:2, value: "Quando tinha treze anos, seus professores o colocavam para redigir textos no computador por que percebiam sua facilidade e velocidade para escrever, ele gostava muito do que fazia, tendo criado aptidão para muitas coisas como lógica básica, começou a fazer cursos de inglês para avançar nessa lingua estranha, e para sua surpresa diversas portas e fontes de lugares diferentes se tornaram possiveis aprimorando seu conhecimento, foi quando, ele virou adolescente..."},
        {id:3, value: "Jonathan agora, adolescente, outrora um garoto muito imerso no mundo da computação, começou a sair com seus amigos, andar de skate, jogar bola e conhecer garotas, foi quando conheceu a garota que o transformaria em quem ele é hoje por sinal, viveu com afeto, estudou em lugares diferentes, até que entrou para a instuição de ensino IFSC no técnico em Química, lá ele fez diversos amigos, aprendeu muitas coisas diferentes, percebendo como o mundo era um lugar muito grande, também notou como o que ele sabia era uma mera gota em um oceano de conhecimentos e pessoas incriveis..."},
        {id:4, value: "Estudando então no IFSC, ele aprendeu diversas coisas interessantes, escreveu muitas outras também, desenvolvendo com um grupo de amigos, seu primeiro projeto cientifico, onde ele indicou as habilidades suas e de seus amigos versados em conhecimentos de computação como objeto de estudo, saindo então seu primeiro projeto academico, 'Jogos eletronicos e a aprendizagem', neste projeto estudaram as habilidades e conhecimentos que uma pessoa pode desenvolver a partir de jogos de mesa e a possibilidade de eles serem utilizados como ferramenta nas salas de aula..."},
        {id:5, value: "Seu segundo projeto, também foi uma de suas idéias, que obviamente, foi vista como possitiva e atrativa pelos colegas de seu grupo, 'Tem muita umidade e fundo nessa cidade' ele disse, então passaram a pesquisar o crescimento microbiano de fungos, utilizando dois aditivos, para retardar seu desenvolvimento, entre esses dois produtos, estava a terebintina, composto utilizado na industria do papel por conter propriedades antimicrobianas, enquanto o outro produto era chamado de nanoparticula de prata, produzido em laboratório com o auxilio de um dos professores, ela é responsavel por danificar as celulas das hifas, impedindo assim o seu crescimento..."},
        {id:6, value: "Enquanto seu terceiro projeto, se tratava de pesquisar a argila medicinal, como também as formas que ela agia na pele, foi feito um mapeamento bibliografico, se entendendo que ela possui diversos minerais que atuam como pequenos funis, com suas geometrias, fazendo com que a sujeira da pele, quando se encontre com ela, seja agarrada por suas estruturas, além também de diversos outros beneficios a saúde da mesma... "},
        {id:7, value: "Infelizmente, antes de se formar, Jonathan havia deixado seu técnico de lado por problemas pessoas, passou pelo enem e finalizou o ensino médio, começando então a se dedicar a entender fungos, algo que o havia deixado com muita empolgação, entendeu suas propriedades, como suas capacidades, e preveu que em um futuro não muito distante, seria possivel, a partir de fungos e bacterias decompor basicamente quase tudo, utilizando de engenharia genética, eles poderiam utilizar do fungo como produtor de medicamentos e produtos especificos que eram escassos..."},
        {id:8, value: "Apartir dessa fase, ele se dedicou a descobrir formas de tornar os fungos viaveis em culturas de decomposição de residuos organicos para geração de energia eletrica com gás natural, se deparando com diversos obstaculos para ter algum sucesso, isso o desviou os olhares, mas não o desmotivou, foi quando ele começou a estudar sobre a energia gerada apartir de fungos com uma tecnologia chamada PEM, e a teflon uma membrana que possibilitaria a passagem prôtonica, isso abre a possibilidade de gerar baterias de PEM para culturas de decomposição ôrganica, foi nesse mesmo periodo que ele começou uma faculdade de biomedicina, mas apôs dois anos de estudos a trancou para se dedicar a algo além..."},
        {id:9, value: "Finalmente chegando nos tempos atuais, Jonathan com apoio de seu chará, discutia sobre a formalização dessa tecnologia e o que ele precisaria para poder a desenvolver em uma escala que ajudasse ao meio ambiente, e seu amigo o dizia 'A programação pode fazer tudo e muito mais', apôs muito ele insistir, tanto como o irmão de Jonathan, ele se empenhou em aprender o que se tratava essa tal programação, já havia a experienciado com jogos onde ele mudava o ambiente e desenvolvia novas utilidades, mas nunca teria colocado um conhecimento pratico a respeito dessas ferramentas, é então que se inicia essa maravilhosa e mágica aventura..."},
        {id:10, value: "Iniciando no mundo da programação, ele se encontrou totalmente, percebeu que não se tratava apénas de uma area de atuação, mas de todo um aglomerado de informações que se uniam e compartilhavam conhecimento para melhorar a vida de todos no planeta, toda essa visão fez seus olhos brilharem e seu coração se encher com as possibilidades que ele via desde quando era criança, melhorar a vida das pessoas de forma real, o mundo estava sendo transformado e ele teria real participação nisso, ele se jogou de cabeça, passando mais de 6 horas por dia dentro de seu quarto estudando as mais diversas ferramentas e tecnologias, passou a conhecer os conceitos e linguagens qua não havia presenciado, criou ferramentas, fez cursos, pediu concelhos de seu irmão, muitos concelhos, seu irmão Ederson deve ter ficado cansado, por que eram mais de 10 vezes em um mesmo dia que ele o ajudava a concertar bugs e defeitos que ele encontrava no caminho, abrindo muitas portas, e o possibilitando ir mais longe, em sua mente só passava a seguinte mensagem, todo esse conhecimento, vai ser usado, tudo que estou aprendendo pode ser aplicado de forma real, não apenas em projetos, mas em conceitos para inovar, criar do zero, novas tecnologias e, ou metodologias... Grato por ler até aqui !!!          May the force be with you "},

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
                        <p onClick={()=>handleChapter(6)}>Chapter Seventh</p>
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