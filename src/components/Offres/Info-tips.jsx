import { useTranslation } from 'react-i18next';
import '../../styles/components/Offre-Pages/InfoTips.scss'

function InfoTips () {

    const {t} = useTranslation()

    return (
        <div className="tips">
            <span className="tips-icon">💡</span>
            <div className="tips-text"><strong>{t('offres.onePage.tips.strong')}</strong> 
                {t('offres.onePage.tips.text')}
            </div>
        </div>
    );
};

export default InfoTips;