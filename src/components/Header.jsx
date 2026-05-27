import { useEffect, useState } from 'react'
import '../styles/components/Header.scss'

function Header() {
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
            <a href='#home-hero' className='logo-section'>
                <p className="prenom">Antoine</p> 
                <p className="nom">GADRAT</p>
            </a>
            <nav className="header-nav-bar">
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
                        <a href="*">Contact</a>
                    </li>
                </ul>
            </nav>
            <button>Me contacter</button>
        </header>
    )

}

export default Header;