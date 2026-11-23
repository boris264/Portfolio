import styles from './WorkCard.module.css';

function WorkCard({ companyName, position, yearSpan, summary, activities }) {
    return (
        <div className={styles.workCard}>
            <h3>{companyName} - {yearSpan}</h3>
            <p>Position: {position}</p>
            <p className={styles.summary}>{summary}</p>
            <ul className={styles.activities}>
                {activities.map(a => <li key={a}>{a}</li>)}
            </ul>
        </div>
    );
}

export default WorkCard;
