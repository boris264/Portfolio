import styles from './ProjectCard.module.css';

function ProjectCard({ name, description, githubRepositoryLink, repositorySiteName, isWIP }) {
    return (
        <div className={styles.projectCard}>
            <h3>{name} {isWIP ? "(W.I.P)" : ""}</h3>
            <p>{description}</p>
            <a target="_blank" className="hoverTransition" href={githubRepositoryLink}>GitHub Repository</a>
        </div>
    );
}

export default ProjectCard;