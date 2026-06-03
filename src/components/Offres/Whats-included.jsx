import '../../styles/components/Offre-Pages/WhatsIncluded.scss'

function WhatsIncluded ({items = []}) {
    return(
        <section className="offre-infos-box">
            <div className="infos-block-head">
                <span className="ih-icon">✓</span>
                <div className="infos-title">Ce qui est inclus</div>
            </div>
            <div className="infos-body">
                <ul className="offre-items">
                {items.map((item, index) =>(
                    <li key = {index}>
                        <span className="ico">✓</span>
                        <div>
                            <strong>{item.main}</strong>
                            {item.text && <span> — {item.text}</span>}
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </section>
    );
};

export default WhatsIncluded;