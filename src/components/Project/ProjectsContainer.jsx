import ProjectCard from "./ProjectCard";
import styles from './ProjectsContainer.module.css';

const projects = [
    {
        name: "TradeR",
        description: "A .NET 10 toolkit for backtesting crypto trading strategies on historical Kraken market data. It bulk-imports candles into PostgreSQL with Npgsql's binary COPY, streams them through a simulation engine that handles stop losses, take profits and fees, runs backtests in parallel and writes every trade to an Excel workbook.",
        link: "https://github.com/boris264/TradeR",
        isWIP: true
    },
    {
        name: "Portfolio",
        description: "The site you are currently viewing. It's written using React + Javascript and built with Vite.",
        link: "https://github.com/boris264/Portfolio",
    }
];

function ProjectsContainer() {
    return (
        <div className={styles.projectsContainer}>
            {
                projects.map(p => <ProjectCard 
                                    key={p.link}
                                    name={p.name} 
                                    description={p.description}
                                    githubRepositoryLink={p.link}
                                    isWIP={p.isWIP} />)
            }
        </div>
    );
}

export default ProjectsContainer;