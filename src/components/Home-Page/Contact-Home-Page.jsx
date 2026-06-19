import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6' 
import { SiFiverr, SiMalt } from 'react-icons/si'    
import '../../styles/components/Home_page/Contact-Home.scss'

function ContactHomePage () {

    const {t} = useTranslation()

    return(
        <section className="Contact-Home-Section" id="Contact-Home-Section"> 
            <div className="Contact-Home-Title"> {t('home.contactHome.title')} <em>{t('home.contactHome.em')}</em></div>
            <p className="Contact-Home-subTitle">{t('home.contactHome.subtitle')}</p>
            <div className="Contact-Home-btn-flex">
                <a href="mailto:contact@tonnom.fr" className="Contact-Home-btn">
                    <FaEnvelope size={20} className='fa'/>
                    contact@tonnom.fr
                </a>
                <a href="https://linkedin.com/in/tonnom" target="_blank" rel="noopener" className="Contact-Home-btn">
                   <FaLinkedin size={20} className='fa'/>
                    LinkedIn
                </a>
                <a href="https://www.malt.fr/profile/tonnom" target="_blank" rel="noopener" className="Contact-Home-btn">
                    <SiMalt size={55} className='si' />
                     ↗
                </a>
                <a href="https://www.malt.fr/profile/tonnom" target="_blank" rel="noopener" className="Contact-Home-btn">
                    <SiFiverr size={55} className='si' />
                     ↗
                </a>
            </div>
        </section>
    );
};

export default ContactHomePage;