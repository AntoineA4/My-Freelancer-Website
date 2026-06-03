import '../../styles/components/Contact_page/ContactSteps.scss'

function Steps({ steps = [], title, titleTag = 'div', icon }) {
    const TitleTag = titleTag;

    return (
        <div className="infos-inner">
            <div className="infos-head">
                {icon && <span className="ih-icon">{icon}</span>}
                <TitleTag>{title}</TitleTag>
            </div>
            <div className="infos-body">
                {steps.map((step, index) => (
                <div key={index} className="steps">
                    <div className="step-num">{index + 1}</div>
                    <div className="step-text">
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};
export default Steps;