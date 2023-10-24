import styles from './Section.module.css';

function Section({ children , id}) {
    return (
        <section id={id} className={styles.section}>
            {children}
        </section>
    );
}

export default Section;