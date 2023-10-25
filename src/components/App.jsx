import Navbar from './Navbar/Navbar';
import CertificatesScroller from './Certificates/CertificatesScroller';
import './App.module.css';
import WorkCard from './WorkCard/WorkCard';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';

function App() {
    return (
        <div className="app">
            <header>
                <Navbar />
            </header>
            <main>
                <Section id="home">
                    <h1>Welcome</h1>
                    <p>My name is Boris Todorov. <br></br>I am a student, and a Software Developer.</p>
                </Section>
                <Section>
                    <h2>Work Experience</h2>
                    <WorkCard companyName="MM Solutions"
                              yearSpan="July 2022 / July 2023"
                              position="Junior Software Developer"
                              activities="Participation in the development and maintenance of various 
                              projects using C/C++ and Bash on Unix-based OS, using development 
                              environment technologies like Docker" />
                </Section>
                <Section id="certificates">
                    <CertificatesScroller />
                </Section>
                <Section id="contacts">
                    <Contacts />
                </Section>
            </main>
        </div>
    );
}

export default App;