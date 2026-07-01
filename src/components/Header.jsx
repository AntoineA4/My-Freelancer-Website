import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiMenu, HiHome, HiExternalLink, HiChevronRight, HiMail } from "react-icons/hi";
import Modals from './Modals';
import LanguageSwitcher from './ChangeLanguage';
import '../styles/components/Header.scss'
import { useTranslation } from 'react-i18next';

function Header() {

    const {t} = useTranslation()
    const location = useLocation()
    const isHome = location.pathname === '/'
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isActive = (path) => location.pathname === path
    const navigate = useNavigate()
    const handleAnchorClick = (e, anchor) => {
        e.preventDefault()
        navigate('/')
        setTimeout(() => {
            const target = document.querySelector(anchor)
            if (target) target.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }


    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <Link to="/" className='logo-section'>
                    <p className="prenom">Antoine</p> 
                    <p className="nom">GADRAT</p>
                </Link>
                {isHome ? (
                    <nav className="header-nav-bar">
                        <ul>
                            <li className="nav-header-text">
                                <a href="/">{t('header.nav.home')}</a>
                            </li>
                            <li className="nav-header-text">
                                <a href="#offres">{t('header.nav.offres')}</a>
                            </li>
                            <li className="nav-header-text">
                                <Link to='/projects-page'>{t('header.nav.projects')}</Link>
                            </li>
                            <li className="nav-header-text"> 
                                <a href="#Contact-Home-Section">{t('header.nav.contact')}</a>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <nav className="header-nav-bar">
                        <ul>
                        <li className="nav-header-text">
                            <a href="/">{t('header.nav.home')}</a>
                        </li>
                        <li><a href='/#offres' onClick={(e) => handleAnchorClick(e, '#offres')}>{t('header.nav.offres')}</a></li>
                        <li><Link to="/projects-page">{t('header.nav.projects')}</Link></li>
                        <li><a href='/#Contact-Home-Section' onClick={(e) => handleAnchorClick(e, '#Contact-Home-Section')}>Contact</a></li>
                        </ul>
                    </nav>
                )}
                <div className='header-rightpart'>
                    <LanguageSwitcher />
                    <Link to="/contact" className='contactBtn'>{t('header.btn')}</Link>
                    <div className='menuBurger' onClick={()=>setMenuOpen(true)}>
                        <HiMenu size={30}/>
                    </div>
                </div>
            </header>
            <Modals isOpen={menuOpen} onClose={()=>setMenuOpen(false)} position="right">
                <div className='modal-header-top'>
                    <div className='logo-modal'>
                    <p className="prenom">Antoine</p> 
                    <p className="nom">GADRAT</p>
                </div>
                <button className='close-modal-btn' onClick={()=>setMenuOpen(false)}>x</button>
                </div>
                {isHome ? (
                    <div className='drawer-body'>
                        <div className='drawer-section'>
                            <p className='drawer-section-title'>Navigation</p>
                            <ul>
                                <li>
                                    <a href="#offres" className='drawer-link'onClick={()=>setMenuOpen(false)}>
                                        <span>{t('header.modal.offres')}</span>
                                        <HiChevronRight />
                                    </a>
                                </li>
                                <li>
                                    <Link to="/projects-page" className='drawer-link' onClick={()=>setMenuOpen(false)}>
                                        <span>{t('header.modal.projects')}</span>
                                    <HiChevronRight />
                                    </Link>
                                </li>
                                <li>
                                    <a href="#Contact-Home-Section" className='drawer-link' onClick={()=>setMenuOpen(false)}>
                                        <span>Contact</span>
                                        <HiChevronRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='drawer-section'>
                            <p className='drawer-section-title'>Contact</p>
                            <Link to='/contact' className='drawer-link'onClick={()=>setMenuOpen(false)}>
                                <span>{t('header.modal.contact-link')}</span>
                                <HiMail />
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='drawer-body'>
                        <div className='drawer-section'>
                            <p className='drawer-section-title'>Navigation</p>
                            <Link to='/' className='drawer-link'onClick={()=>setMenuOpen(false)}>
                                <span>{t('header.modal.retour-home')}</span>
                                <HiHome />
                            </Link>
                        </div>
                        <div className='drawer-section'>
                            <p className='drawer-section-title'>{t('header.modal.offres')}</p>
                            <ul>
                                <li>
                                    <Link to='/offres/site-une-page' className={`drawer-link ${isActive('/offres/site-une-page') ? 'active' : ''}`} onClick={()=>setMenuOpen(false)}>
                                        <span>{t('header.modal.onePage')}</span>
                                        <HiExternalLink />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/offres/site-vitrine' className={`drawer-link ${isActive('/offres/site-vitrine') ? 'active' : ''}`} onClick={()=>setMenuOpen(false)}>
                                        <span>{t('header.modal.vitrine')}</span>
                                        <HiExternalLink />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/offres/hebergement' className={`drawer-link ${isActive('/offres/hebergement') ? 'active' : ''}`} onClick={()=>setMenuOpen(false)}>
                                        <span>{t('header.modal.host')}</span>
                                        <HiExternalLink />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='drawer-section'>
                            <p className='drawer-section-title'>Contact</p>
                            <Link to='/contact' className='drawer-link'onClick={()=>setMenuOpen(false)}>
                                <span>{t('header.modal.contact-link')}</span>
                                <HiMail />
                            </Link>
                        </div>
                    </div>
                )}
            </Modals>
        </>
        
    )

}

export default Header;