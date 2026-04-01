const details = [
    { year: "2022-2025", degree: "BCA",                college: "Hindustan College of Arts and Science" },
    { year: "2025-2025", degree: "Full Stack With Java", college: "Fita Academy" },
]

const skills = ["React", "Html/Css", "JavaScript", "Git", "Python", "Java"]

export default function About() {
    return (
        <>
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
                        I'm a fresh BCA graduate who discovered a love for frontend
                        development during college. I enjoy building things that are both
                        functional and visually clean. I'm actively looking for my first
                        full-time role or internship where I can contribute, learn fast,
                        and grow with a team.
                    </p>
                </div>
                <div className='education-card'>
                    {details.map((detail, id) => (
                        <div key={id}>
                            <p>{detail.year}</p>
                            <h3>{detail.degree}</h3>
                            <p>{detail.college}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}