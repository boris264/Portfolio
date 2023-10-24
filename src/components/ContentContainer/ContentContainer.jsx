import styles from './ContentContainer.module.css';

function ContentContainer({ children }) {
    return (
        <div className={styles.contentContainer}>
            {children}
        </div>
    );
}

export default ContentContainer;