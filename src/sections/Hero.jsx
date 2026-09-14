import profilePhoto from "../assets/ashwithprofile.jpeg"

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Ashwith Kumar K</h1>

        <h2>
          Computer Science Engineering Student
          <span> | </span>
          Aspiring Full Stack Developer
        </h2>

        <p className="hero-description">
          I build practical web applications and explore
          AI, Machine Learning and automation to solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/ashwithkumar404-glitch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashwith-kumar-k-26a241312"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profilePhoto}
          alt="Ashwith Kumar K"
        />
      </div>

    </section>
  )
}

export default Hero