import { Link } from 'react-router-dom'
import '../../styles/components/Contact_page/LocalisationBar.scss'

function LocalisationBar () {
    return (
        <div className="localisationBar">
        <div className="localisationBar-inner">
            <Link to="/">Accueil</Link>
            <span className="bc-sep">›</span>
            <span className='localBar-text'>Contact</span>
        </div>
    </div>
    );
};

export default LocalisationBar; 