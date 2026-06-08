export default function Projects() {
  return (
    <main className="projects-page">

      {/* HERO */}

      <section className="projects-hero">

        <span className="badge">
          Portfolio Projects
        </span>

        <h1>
          Projects & Case Studies
        </h1>

        <p>
          A collection of backend systems, APIs,
          AI integrations, and real-world platform architectures.
        </p>

      </section>

      {/* FEATURED CAPZI */}

      <section className="featured-project">

        <div className="featured-content">

          <span className="featured-tag">
            FEATURED PROJECT
          </span>

          <h2>
            Capzi Ride-Hailing Platform
          </h2>

          <p>
            Production-style ride-hailing platform featuring
            authentication, KYC verification, dispatch workflows,
            anti-fraud systems, GPS validation and real-time
            ride lifecycle management.
          </p>

          <div className="stack-list">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>JWT</span>
            <span>React Native</span>
            <span>Google Maps API</span>
          </div>

          <a
            href="https://github.com/aof03/Capzi-Ride-Hailing-Platform"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Repository
          </a>

        </div>

      </section>

      {/* BENTO GRID */}

      <section className="bento-grid">

        {/* Expense AI */}

        <div className="bento-card">

          <span className="card-label">
            AI PROJECT
          </span>

          <h3>
            Expense Categorization System
          </h3>

          <p>
            Automatically classifies expenses using OpenAI API
            with keyword fallback matching, TypeScript type safety,
            and error handling.
          </p>

          <div className="stack-list">
            <span>OpenAI API</span>
            <span>TypeScript</span>
            <span>Express.js</span>
          </div>

        </div>

        {/* Gift Shop */}

        <div className="bento-card">

          <span className="card-label">
            INVENTORY
          </span>

          <h3>
            Gift Shop Stock System
          </h3>

          <p>
            Inventory and stock management platform with
            product tracking, transaction workflows,
            CRUD operations and database integration.
          </p>

          <div className="stack-list">
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>CRUD</span>
          </div>

        </div>

        {/* TechUp */}

        <div className="bento-card">

          <span className="card-label">
            CERTIFICATION
          </span>

          <h3>
            Backend Mini Project
          </h3>

          <p>
            Final certification project from TechUp Backend
            Developer Program featuring REST APIs,
            authentication and PostgreSQL integration.
          </p>

          <div className="stack-list">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PostgreSQL</span>
            <span>JWT</span>
          </div>

        </div>

      </section>

      {/* GITHUB STATS */}

      <section className="github-section">

        <h2>
          GitHub Activity
        </h2>

        <div className="github-grid">

          <div className="github-card">
            <h3>4+</h3>
            <p>Major Projects</p>
          </div>

          <div className="github-card">
            <h3>Node.js</h3>
            <p>Primary Backend Stack</p>
          </div>

          <div className="github-card">
            <h3>REST API</h3>
            <p>Backend Specialization</p>
          </div>

        </div>

      </section>

      {/* CERTIFICATION */}

      <section className="cert-section">

        <h2>
          Learning & Certification
        </h2>

        <div className="cert-card">

          <div className="cert-content">

            <h3>
              TechUp Backend Developer Program
            </h3>

            <p>
              Successfully completed backend developer training
              and delivered a Book Management API as the final
              certification project.
            </p>

            <ul>
              <li>REST API Design</li>
              <li>Authentication & Authorization</li>
              <li>PostgreSQL Database Design</li>
              <li>Book Management System</li>
            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="projects-cta">

        <h2>
          Interested In Working Together?
        </h2>

        <p>
          Available for Backend Developer and
          Full-Stack opportunities.
        </p>

        <div className="cta-buttons">

          <a
            href="mailto:k.kaweephat@gmail.com"
            className="btn-primary"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/aof03"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>

        </div>

      </section>

    </main>
  );
}