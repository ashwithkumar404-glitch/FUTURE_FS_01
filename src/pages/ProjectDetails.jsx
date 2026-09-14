import { useParams, Link } from "react-router-dom"

import artisanImage from "../assets/project-images/artisan-connect.png"
import roadGuardianImage from "../assets/project-images/road-guardian.png"
import eventPulseImage from "../assets/project-images/eventpulse.png"

function ProjectDetails() {
  const { id } = useParams()

  const projects = {
    "artisan-connect": {
      title: "Artisan Connect AI",
      category: "AI + Full Stack",

      image: artisanImage,

      description:
        "An AI-driven marketplace and smart cataloging platform designed to help marginalized artisans create better product listings, improve product presentation and connect with buyers.",

      problem:
        "Many marginalized artisans face difficulties in creating professional product listings, presenting their products online, reaching buyers and managing digital marketplaces.",

      solution:
        "Artisan Connect AI provides a simple platform where artisans can manage products, receive AI-assisted cataloging support, complete verification and connect with buyers through a marketplace.",

      features: [
        "AI-assisted product cataloging",
        "Artisan verification system",
        "Marketplace and product management",
        "Product image and information management",
        "Buyer and artisan interaction"
      ],

      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Gemini AI"
      ],

      github:
        "https://github.com/ashwithkumar404-glitch/artisan-connect-ai.git"
    },

    "road-guardian": {
      title: "Road Guardian AI",
      category: "Full Stack Application",

      image: roadGuardianImage,

      description:
        "A road-damage reporting platform that allows users to submit road problems with images and location information while providing a dashboard for tracking complaint status.",

      problem:
        "Citizens often have difficulty reporting road damage and tracking whether reported problems are actually being addressed.",

      solution:
        "Road Guardian AI provides a digital reporting system where users can submit road damage with images and location information, while authorities can monitor and update complaint status.",

      features: [
        "Image-based road damage reporting",
        "Location-aware complaints",
        "Complaint status tracking",
        "Municipality monitoring dashboard",
        "Citizen notifications"
      ],

      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Computer Vision"
      ],

      github:
        "https://github.com/ashwithkumar404-glitch/RoadGuardianAI.git"
    },

    "eventpulse": {
      title: "EventPulse",
      category: "Web Application",

      image: eventPulseImage,

      description:
        "An event management and tracking application that supports different user roles, event registration and QR-based attendance management.",

      problem:
        "Managing student events, registrations and attendance manually can become difficult when there are many participants.",

      solution:
        "EventPulse provides a centralized event management system with role-based access, online registration and QR-based attendance tracking.",

      features: [
        "Role-based user system",
        "Event creation and management",
        "Event registration",
        "QR-based attendance tracking",
        "Database-driven event management"
      ],

      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Database"
      ],

      github:
        "https://github.com/yourusername/eventpulse"
    }
  }

  const project = projects[id]

  if (!project) {
    return (
      <section className="project-details">
        <div className="section-container">
          <Link to="/#projects" className="back-projects">
            ← Back to Projects
          </Link>

          <h1>Project Not Found</h1>
        </div>
      </section>
    )
  }

  return (
    <section className="project-details">
      <div className="section-container">

        {/* Back Button */}
        <Link to="/#projects" className="back-projects">
          ← Back to Projects
        </Link>

        {/* Project Title */}
        <div className="project-details-header">
          <p className="section-label">
            {project.category}
          </p>

          <h1>{project.title}</h1>

          <p className="project-details-description">
            {project.description}
          </p>
        </div>

        {/* Image + Details */}
        <div className="project-details-layout">

          {/* Image */}
          <div className="project-details-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>

          {/* Details */}
          <div className="project-details-content">

            {/* Problem */}
            <div className="project-detail-section">
              <h2>Problem</h2>

              <p>
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="project-detail-section">
              <h2>Solution</h2>

              <p>
                {project.solution}
              </p>
            </div>

            {/* Features */}
            <div className="project-detail-section">
              <h2>What I Built</h2>

              <div className="project-detail-list">
                {project.features.map((feature) => (
                  <p key={feature}>
                    ✓ {feature}
                  </p>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="project-detail-section">
              <h2>Technologies Used</h2>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* GitHub Section */}
        <div className="project-github">
          <p>
            Want to see the complete project and source code?
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Get More Information on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectDetails