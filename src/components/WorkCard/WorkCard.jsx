import styles from './WorkCard.module.css';

function WorkCard({ companyName, position, activities }) {
    return (
        <div className={styles.workCard}>
            <h3>{companyName}</h3>
            <p>Position: {position}</p>
            <p>Activities and Responsibilities: {activities}
            </p>
        </div>
    );
}

export default WorkCard;