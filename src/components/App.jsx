import Navbar from './Navbar/Navbar';
import CertificatesScroller from './Certificates/CertificatesScroller';
import './App.module.css';
import WorkExperience from './WorkCard/WorkExperience';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import ProjectsContainer from './Project/ProjectsContainer';

function App() {
    return (
        <div className="app">
            <header>
                <Navbar />
            </header>
            <main>
                <Section id="home">
                    <h1>Welcome</h1>
                    <p>My name is Boris Todorov. <br></br>I am a Full-Stack .NET Developer.</p>
                </Section>
                <Section>
                    <h2>Work Experience</h2>
                    <WorkExperience />
                </Section>
                <Section id="projects">
                    <h2>Projects</h2>
                    <ProjectsContainer />
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