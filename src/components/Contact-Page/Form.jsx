import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import '../../styles/components/Contact_page/contactForm.scss'

const sanitize = (str) =>
  str.trim().slice(0, 2000).replace(/<[^>]*>/g, '')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const formuleMapping = {
    'site-une-page': 'site-une-page',
    'site-vitrine': 'site-vitrine',
    'essentiel': 'pack-essentiel',
    'serenite': 'pack-serenite',
    'premium': 'pack-premium',
    'hebergement': 'pack-serenite', 
}

function ContactForm() {
    const { t } = useTranslation()

    const [searchParams] = useSearchParams()
    const formuleFromUrl = searchParams.get('formule')
    const initialProjet = formuleMapping[formuleFromUrl] || ''

    const [formData, setFormData] = useState({
        prenom: '', nom: '', email: '', activite: '',
        projet: initialProjet, // ← pré-rempli depuis l'URL
        budget: '', description: '', references: '',
    })
    const [errors,   setErrors]   = useState({})
    const [status,   setStatus]   = useState('idle')
    const [honeypot, setHoneypot] = useState('')
    const [lastSent, setLastSent] = useState(null)

    

    // Récupère les options depuis le JSON
    const projetOptions = t('contact.form.projet.options', { returnObjects: true })
    const budgetOptions = t('contact.form.budget.options', { returnObjects: true })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    const handleBudget = (option) => {
        setFormData((prev) => ({ ...prev, budget: option }))
    }

    const validate = () => {
        const newErrors = {}
        const err = t('contact.form.errors', { returnObjects: true })
        if (!formData.prenom.trim())          newErrors.prenom      = err.required
        if (!formData.nom.trim())             newErrors.nom         = err.required
        if (!formData.email.trim())           newErrors.email       = err.required
        if (!emailRegex.test(formData.email)) newErrors.email       = err.email
        if (!formData.projet)                 newErrors.projet      = err.required
        if (!formData.description.trim())     newErrors.description = err.description
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const isFormValid = () => (
        formData.prenom.trim() !== '' &&
        formData.nom.trim() !== '' &&
        emailRegex.test(formData.email) &&
        formData.projet !== '' &&
        formData.description.trim() !== ''
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (honeypot) return
        if (lastSent && Date.now() - lastSent < 60000) {
        setErrors({ global: t('contact.form.errors.cooldown') })
        return
        }
        if (!validate()) return
        setStatus('loading')
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
            setFormData({
            prenom: '', nom: '', email: '', activite: '',
            projet: '', budget: '', description: '', references: '',
        })
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return (
        <div className="form-section">
            <div className="form-title">
                <h2>{t('contact.form.title')}</h2>
            </div>

            {initialProjet && (
                <div className="form-prefill-banner">
                    {t('contact.form.pickMessage')}
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

                <input
                    type="text" name="website" value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }} tabIndex="-1" autoComplete="off"
                />

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label" htmlFor="prenom">
                        {t('contact.form.prenom.label')} <span className="required">*</span>
                        </label>
                        <input
                        type="text" id="prenom" name="prenom"
                        value={formData.prenom} onChange={handleChange}
                        className={`form-input ${errors.prenom ? 'input-error' : ''}`}
                        placeholder={t('contact.form.prenom.placeholder')}
                        maxLength={50}
                        />
                        {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="nom">
                            {t('contact.form.nom.label')} <span className="required">*</span>
                        </label>
                        <input
                            type="text" id="nom" name="nom"
                            value={formData.nom} onChange={handleChange}
                            className={`form-input ${errors.nom ? 'input-error' : ''}`}
                            placeholder={t('contact.form.nom.placeholder')}
                            maxLength={50}
                        />
                        {errors.nom && <span className="error-msg">{errors.nom}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        {t('contact.form.email.label')} <span className="required">*</span>
                    </label>
                    <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder={t('contact.form.email.placeholder')}
                        maxLength={100}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="activite">
                        {t('contact.form.activite.label')}
                    </label>
                    <input
                        type="text" id="activite" name="activite"
                        value={formData.activite} onChange={handleChange}
                        className="form-input"
                        placeholder={t('contact.form.activite.placeholder')}
                        maxLength={100}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="projet">
                        {t('contact.form.projet.label')} <span className="required">*</span>
                    </label>
                    <select
                        id="projet" name="projet"
                        value={formData.projet} onChange={handleChange}
                        className={`form-input ${errors.projet ? 'input-error' : ''}`}
                    >
                        {Array.isArray(projetOptions) && projetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                            {opt.label}
                        </option>
                        ))}
                    </select>
                    {errors.projet && <span className="error-msg">{errors.projet}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">{t('contact.form.budget.label')}</label>
                    <div className="budget-grid">
                        {Array.isArray(budgetOptions) && budgetOptions.map((option) => (
                        <div
                            key={option}
                            className={`budget-option ${formData.budget === option ? 'selected' : ''}`}
                            onClick={() => handleBudget(option)}
                            role="button" tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleBudget(option)}
                        >
                            {option}
                        </div>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="description">
                        {t('contact.form.description.label')} <span className="required">*</span>
                    </label>
                    <textarea
                        id="description" name="description"
                        value={formData.description} onChange={handleChange}
                        className={`form-input ${errors.description ? 'input-error' : ''}`}
                        placeholder={t('contact.form.description.placeholder')}
                        maxLength={2000}
                    />
                    {errors.description && <span className="error-msg">{errors.description}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="references">
                        {t('contact.form.references.label')}
                    </label>
                    <input
                        type="text" id="references" name="references"
                        value={formData.references} onChange={handleChange}
                        className="form-input"
                        placeholder={t('contact.form.references.placeholder')}
                        maxLength={300}
                    />
                </div>

                {errors.global && <p className="error-global">{errors.global}</p>}

                {status === 'success' && (
                <p className="success-msg">{t('contact.form.success')}</p>
                )}

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isFormValid() || status === 'loading' || status === 'success'}
                >
                {status === 'loading' ? t('contact.form.sending') :
                status === 'success' ? t('contact.form.successBtn') : (
                    <>
                    <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="white" width="16" height="16">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    {t('contact.form.submit')}
                    </>
                )}
                </button>
                <p className="form-note">{t('contact.form.note')}</p>
            </form>
        </div>
    )
}

export default ContactForm