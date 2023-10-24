import Navbar from './Navbar/Navbar';
import CertificatesScroller from './Certificates/CertificatesScroller';
import './App.module.css';
import WorkCard from './WorkCard/WorkCard';

function App() {
    return (
        <div className="app">
            <header>
                <Navbar />
            </header>
            <main>
                <section id="introduction-section">
                    <h1>Welcome</h1>
                    <p>My name is Boris Todorov. <br></br>I am a student, and a Software Developer.</p>
                </section>
                <section>
                    <h2>Work Experience</h2>
                    <WorkCard companyName="MM Solutions"
                              position="Junior Software Developer"
                              activities="Participation in the development and maintenance of various 
                              projects using C/C++ and Bash on Unix-based OS, using development 
                              environment technologies like Docker" />
                </section>
                <section id="certificates">
                    <CertificatesScroller />
                </section>
            </main>
        </div>
    );
}

export default App;