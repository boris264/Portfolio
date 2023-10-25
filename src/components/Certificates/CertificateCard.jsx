import styles from './CertificateCard.module.css';

function CertificateCard({ certificateImageUrl, certificateTitle }) {
    return (
        <div className={styles.certificateCard}>
            <a target="_blank" href={certificateImageUrl}>
                <img className={styles.certificateImage} src={certificateImageUrl}></img>
            </a>
            <span>{certificateTitle}</span>
        </div>
    );
}

export default CertificateCard;