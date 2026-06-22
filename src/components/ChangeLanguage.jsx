import { useTranslation } from 'react-i18next'
import '../styles/components/languageSwitch.scss'

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div className="lang-switcher">
        <button
            className={i18n.language === 'fr' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('fr')}
        >
            Français
        </button>
        <button
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('en')}
        >
            English
        </button>
        </div>
    )
}

export default LanguageSwitcher;