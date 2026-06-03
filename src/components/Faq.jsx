import '../styles/components/Steps&Faq.scss'

function Faq({ steps = [], title, titleTag = 'div', icon, classBox = 'offre-page-box' }) {
    const TitleTag = titleTag;

    return (
        <div className={`infos-inner ${classBox}`}>
            <div className="infos-head">
                {icon && <span className="ih-icon">{icon}</span>}
                <TitleTag className="infos-title">{title}</TitleTag>
            </div>
            <div className="infos-body">
                {steps.map((step, index) => (
                <div key={index} className="faq">
                    <div className="faq-question">{step.title}</div>
                    <div className="faq-answer">{step.desc}</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;