function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Vite"]
    },
    {
      title: "Database & Backend",
      skills: ["Supabase", "PostgreSQL", "Authentication", "Storage"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Computer Vision", "OpenCV", "Scikit-learn"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "n8n"]
    },
    {
      title: "Currently Learning",
      skills: ["Full Stack Development", "DSA", "AI/ML", "Automation"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">Skills</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-intro">
          I am continuously expanding my technical skills through
          projects, coursework and hands-on learning.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills