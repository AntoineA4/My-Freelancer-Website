import { useTranslation } from 'react-i18next';
import '../../styles/components/Contact_page/DirectContact.scss'

function DirectContact () {

    const {t}= useTranslation()

    return (
        <div className="infos-inner">
            <div className="infos-head">
                <h3>{t('contact.directContact.title')}</h3>
            </div>
            <div className="infos-body">
                <a href="mailto:contact@tonnom.fr" className="contact-link">
                    <div className="contact-link-icon">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                        <div className="contact-link-label">Email</div>
                        <div className="contact-link-val">antoinegadrat@hotmail.fr</div>
                    </div>
                    <div className="contact-link-arrow">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/antoine-gadrat-9b749a32a/" target="_blank" rel="noopener" className="contact-link">
                    <div className="contact-link-icon">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div>
                        <div className="contact-link-label">LinkedIn</div>
                        <div className="contact-link-val">linkedin.com/in/Antoine-Gadrat</div>
                    </div>
                    <div className="contact-link-arrow">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://www.malt.fr/profile/tonnom" target="_blank" rel="noopener" className="contact-link">
                    <div className="contact-link-icon">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </div>
                    <div>
                        <div className="contact-link-label">Malt</div>
                        <div className="contact-link-val">malt.fr/profile/Antoine-Gadrat</div>
                    </div>
                    <div className="contact-link-arrow">
                        <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DirectContact;