import { useTranslation } from "react-i18next";

function Modalites ({items = []}) {

    const {t}= useTranslation()

    return(
        <div className="offre-infos-box modalites-box">
            <div className="infos-block-head">
                <span className="ih-icon">ℹ</span>
                <div className="infos-title">{t('offres.onePage.modalites.title')}</div>
            </div>
            <div className="infos-body">
                <ul className="offre-items">
                {items.map((item, index) =>(
                    <li key = {index}>
                        <div>
                            <strong>{item.main}</strong>
                            {item.text && <span> — {item.text}</span>}
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );

};

export default Modalites; 