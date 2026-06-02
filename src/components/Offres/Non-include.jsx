function NonInclude ({items = []}) {

    return (
        <section className="offre-infos-box">
            <div className="infos-offre-head">
                <span className="ih-icon">✗</span>
                <div className="infos-title">Non inclus</div>
            </div>
            <div className="infos-body">
                <ul className="offre-items">
                {items.map((item, index) =>(
                    <li key = {index}>
                        <span className="ico">✗</span>
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

export default NonInclude;