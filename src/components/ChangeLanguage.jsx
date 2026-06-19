import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div className="lang-switcher">
        <button
            className={i18n.language === 'fr' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('fr')}
        >
            FR
        </button>
        <button
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('en')}
        >
            EN
        </button>
        </div>
    )
}

export default LanguageSwitcher;