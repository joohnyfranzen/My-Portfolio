import "./Contact.css"
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp, BsFillCaretLeftFill, BsCircle, BsList } from 'react-icons/bs';


export default function Contact() {
    return(
        <div className="contact-card">
            <div className="contact-me">
                <h2>Lets work together?</h2>
                <p>With high hopes for the future!</p>
                <div className="whats-link">
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5547997334550"><i><BsWhatsapp/></i>Contact-me</a>
                </div>
            </div>
            <div className="card">
                <div className="container-2">
                    <div className="photo-container">
                        <img src="photo.png" alt="Jonathan" />
                    </div>
                </div>
                <h1>Jonathan Franzen Fagundes</h1>
                <div className="content">
                    <p><i><BsLinkedin/></i><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-franzen-fagundes-11247b1a2/">Linkedin</a></p>
                    <p><i><BsInstagram/></i><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jonathan_franzen_fagundes/">Instagram</a></p>
                    <p><i><BsGithub/></i><a rel="noopener noreferrer" target="_blank" href="https://github.com/joohnyfranzen">Github</a></p>
                    <p><i><BsWhatsapp/></i><a rel="noopener noreferrer" target="_blank" href="https://wa.me/5547997334550">WhatsApp</a></p>
                </div>
                <div className="buttons">
                    <div className="button"><BsFillCaretLeftFill className="phone"/></div>
                    <div className="button"><BsCircle className="phone"/></div>
                    <div className="button"><BsList className="phone"/></div>
                </div>
            </div>
        </div>
    )
}