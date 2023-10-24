import Navbar from './Navbar/Navbar';
import ContentContainer from './ContentContainer/ContentContainer';
import styles from './App.module.css';

function App() {
    return (
        <div className="app">
            <header className={styles.header}>
                <Navbar />
            </header>
            <main>
                <ContentContainer>
                    <h1>Welcome</h1>
                    <p>My name is Boris Todorov. <br></br>I am a student, and a Software Developer.</p>
                </ContentContainer>
            </main>
        </div>
    );
}

export default App;