import Navbar from './Navbar/Navbar';
import styles from './App.module.css';

function App() {
    return (
        <div className="app">
            <header className={styles.header}>
                <Navbar />
            </header>
            <main>
                <section id="introduction-section" className={styles.contentContainer}>
                    <h1>Welcome</h1>
                    <p>My name is Boris Todorov. <br></br>I am a student, and a Software Developer.</p>
                </section>
            </main>
        </div>
    );
}

export default App;