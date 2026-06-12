import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import '../styles/components/Header.scss'

function Header() {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Link to="/" className='logo-section'>
                <p className="prenom">Antoine</p> 
                <p className="nom">GADRAT</p>
            </Link>
            {isHome ? (
                <nav className="header-nav-bar">
                    <div className='menuBurger'>
                        <HiMenu size={30}/>
                    </div>
                    <ul>
                        <li className="nav-header-text">
                            <a href="#offres">Offres</a>
                        </li>
                        <li className="nav-header-text">
                            <a href="#projets">Projets</a>
                        </li>
                        <li className="nav-header-text">
                            <a href="#compétences">Compétences</a>
                        </li>
                        <li className="nav-header-text"> 
                            <a href="#Contact-Home-Section">Contact</a>
                        </li>
                    </ul>
                </nav>
            ) : (
                <Link to="/" className="nav-back">
                    ← Retour à l'accueil
                </Link>
            )}
            <Link to="/contact" className='contactBtn'>Me contacter</Link>
        </header>
    )

}

export default Header;