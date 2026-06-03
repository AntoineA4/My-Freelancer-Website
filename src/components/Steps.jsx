import '../styles/components/Steps&Faq.scss'

function Steps({ steps = [], title, titleTag = 'div', icon, classBox = 'offre-page-box' }) {
    const TitleTag = titleTag;

    return (
        <div className={`infos-inner ${classBox}`}>
            <div className="infos-head">
                {icon && <span className="ih-icon">{icon}</span>}
                <TitleTag className="infos-title">{title}</TitleTag>
            </div>
            <div className="infos-body">
                {steps.map((step, index) => (
                <div key={index} className="steps">
                    <div className="step-num">{index + 1}</div>
                    <div className="step-text">
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                    <div className="step-calendar">{step.calendar}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};
export default Steps;