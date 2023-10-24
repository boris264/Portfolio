import Navbar from './Navbar/Navbar';
import CertificatesScroller from './Certificates/CertificatesScroller';
import './App.module.css';

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
                <section id="certificates">
                    <CertificatesScroller />
                </section>
            </main>
        </div>
    );
}

export default App;