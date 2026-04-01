import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Styles.css'
import resume from "../../public/resume.pdf"
export default function HomePage() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const Projects = [
        {
            no: "01",
            title: "Portfolio",
            description: "personal portfolio with dark modern animation with contact form"
        },
        {
            no: "02",
            title: "Todo-app",
            description: "fronted based javascript student crud operation tasks"
        },
        {
            no: "03",
            title: "Kural-family app",
            description: "it is a family management app where we can check all the groceries,bills,educational fees and pay it using this app"
        }
    ]
    const details = [
        {
            year: "2022-2025",
            degree: "BCA",
            college: "Hindustan College of Arts and science",
        },
        {
            year: "2025-2025",
            degree: "Full Stack With Java",
            college: "Fita Academy",
        }
    ]
    const skills = [
        "React", "Html/Css", "JavaScript", "Git", "Python", "Java"
    ]
    return (
        <div className="Home-ctn">
            <div className='main-ctn'>
                <div className='hero-section'>
                    <div className='status-badge open'>
                        <span className='status-dot'></span>
                        <span> Open to opportunities</span>
                    </div>
                    <div className='intro'>
                        <h3>Hi, I'm Shyam V </h3>
                        <h3>Frontend Developer — </h3>
                        <h3>BCA graduate passionate about building clean,responsive web apps.I love turning designs into code that works.</h3>
                    </div>
                    <div className='nav-btn'>
                        <button className='btn btn-primary' onClick={() => navigate('projects')}>View project</button>
                        <a href={resume} download="Shyam_Resume.pdf">
                            <button className='btn btn-secondary'>Download resume</button>
                        </a>
                    </div>
                    <div className='tech-stack'>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>Html/Css</p>
                        <p>Git</p>
                    </div>
                </div>
                <div className='status-card'>
                    <div className='avatar'>S</div>
                    <h3>Shyam v</h3>
                    <p>BCA 2025 Graduate</p>
                    <div className='location'>
                        <p>Location</p>
                        <p>Chennai,India</p>
                    </div>
                    <div className='education'>
                        <p>Education</p>
                        <p>Madras University</p>
                    </div>
                    <div className='gpa'>
                        <p>GPA</p>
                        <p>8.0/10</p>
                    </div>
                    <div className='project'>
                        <p>Projects</p>
                        <p>3 Completed</p>
                    </div>
                </div>
            </div>
            <div className='project-ctn'>
                <h1>Projects i've built</h1>
                <div className='stat-grid'>
                    {Projects.map((project, index) => (
                        <div key={index} className='stat-card'>
                            <span style={{ background: project.color }}>{project.no}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='skills'>
                <div className='skill-card'>
                    <span>What I Known</span>
                    <h1>Skills</h1>
                    <div className='skill-list'>
                        {skills.map((skill, id) => (
                            <p key={id}>{skill}</p>
                        ))}
                    </div>

                </div>
            </div>
            <div className='about-me'>
                <p>A LITTLE ABOUT ME</p>
                <h2>Background</h2>
                <div className='background'>
                    <p>
                        I am a Computer Science graduate with a strong interest in frontend development, which I discovered during my college years. What started as curiosity quickly turned into a passion for building clean, responsive, and user-friendly web interfaces. I enjoy turning ideas into real, interactive applications — whether it's a simple landing page or a fully functional React-based project.

                        I have hands-on experience with modern frontend technologies like HTML, CSS, JavaScript, and React, and I continuously strive to improve my skills by working on projects and exploring new tools. I pay attention not just to functionality, but also to design and user experience, aiming to create applications that are both efficient and visually appealing.

                        As a fresher, I am eager to begin my professional journey in a collaborative environment where I can contribute, learn from experienced developers, and grow both technically and personally. I am actively looking for an opportunity where I can apply my knowledge, take on challenges, and build impactful digital experiences.</p>
                </div>
                <div className='education-card'>
                    {details.map((detail, id) => (
                        <div>
                            <p>{detail.year}</p>
                            <h3>{detail.degree}</h3>
                            <p>{detail.college}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cta'>
                <p>GET IN TOUCH</p>
                <h2>Let's build something together</h2>
                <p className='cta-desc'>
                    I'm actively looking for my first role. Got an opening or a
                    cool project? Let's talk.
                </p>
                <div className='cta-buttons'>
                     <a href="mailto:shyamvisu123@gmail.com">
                    <button className='cta-btn-outline'>Email me</button>
                </a>
                <a href="https://linkedin.com/in/shyam-v-4779b6357" target="_blank" rel="noreferrer">
                    <button className='cta-btn-outline'>LinkedIn profile</button>
                </a>
                <a href="https://github.com/shyam-v-0" target="_blank" rel="noreferrer">
                    <button className='cta-btn-outline'>GitHub profile</button>
                    </a>
                </div>
            </div>
        </div>
    )
}