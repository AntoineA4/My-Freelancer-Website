import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../../styles/components/Contact_page/contactForm.scss'

// ──── Utilitaire ──── \\
const budgetOptions = [
    'Moins de 500€',
    '500€ – 900€',
    '900€ – 1 200€',
    'Je ne sais pas',
];
const projetOptions = [
    { value: '', label: 'Choisissez une option', disabled: true },
    { value: 'site-une-page', label: 'Site une page (300€ – 500€)' },
    { value: 'site-vitrine', label: 'Site vitrine 3–5 pages (800€ – 1 200€)' },
    { value: 'pack-serenite', label: 'Pack hébergement + maintenance (60€/mois)' },
    { value: 'autre', label: 'Autre / Je ne sais pas encore' },
];

const sanitize = (str) => 
    str.trim().slice(0, 2000).replace(/<[^>]*>/g, '');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const initialForm = {
    prenom:      '',
    nom:         '',
    email:       '',
    activite:    '',
    projet:      '',
    budget:      '',
    description: '',
    references:  '',
};

function ContactForm() {
    const [formData, setFormData] = useState(initialForm)
    const [errors,   setErrors]   = useState({})
    const [status,   setStatus]   = useState('idle') // idle | loading | success | error
    const [honeypot, setHoneypot] = useState('')
    const [lastSent, setLastSent] = useState(null)

  // ──── Handlers ──── \\
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Efface l'erreur du champ quand l'utilisateur corrige
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const handleBudget = (option) => {
        setFormData((prev) => ({ ...prev, budget: option }))
    }

    // ──── Validation ──── \\
    const validate = () => {
        const newErrors = {}
        if (!formData.prenom.trim())      newErrors.prenom      = 'Requis'
        if (!formData.nom.trim())         newErrors.nom         = 'Requis'
        if (!formData.email.trim())       newErrors.email       = 'Requis'
        if (!emailRegex.test(formData.email)) newErrors.email   = 'Email invalide'
        if (!formData.projet)             newErrors.projet      = 'Requis'
        if (!formData.description.trim()) newErrors.description = 'Décrivez votre projet'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
        // ──── Validation ──── \\
    const isFormValid = () => {
        return (
            formData.prenom.trim() !== '' &&
            formData.nom.trim() !== '' &&
            emailRegex.test(formData.email) &&
            formData.projet !== '' &&
            formData.description.trim() !== ''
        )
    }

    // ──── Submit ──── \\
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Anti-bot honeypot
        if (honeypot) return

        // Cooldown 60 secondes
        if (lastSent && Date.now() - lastSent < 60000) {
        setErrors({ global: 'Veuillez attendre avant de renvoyer un message.' })
        return
        }

        if (!validate()) return

        setStatus('loading')

        // Nettoyage des données
        const cleanData = {
            prenom:      sanitize(formData.prenom),
            nom:         sanitize(formData.nom),
            email:       sanitize(formData.email),
            activite:    sanitize(formData.activite),
            projet:      sanitize(formData.projet),
            budget:      sanitize(formData.budget),
            description: sanitize(formData.description),
            references:  sanitize(formData.references),
        }

        try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            cleanData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        setStatus('success')
        setLastSent(Date.now())
        setFormData(initialForm)
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    console.log('Message envoyé:', cleanData)
    }
    

    // ──── Rendu ──── \\
    return (
        <div className="form-section">
            <div className="form-title">
                <h2>Votre demande</h2>
            </div>

        <form onSubmit={handleSubmit} noValidate>

            {/* Honeypot — invisible pour les humains */}
            <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
            />

            {/* Prénom + Nom */}
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label" htmlFor="prenom">
                    Prénom <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`form-input ${errors.prenom ? 'input-error' : ''}`}
                        placeholder="Jean"
                        maxLength={50}
                    />
                    {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="nom">
                    Nom <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`form-input ${errors.nom ? 'input-error' : ''}`}
                        placeholder="Dupont"
                        maxLength={50}
                    />
                    {errors.nom && <span className="error-msg">{errors.nom}</span>}
                </div>
            </div>

            {/* Email */}
            <div className="form-group">
                <label className="form-label" htmlFor="email">
                    Email <span className="required">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="jean@exemple.fr"
                    maxLength={100}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            {/* Activité */}
            <div className="form-group">
                <label className="form-label" htmlFor="activite">
                    Votre activité
                </label>
                <input
                    type="text"
                    id="activite"
                    name="activite"
                    value={formData.activite}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex : Restaurant, Coach, Photographe..."
                    maxLength={100}
                />
            </div>

            {/* Type de projet */}
            <div className="form-group">
                <label className="form-label" htmlFor="projet">
                    Type de projet <span className="required">*</span>
                </label>
                <select
                    id="projet"
                    name="projet"
                    value={formData.projet}
                    onChange={handleChange}
                    className={`form-input ${errors.projet ? 'input-error' : ''}`}
                >
                    {projetOptions.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                    >
                        {opt.label}
                    </option>
                    ))}
                </select>
                {errors.projet && <span className="error-msg">{errors.projet}</span>}
            </div>

            {/* Budget */}
            <div className="form-group">
                <label className="form-label">Budget envisagé</label>
                <div className="budget-grid">
                    {budgetOptions.map((option) => (
                    <div
                        key={option}
                        className={`budget-option ${formData.budget === option ? 'selected' : ''}`}
                        onClick={() => handleBudget(option)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleBudget(option)}
                    >
                        {option}
                    </div>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="form-group">
                <label className="form-label" htmlFor="description">
                    Décrivez votre projet <span className="required">*</span>
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`form-input ${errors.description ? 'input-error' : ''}`}
                    placeholder="Parlez-moi de votre activité, de ce que vous souhaitez accomplir avec votre site..."
                    maxLength={2000}
                />
                {errors.description && <span className="error-msg">{errors.description}</span>}
            </div>

            {/* Références */}
            <div className="form-group">
                <label className="form-label" htmlFor="references">
                    Références de sites que vous aimez
                </label>
                <input
                    type="text"
                    id="references"
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://exemple.com, https://autre.com..."
                    maxLength={300}
                />
            </div>

            {/* Erreur globale */}
            {errors.global && (
                <p className="error-global">{errors.global}</p>
            )}

            {/* Message succès */}
            {status === 'success' && (
                <p className="success-msg">
                    ✓ Message envoyé ! Je vous réponds sous 24h.
                </p>
            )}

            {/* Bouton submit */}
            <button
                type="submit"
                className="submit-btn"
                disabled={!isFormValid() || status === 'loading' || status === 'success'}
                >
            {status === 'loading' ? (
                'Envoi en cours...'
            ) : status === 'success' ? (
                '✓ Message envoyé !'
            ) : (
                <>
                <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="white" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Envoyer ma demande
                </>
            )}
            </button>

            <p className="form-note">Devis gratuit · Réponse sous 24h · Sans engagement</p>

        </form>
    </div>
    )
}

export default ContactForm