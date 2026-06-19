import { useTranslation } from 'react-i18next';
import '../../styles/components/Offre-Pages/Extras.scss'

function Extras ({items = [], extrasClass=''}) {

    const {t} = useTranslation()

    return (
        <section className={`offre-infos-box ${extrasClass}`}>
            <div className="infos-block-head">
                <span className="ih-icon">+</span>
                <div className="infos-title">{t('offres.onePage.extras.title')}</div>
            </div>
            <div className="infos-body extras-flex">
                        {items.map((item, index) =>(
                            <div key = {index} className="extra">
                                <span className="extra-name">{item.main}</span>
                                <span className="extra-price">{item.text}</span>  
                            </div>
                ))}  
            </div>
        </section>
    );

};

export default Extras;