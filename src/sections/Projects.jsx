function Projects() {
  const projects = [
   {
    id: "artisan-connect",
    title: "Artisan Connect AI",
      category: "AI + Full Stack",
      description:
        "An AI-driven marketplace and smart cataloging platform designed to help marginalized artisans create better product listings, improve product presentation and connect with buyers.",
      technologies: [
        "React",
        "Supabase",
        "Gemini AI",
        "JavaScript"
      ],
      highlights: [
        "AI-assisted product cataloging",
        "Artisan verification system",
        "Marketplace and product management"
      ]
    },
    {
      id: "road-guardian",
      title: "Road Guardian AI",
      category: "Full Stack Application",
      description:
        "A road-damage reporting platform that allows users to submit road problems with images and location information while providing a dashboard for tracking complaint status.",
      technologies: [
        "React",
        "Supabase",
        "Computer Vision",
        "JavaScript"
      ],
      highlights: [
        "Image-based road reporting",
        "Location-aware complaints",
        "Municipality monitoring dashboard"
      ]
    },
   {
      id: "eventpulse",
      title: "EventPulse",
      category: "Web Application",
      description:
        "An event management and tracking application that supports different user roles, event registration and QR-based attendance management.",
      technologies: [
        "React",
        "Supabase",
        "Database",
        "JavaScript"
      ],
      highlights: [
        "Role-based system",
        "Event registration",
        "QR attendance tracking"
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-label">Projects</p>

        <h2>Things I've Built</h2>

        <p className="projects-intro">
          Practical projects where I apply software development,
          databases and AI technologies to solve real-world problems.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlights">
                {project.highlights.map((highlight) => (
                  <p key={highlight}>
                    ✓ {highlight}
                  </p>
                ))}
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

             <div className="project-actions">
            <a href={`/project/${project.id}`}>
              View Project →
            </a>
          </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects