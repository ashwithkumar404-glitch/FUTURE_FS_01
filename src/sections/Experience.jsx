function Experience() {
  const experiences = [
    {
      title: "AI/ML Developer Intern",
      company: "Internship Experience",
      period: "2026",
      description:
        "Worked on practical AI and machine learning concepts, Python-based development, data analysis and API-related tasks while gaining experience with real-world product development."
    },
    {
      title: "Project-Based Development",
      company: "Academic & Personal Projects",
      period: "2025 – Present",
      description:
        "Built practical applications using React, JavaScript, Supabase and AI technologies, focusing on solving real-world problems through hands-on development."
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <p className="section-label">Experience</p>

        <h2>Learning Through Experience</h2>

        <div className="experience-list">
          {experiences.map((experience) => (
            <div className="experience-card" key={experience.title}>
              <div className="experience-top">
                <div>
                  <h3>{experience.title}</h3>
                  <p className="experience-company">
                    {experience.company}
                  </p>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience