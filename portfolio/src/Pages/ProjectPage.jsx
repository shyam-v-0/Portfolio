const Projects = [
    { no: "01", title: "Portfolio",       description: "Personal portfolio with dark modern animation with contact form",                                           color: "#1E2A78" },
    { no: "02", title: "Todo-app",        description: "Frontend based JavaScript student crud operation tasks",                                                   color: "#134E4A" },
    { no: "03", title: "Kural-family app",description: "Family management app to track groceries, bills, educational fees and payments", color: "#3B0764" },
]

export default function ProjectPage() {
    return (
        <div className='project-ctn'>
            <h1>Projects i've built</h1>
            <div className='stat-grid'>
                {Projects.map((project, index) => (
                    <div key={index} className='stat-card'>
                        <span >{project.no}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}