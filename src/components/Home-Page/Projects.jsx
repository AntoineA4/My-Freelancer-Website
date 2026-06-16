import { useState } from 'react'
import projects from '../../Data/projets.json'
import Modals from '../Modals';
import '../../styles/components/Home_page/Projects.scss'

function Projects () {

    const [selectedProject, setSelectedProject] = useState(null)
    const displayedProjects = projects.filter(p => p.featured)

    return (
        <section className="projects-section" id='projets'>
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="Projects-title">Projets récents</h2>
                    <a href="#" className="section-link">Tous les projets →</a>
                </div>
                <div className="projects-flex">
                    {displayedProjects.map((project)=>(
                        <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                            <div className="project-thumb">
                                <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                            </div>
                            <div className="project-info">
                                <div className="project-name">{project.title}</div>
                                <div className="project-tags">
                                    {project.tags.map((tag, index)=>(
                                        <span key={index} className={`tag ${project.tagColor}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <Modals isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} position="center">
                {selectedProject && (
                    <div className="project-modal">
                        <div className="project-modal-header">
                            <h2>{selectedProject.title}</h2>
                            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>✕</button>
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
                                <h3>Description</h3>
                                <p>{selectedProject.description.fr}</p>
                            </div>

                            <div className="project-modal-section">
                                <h3>Difficultés</h3>
                                <p>{selectedProject.difficulties.fr}</p>
                            </div>
                            <a href={selectedProject.link}
                                target="_blank" // ouvre sur un nouvel onglet
                                rel="noopener noreferrer" // sécurité 
                                className="project-modal-link"
                                >Voir sur GitHub →
                                </a>
                        </div>
                    </div>
                    )}
            </Modals>
        </section>
    );
};

export default Projects; 