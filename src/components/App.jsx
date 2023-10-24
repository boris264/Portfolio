import Navbar from './Navbar/Navbar';
import styles from './App.module.css';

function App() {
    return (
        <div className="app">
            <header className={styles.header}>
                <Navbar />
            </header>
        </div>
    );
}

export default App;