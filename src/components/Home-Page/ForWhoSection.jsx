import { useTranslation } from 'react-i18next'
import '../../styles/components/Home_page/ForWho.scss'

function ForWho() {
    const { t } = useTranslation()

    const icons = {
        tool: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
        send: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M3 11l19-9-9 19-2-8-8-2z"/>
            </svg>
        ),
        briefcase: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
        ),
        camera: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
            </svg>
        ),
        video: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
        ),
        home: (
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
        ),
    }
    const items = t('home.forWho.items', { returnObjects: true })

    return (
        <section>
            <div className="title-forWho">
                <h2>{t('home.forWho.title')}</h2>
            </div>
            <div className="forWho-flex">
                {items.map((item, index) => (
                <div key={index} className="pq-card">
                    <div className="pq-icon">
                    {icons[item.icon]} {/* ← récupère le bon SVG */}
                    </div>
                    <div>
                    <div className="pq-name">{item.name}</div>
                    <div className="pq-desc">{item.desc}</div>
                    </div>
                </div>
                ))}
            </div>
        </section>      
    )
}

export default ForWho; 