import '../styles/components/Header.scss'

function Header() {
    return (
        <header>
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