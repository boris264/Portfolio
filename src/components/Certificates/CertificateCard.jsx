import styles from './CertificateCard.module.css';

function CertificateCard({ certificateImageUrl, certificateTitle }) {
    return (
        <div className={styles.certificateCard}>
            <img src={certificateImageUrl}></img>
            <span>{certificateTitle}</span>
        </div>
    );
}

export default CertificateCard;