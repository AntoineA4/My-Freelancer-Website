function Modalites ({items = []}) {

    return(
        <div className="offre-infos-box modalites-box">
            <div className="infos-offre-head">
                <span className="ih-icon">ℹ</span>
                <div className="infos-title">Modalités</div>
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