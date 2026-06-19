import { useTranslation } from 'react-i18next';
import '../../styles/components/Home_page/WhyMe.scss'

function WhyMe() {
    const {t} = useTranslation()
    const items = t('home.whyMe.items', { returnObjects: true })
    const icons = {
        clock: (<svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
        dialogue: (<svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
        padlock: (<svg width="22" height="22" viewBox="0 0 24 24" stroke="#D85A30" fill="none" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)
    }
    return(
        <section className="WhyMe-section">
            <div className="Main-title-WhyMe">
                <h2>{t('home.whyMe.title')}</h2>
            </div>
            <div className="whyMe-flex">
                {items.map((item, index)=>(
                    <div className="whyMe-card" key={index}>
                        <div className='whyMe-icon'>
                            {icons[item.icon]}
                        </div>
                        <div className="whyMe-title">{item.name}</div>
                        <div className="whyMe-desc">{item.desc}</div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default WhyMe; 