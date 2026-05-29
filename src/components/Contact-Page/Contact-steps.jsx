import '../../styles/components/Contact_page/ContactSteps.scss'

function ContactSteps() {
  return (
    <div className="infos-inner">
        <div className="infos-head">
            <h3>Comment ça se passe</h3>
        </div>
        <div className="infos-body">
            <div className="steps">
                <div className="step-num">1</div>
                <div className='step-text'>
                    <div className="step-title">Vous envoyez votre demande</div>
                    <div className="step-desc">Via ce formulaire ou par email directement</div>
                </div>
            </div>
            <div className="steps">
                <div className="step-num">2</div>
                <div className='step-text'>
                    <div className="step-title">Je vous réponds sous 24h</div>
                    <div className="step-desc">Avec un devis détaillé et gratuit</div>
                </div>
            </div>
            <div className="steps">
                <div className="step-num">3</div>
                <div className='step-text'>
                    <div className="step-title">On affine ensemble</div>
                    <div className="step-desc">Échange rapide pour caler les détails du projet</div>
                </div>
            </div>
            <div className="steps">
                <div className="step-num">4</div>
                <div className='step-text'>
                    <div className="step-title">On démarre !</div>
                    <div className="step-desc">Acompte de 50% et la création commence</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSteps;