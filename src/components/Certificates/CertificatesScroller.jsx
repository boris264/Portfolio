import CertificateCard from './CertificateCard';
import styles from './CertificatesScroller.module.css';

const certificates = [
    {
        name: "mms-star-camp-certificate.jpg",
        title: "MM Solutions: Star Camp 15"
    },
    {
        name: "programming_with_javascript_coursera_certificate.png",
        title: "Meta: Programming with Javascript"
    },
    {
        name: "intro_to_frontend_development_coursera_certificate.png",
        title: "Meta: Introduction to Front- End Development"
    },
    {
        name: "getting_started_clean_architecture_dometrain_certificate.png",
        title: "Dometrain: Getting started with Clean Architecture"
    },
    {
        name: "react_basics_coursera_certificate.png",
        title: "Meta: React Basics"
    },
    {
        name: "programming_basics.png",
        title: "Softuni: Programming Basics"
    },
    {
        name: "programming_fundamentals.png",
        title: "Softuni: Programming Fundamentals"
    },
    {
        name: "csharp_advanced.png",
        title: "Softuni: C# Advanced"
    },
    {
        name: "csharp_oop.png",
        title: "Softuni: C# OOP"
    },
    {
        name: "ms_sql.png",
        title: "Softuni: MS SQL"
    },
    {
        name: "entity_framework_core.png",
        title: "Softuni: Entity Framework Core"
    },
    {
        name: "csharp_web_basics.png",
        title: "Softuni: C# Web Basics"
    },
    {
        name: "asp.net_core.png",
        title: "Softuni: ASP.NET Core"
    }
]

function CertificatesScroller() {
    return (
        <div className={styles.certificatesScrollerContainer}>
            <h2>Certificates</h2>
            <div className={styles.scroller}>
                {
                    certificates.map(c => {
                        return <CertificateCard
                            key={c.name}
                            certificateImageUrl={`images/${c.name}`}
                            certificateTitle={c.title} />
                    })
                }
            </div>
        </div>
    );
}

export default CertificatesScroller;