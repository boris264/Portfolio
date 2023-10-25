import ProjectCard from "./ProjectCard";
import styles from './ProjectsContainer.module.css';

const projects = [
    {
        name: "Twins Artstyle V2",
        description: "This is a marketplace for handmade and digital drawings. It is built following the Clean Architecture Pattern and using ASP.NET Core 7, Entity Framework Core, PostgreSQL and a Redis server, which acts as a cache. The application allows users to buy drawings, created by other users and to list their own drawings for others to buy.",
        link: "https://github.com/boris264/TwinsArtstyleV2",
    },
    {
        name: "Authentication Manager",
        description: "A class library, written in C#, which is used to add authentication services into an application. It supports basic authentication actions, such as Login, Register and Logout. The information about a currently logged in user is stored inside of a Redis server by a Middleware. The user gets a sessionId, which is used to access his information in the cache.",
        link: "https://github.com/boris264/AuthenticationManager",
    },
    {
        name: "Portfolio",
        description: "The site you are currently viewing. It's writteng using React + Javascript and built with Vite.",
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
                                    githubRepositoryLink={p.link} />)
            }
        </div>
    );
}

export default ProjectsContainer;