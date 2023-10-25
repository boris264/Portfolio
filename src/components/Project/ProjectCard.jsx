import styles from './ProjectCard.module.css';

function ProjectCard({ name, description, githubRepositoryLink, repositorySiteName }) {
    return (
        <div className={styles.projectCard}>
            <h3>{name}</h3>
            <p>{description}</p>
            <a target="_blank" className="hoverTransition" href={githubRepositoryLink}>GitHub Repository</a>
        </div>
    );
}

export default ProjectCard;