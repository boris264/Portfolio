import WorkCard from './WorkCard';
import styles from './WorkExperience.module.css';

const workExperiences = [
    {
        companyName: "Cobuilder International",
        yearSpan: "March 2024 / July 2026",
        position: "Full-Stack Software Engineer",
        summary: "Sofia and remote · Construction data management SaaS · C#, ASP.NET Core, SQL Server, Angular, React, Azure",
        activities: [
            "Built and owned an internal tool that compares file hashes in Azure File Share with the hashes stored in the database, across tens of millions of files. It runs daily on new files and weekly on everything. Also set up its Azure DevOps build and release pipelines.",
            "The tool found thousands of mismatched files, which helped other teams track down bugs in their apps.",
            "Changed the tool to stream data instead of loading it all into memory. Peak RAM dropped from 4–5 GB to under 700 MB, so it could run on the App Service it shared with other apps.",
            "Worked with two other developers on Libraries, a big feature that lets users reuse the same data across several projects. Wrote back-end API endpoints and parts of the UI, and reworked existing Angular components so the same ones work for both projects and libraries."
        ]
    },
    {
        companyName: "MM Solutions",
        yearSpan: "July 2022 / July 2023",
        position: "Junior Software Developer",
        summary: "Plovdiv · Embedded systems and imaging",
        activities: [
            "Built an internal ASP.NET Core app for testing AI image tools. It checks uploads by size, extension and magic bytes, then a background service runs FFmpeg and an in-house C++ program on each image as separate processes.",
            "Worked on internal C/C++ projects on Linux, mostly maintaining CMake and Android.mk build files."
        ]
    }
];

function WorkExperience() {
    return (
        <div className={styles.workExperience}>
            {
                workExperiences.map(w => <WorkCard
                                    key={w.companyName}
                                    companyName={w.companyName}
                                    yearSpan={w.yearSpan}
                                    position={w.position}
                                    summary={w.summary}
                                    activities={w.activities} />)
            }
        </div>
    );
}

export default WorkExperience;
