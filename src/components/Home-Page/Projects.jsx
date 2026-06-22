import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import projects from '../../Data/projets.json'
import ProjectModal from '../ProjectModal';
import '../../styles/components/Home_page/Projects.scss'

function Projects () {
    const {t} = useTranslation()
    const [selectedProject, setSelectedProject] = useState(null)
    const displayedProjects = projects.filter(p => p.featured)

    return (
        <section className="projects-section" id='projets'>
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="Projects-title">{t('home.projets.title')}</h2>
                    <Link to='/projects-page' className="section-link">{t('home.projets.link')}</Link>
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
            <ProjectModal
                selectedProject={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects; 