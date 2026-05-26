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
            <div className='logo-section'>
                <p className="prenom">Antoine</p> 
                <p className="nom">GADRAT</p>
            </div>
            <nav className="header-nav-bar">
                <ul>
                    <li className="nav-header-text">
                        <a href="*">Offres</a>
                    </li>
                    <li className="nav-header-text">
                        <a href="*">Projets</a>
                    </li>
                    <li className="nav-header-text">
                        <a href="*">Compétences</a>
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