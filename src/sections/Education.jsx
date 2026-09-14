function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">
        <p className="section-label">Education</p>

        <h2>My Academic Journey</h2>

        <div className="education-card">

          <div className="education-top">
            <div>
              <p className="education-period">
                2024 – Present
              </p>

              <h3>
                Bachelor of Engineering
              </h3>

              <h4>
                Computer Science Engineering
              </h4>

              <p className="education-specialization">
                Specialization in Artificial Intelligence & Machine Learning
              </p>
            </div>

            <div className="education-status">
              <span>Currently Pursuing</span>
            </div>
          </div>

          <div className="education-divider"></div>

          <p className="education-college">
            Sahyadri College of Engineering & Management
          </p>

          <p className="education-location">
            Mangaluru, Karnataka
          </p>

          <p className="education-description">
            My engineering journey combines academic learning with
            hands-on technical projects. Alongside my AI/ML studies,
            I am building practical skills in full-stack development,
            programming, databases, automation and problem solving.
          </p>

          <div className="education-focus">
            <div>
              <span>01</span>
              <h5>AI & ML</h5>
              <p>Exploring intelligent and data-driven solutions.</p>
            </div>

            <div>
              <span>02</span>
              <h5>Full Stack</h5>
              <p>Turning ideas into practical web applications.</p>
            </div>

            <div>
              <span>03</span>
              <h5>Project Based Learning</h5>
              <p>Learning by building and solving real problems.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education