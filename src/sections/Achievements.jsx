function Achievements() {
  const achievements = [
    {
      title: "State-Level Buildathon Qualifier",
      description:
        "My project submission to the OpenAI Academy × NxtWave Buildathon was selected for the State-Level Buildathon, recognizing the project's creativity, technical work and potential."
    },
    {
      title: "Smart India Hackathon Project",
      description:
        "Contributed to Artisan Connect AI, an AI-driven platform focused on helping marginalized artisans improve digital product cataloging and market access."
    },
    {
      title: "3rd Place – Arduino Line Follower",
      description:
        "Achieved 3rd place in an Arduino-based line follower project competition by developing and testing an autonomous robotic system."
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <p className="section-label">Achievements</p>

        <h2>What I've Achieved</h2>

        <p className="achievements-intro">
          Highlights from my academic projects, competitions and
          hands-on technical journey.
        </p>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.title}
            >
              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements