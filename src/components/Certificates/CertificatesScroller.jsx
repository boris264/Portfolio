import CertificateCard from './CertificateCard';
import styles from './CertificatesScroller.module.css';
import programmingWithJavascript from '../../assets/programming_with_javascript_coursera_certificate.png';
import introToFrontend from '../../assets/intro_to_frontend_development_coursera_certificate.png';
import cleanArchitecture from '../../assets/getting_started_clean_architecture_dometrain_certificate.png';
import reactBasics from '../../assets/react_basics_coursera_certificate.png';
import programmingBasics from '../../assets/programming_basics.png';
import programmingFundamentals from '../../assets/programming_fundamentals.png';
import csharpAdvanced from '../../assets/csharp_advanced.png';
import csharpOOP from '../../assets/csharp_oop.png';
import msSql from '../../assets/ms_sql.png';
import efCore from '../../assets/entity_framework_core.png';
import csharpWebBasics from '../../assets/csharp_web_basics.png';
import aspNetCore from '../../assets/asp.net_core.png';

function CertificatesScroller() {
    return (
        <div className={styles.certificatesScrollerContainer}>
            <h2>Certificates</h2>
            <div className={styles.scroller}>
                <CertificateCard 
                    certificateImageUrl={programmingWithJavascript} 
                    certificateTitle="Meta: Programming with Javascript" />
                <CertificateCard 
                    certificateImageUrl={introToFrontend} 
                    certificateTitle="Meta: Introduction to Front-End Development" />
                <CertificateCard 
                    certificateImageUrl={cleanArchitecture} 
                    certificateTitle="Dometrain: Getting started with Clean Architecture" />
                <CertificateCard 
                    certificateImageUrl={reactBasics} 
                    certificateTitle="Meta: React Basics" />
                <CertificateCard 
                    certificateImageUrl={programmingBasics} 
                    certificateTitle="Softuni: Programming Basics" />
                <CertificateCard 
                    certificateImageUrl={programmingFundamentals} 
                    certificateTitle="Softuni: Programming Fundamentals" />
                <CertificateCard 
                    certificateImageUrl={csharpAdvanced} 
                    certificateTitle="Softuni: C# Advanced" />
                <CertificateCard 
                    certificateImageUrl={csharpOOP} 
                    certificateTitle="Softuni: C# OOP" />
                <CertificateCard 
                    certificateImageUrl={msSql} 
                    certificateTitle="Softuni: MS SQL" />
                <CertificateCard 
                    certificateImageUrl={efCore} 
                    certificateTitle="Softuni: Entity Framework Core" />
                <CertificateCard 
                    certificateImageUrl={csharpWebBasics} 
                    certificateTitle="Softuni: C# Web Basics" />
                <CertificateCard 
                    certificateImageUrl={aspNetCore} 
                    certificateTitle="Softuni: ASP.NET Core" />
            </div>
        </div>
    );
}

export default CertificatesScroller;