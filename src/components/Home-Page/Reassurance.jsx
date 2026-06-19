import { useTranslation } from 'react-i18next';
import '../../styles/components/Home_page/Reassurance.scss'

function Reassurance() {
    const { t } = useTranslation()
    const items = t('home.reassurance.items', { returnObjects: true })
    return(
        <section className='reassurance-section'>
            <div className="title-reassurance">
                <h2>{t('home.reassurance.title')}</h2>
            </div>
            <div className="reassurance-flex">
                {items.map((item, index) => (
                <div key={index} className="reass-card">
                    <div className="reass-val">{item.val}</div>
                    <div className="reass-label">{item.label}</div>
                </div>
                ))}
            </div>
</section>

    );
}
export default Reassurance;