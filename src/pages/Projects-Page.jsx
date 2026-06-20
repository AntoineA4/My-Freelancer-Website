import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import projects from '../Data/projets.json'
import Hero from "../components/Hero"
import LocalisationBar from "../components/LocalisationBar"
import Modals from '../components/Modals'
import '../styles/pages/Projects-page.scss'

function ProjectsPage () {
    const [activeType, setActiveType] = useState('all')
    const [activeTag, setActiveTag] = useState('all')
    const [sortBy, setSortBy] = useState('recent')
    const [selectedProject, setSelectedProject] = useState(null)
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const {t} = useTranslation()

    // Tous les tags uniques depuis le JSON
    const allTags = useMemo(() => {
        const tags = projects.flatMap(p=>p.tags)
        return ( ['all', ...new Set(tags)])
        }, []
    )
     // Tous les types uniques
    const allTypes = useMemo(() => {
        const types = projects.map(p=>p.type)
        return (['all', ...new Set(types)])
        }, []
    )
    // Filtrage + tri 

    const filtered = useMemo(() => {
        let result = [...projects]

        if ( activeType !== 'all') {
            result = result.filter(p=> p.type === activeType)
        }

        if (activeTag !== 'all') {
            result = result.filter(p=> p.tags.includes(activeTag))
        }

        if (sortBy === 'recent') {
            result = result.sort((a, b) => b.year - a.year) 
        } else if (sortBy === 'oldest') {
            result = result.sort((a, b) => a.year - b.year )
        }

        return result
    }, [activeType, activeTag, sortBy])

    return (
        <>
            <LocalisationBar 
                page="projects-page"
            />
            <Hero 
                tag={t('projectPage.hero.tag')}
                title={t('projectPage.hero.title')}
                highlight={t('projectPage.hero.highlight')}
                heroClass="hero-corail"
                subtitle={t('projectPage.hero.subtitle')}
            />
            <section>
                <div className='filters-bar'>
                    <span className="filter-label">Type</span>
                    {allTypes.map(type =>(
                        <button 
                            key={type} 
                            className={`filter-btn ${activeType === type ? 'active' : ''}`} 
                            onClick={() => setActiveType(type)}
                            >{type === 'all' ? t('projectPage.filter.tag.all') : 
                            type === 'vitrine' ? t('projectPage.filter.tag.vitrine') : 
                            type === 'une-page' ? t('projectPage.filter.tag.onePage') : 
                            type === 'SEO' ? 'SEO' : 'BackEnd'}
                        </button>
                    ))}
                    <button onClick={()=>setShowMoreFilters(!showMoreFilters)} className='filter-show-more'>
                        {showMoreFilters ? t('projectPage.filter.show.less') : t('projectPage.filter.show.more')}
                    </button>
                </div>
                <div className='filter-show-more'>
                    {showMoreFilters && (
                        <div className='filters-bar'>
                            <span className="filter-label">{t('projectPage.filter.techFilter')}</span>
                            {allTags.map(tag =>(
                                <button
                                    key={tag}
                                    className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                                    onClick={()=> setActiveTag(tag)}
                                    > {tag === 'all' ? t('projectPage.filter.tag.all') : tag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="stats-row">
                    <span>{filtered.length} {t('projectPage.filter.statRow.number')}</span>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select">
                            <option value="recent">{t('projectPage.filter.statRow.mostRecent')}</option>
                            <option value="oldest">{t('projectPage.filter.statRow.lessRecent')}</option>
                        </select>
                </div>
                <div className='projects-page-flex'>
                    {filtered.map(project=>(
                        <div 
                            key={project.id}
                            className="project-page-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-page-thumb">
                                <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                                <span className="project-page-type-badge">{project.type}</span>
                            </div>
                            <div className="project-page-card-info">
                                <div className="project-page-card-name">{project.title}</div>
                                <div className="project-page-card-tags">
                                    {project.tags.map((tag, index)=>(
                                        <span key={index} className={`tag ${project.tagColor}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-page-card-footer">
                               <a href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-page-card-link"
                                onClick={(e) => e.stopPropagation()} // ← empêche d'ouvrir la modal en cliquant sur le lien
                                >
                                    <i className="ti ti-brand-github"></i> GitHub
                                </a>
                                <span className="project-page-card-year">{project.year}</span>
                            </div>
                        </div>
                    ))}
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
       </> 
    );
};

export default ProjectsPage