import '../../styles/components/Offre-Pages/PriceBand.scss'

function PriceBand ({

    MainPrice,
    SecondPrice,
    Note,
    TVABadge,
    SecondBadge, 
    PbClass = "pb-bordeaux"
}){
    return (
        <section className={`price-band ${PbClass}`}>
            <div>
                <div className="price-main"> 
                   <div className="price-amount">{MainPrice}</div>
                    <div className="price-range">{SecondPrice}</div>
                </div>
                <div className="price-note">{Note}</div>
                <div className="price-badges">
                    <div className="pbadge">{TVABadge}</div>
                    <div className="pbadge">{SecondBadge}</div>
                </div>
            </div>
        </section>
    );
};

export default PriceBand;