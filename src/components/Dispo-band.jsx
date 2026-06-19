
import { useTranslation } from 'react-i18next';
import '../styles/components/DispoBand.scss'

function DispoBand () {
    
    const {t} =useTranslation()

    return (
        <div className='dispo-band'>
            <div className="dispo-inner">
                <span className="dispo-dot"></span>
                <span className="dispo-text">{t('dispo-band.text')}</span>
                <span className="dispo-badge">{t('dispo-band.tag')}</span>
            </div>
        </div>
    )
}

export default DispoBand; 