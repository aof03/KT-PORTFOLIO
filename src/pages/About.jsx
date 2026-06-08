export default function About() {
  return (
    <main className="about-page">

      {/* HEADER */}
      <section className="page-header">
        <h1>About Me</h1>

        <p>
          Backend Engineer and Full-Stack Developer passionate about
          building scalable systems, APIs, and real-world applications.
        </p>
      </section>

      {/* BIO */}
      <section className="about-section">

        <h2>Who I Am</h2>

        <p>
          I'm a Backend Engineer focused on designing APIs,
          authentication systems, database architecture,
          and scalable backend services.

          I enjoy solving real-world problems through software
          and continuously improving my system design skills.
        </p>

      </section>

      {/* EXPERIENCE */}
      <section className="about-section">

        <h2>Projects & Experience</h2>

        <ul>
          <li>
            <strong>Capzi Ride-Hailing Platform</strong> —
            Designed ride dispatching, KYC verification,
            anti-fraud systems, GPS validation and secure workflows.
          </li>

          <li>
            <strong>Gift Shop Stock System</strong> —
            Developed inventory management and transaction tracking.
          </li>

          <li>
            <strong>AI Expense Categorization System</strong> —
            Built expense classification using OpenAI API,
            TypeScript and Express.js.
          </li>

          <li>
            <strong>Backend Mini Project</strong> —
            Book Management API developed as the final certification project.
          </li>
        </ul>

      </section>

      {/* SKILLS */}
      <section className="about-section">

        <h2>Core Skills</h2>

        <div className="tech-grid">
          <span className="tech-item">Node.js</span>
          <span className="tech-item">Express.js</span>
          <span className="tech-item">MongoDB</span>
          <span className="tech-item">PostgreSQL</span>
          <span className="tech-item">JWT</span>
          <span className="tech-item">React</span>
          <span className="tech-item">React Native</span>
          <span className="tech-item">REST API</span>
          <span className="tech-item">System Design</span>
          <span className="tech-item">Git & GitHub</span>
        </div>

      </section>

      {/* EDUCATION */}
      <section className="about-section">

        <h2>Education & Certification</h2>

        <div className="cert-card">

          <h3>TechUp Backend Developer Program</h3>

          <p>
            Completed a Backend Developer training program focused on:
          </p>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API Development</li>
            <li>Authentication & Authorization</li>
            <li>Database Design</li>
            <li>System Architecture</li>
          </ul>

        </div>

      </section>

      {/* FUTURE GOALS */}
      <section className="about-section">

        <h2>Currently Learning</h2>

        <p>
          Currently expanding my knowledge in distributed systems,
          cloud infrastructure, ride-hailing architecture,
          fraud prevention, payment workflows,
          and large-scale backend design through the Capzi platform.
        </p>

      </section>

    </main>
  );
}