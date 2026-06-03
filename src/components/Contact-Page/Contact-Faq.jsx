import '../../styles/components/Contact_page/ContactFaq.scss'

function Faq({ steps = [], title, titleTag = 'div', icon }) {
    const TitleTag = titleTag;

    return (
        <div className="infos-inner">
            <div className="infos-head">
                {icon && <span className="ih-icon">{icon}</span>}
                <TitleTag>{title}</TitleTag>
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