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
            <div className='price-right-part'>
                <div className="price-main"> 
                    <div className="price-range">{SecondPrice}</div>
                    <div className="price-amount">{MainPrice}</div>
                </div>
                <div className="price-note">{Note}</div>
            </div>
             <div className="price-badges">
                    <div className="pbadge">{TVABadge}</div>
                    <div className="pbadge">{SecondBadge}</div>
                </div>
        </section>
    );
};

export default PriceBand;