import { useTranslation } from 'react-i18next'
import Modals from './Modals'

function ProjectModal({ selectedProject, onClose }) {

  const { t, i18n } = useTranslation()
  const lang = i18n.language

    return (
        <Modals
            isOpen={selectedProject !== null}
            onClose={onClose}
            position="center"
        >
            {selectedProject && (
                <div className="project-modal">
                    <div className="project-modal-header">
                        <h2>{selectedProject.title}</h2>
                        <button className="close-modal-btn" onClick={onClose}>✕</button>
                    </div>
                    <div className="project-modal-img">
                        <img
                        src={selectedProject.image}
                        alt={`Aperçu du projet ${selectedProject.title}`}
                        />
                    </div>
                    <div className="project-modal-body">
                        <div className="project-modal-tags">
                            {selectedProject.tags.map((tag, index) => (
                                <span key={index} className={`tag ${selectedProject.tagColor}`}>{tag}</span>
                            ))}
                        </div>
                        <div className="project-modal-section">
                            <h3>{t('projectModal.description')}</h3>
                            <p>{selectedProject.description[lang]}</p>
                        </div>
                        
                        <a href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-modal-link"
                            >
                        {t('projectModal.link')} →
                        </a>
                    </div>
                </div>
            )}
        </Modals>
    )
}

export default ProjectModal