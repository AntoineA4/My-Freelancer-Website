import { FaLinkedin, FaGithub } from 'react-icons/fa6' 
import '../styles/components/Footer.scss'

function Footer() {
    return(
        <footer>
            <div className="footer-copy">
                <span className="footer-dot"></span>
                Disponible — Devis gratuit sous 24h · TVA non applicable, art. 293B CGI
            </div>
            <div className="footer-socials">
                <div className='footer-text' >
                    <p>Antoine Gadrat</p>
                    <p className='pFooterSecond'>Freelance Web</p>
                </div>
                <a href="https://github.com/tonnom" target="_blank" rel="noopener" aria-label="GitHub">
                    <FaGithub size={30}/>
                </a>
                <a href="https://linkedin.com/in/tonnom" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <FaLinkedin size={30}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;