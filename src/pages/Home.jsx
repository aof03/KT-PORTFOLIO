import { Link } from "react-router-dom";
import icon_Capzi from "../assets/icon_Capzi.png";
import Certificate from "../assets/Certificate.PNG";

export default function Home() {
const techStack = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "JWT",
  "React",
  "React Native",
  "REST API",
  "Git",
  "GitHub",
  "System Design",
  "typeScript",
  "OpenAI API",
  "bcrypt"
];

  return (
    <main>
      {/* HERO */}
      <section className="hero-section">

  <div className="hero-left">

    <div className="hero-badge">
      Backend Engineer • Full-Stack Developer
    </div>

    <h1>
      Building Scalable
      <br />
      Backend Systems
    </h1>

    <p>
      APIs, Authentication, Ride-Hailing Architecture,
      System Design and Real-World Platforms.
    </p>

    <div className="hero-actions">
      <Link to="/projects" className="btn-primary">
        View Projects
      </Link>

      <Link to="/about" className="btn-secondary">
        About Me
      </Link>
    </div>

  </div>

  <div className="hero-right">

    <img
      src={icon_Capzi}
      alt="Capzi"
      className="hero-cover"
    />

  </div>

</section>

      {/* FEATURED PROJECT */}
      <section className="featured-capzi">

  <div className="featured-content">

    <span>Featured Project</span>

    <h2>Capzi Ride-Hailing Platform</h2>

    <p>
      Complete backend architecture for ride-hailing,
      dispatching, KYC verification and fraud prevention.
    </p>

    <Link
      to="/capzi"
      className="btn-primary"
    >
      Read Case Study
    </Link>

  </div>

</section>

{/* 👇  Timeline  */}
 <section className="section">

  <h2>Journey</h2>

<div className="timeline-item">
  <span>2025</span>

  <h3>TechUp Backend Developer Program</h3>

  <p>
    Completed Backend Developer training and built a
    Book Management API as the final certification project.
  </p>
</div>
 
        <div className="timeline-item">
      <span>2025</span>
      <h3>AI-Expense-Categorization-System</h3>
      <p>
        AI Expense Categorization System — Built an expense tracking backend that automatically 
        categorizes transactions using OpenAI API with keyword-based fallback matching, 
        TypeScript type safety, and robust error handling.
      </p>
    </div>

    <div className="timeline-item">
      <span>2025-2026</span>
      <h3>Capzi Ride-Hailing Platform</h3>
      <p>
        Designed ride dispatching, JWT authentication,
        KYC verification, anti-fraud logic and real-time ride workflows.
      </p>
    </div>

    <div className="timeline-item">
      <span>2026</span>
      <h3>Gift Shop Stock System</h3>
      <p>
        Developed inventory and stock management features,
        including CRUD operations and database management.
      </p>
    </div>


</section>

      {/* TECH STACK */}
      <section className="section">
        <h2>Tech Stack</h2>

        <div className="tech-grid">
          {techStack.map((item) => (
            <span key={item} className="tech-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>

        <p className="about-text">
          I enjoy building backend systems, authentication services,
          ride-hailing platforms, and scalable APIs that solve
          real-world problems.
        </p>
      </section>

      
      <section className="section">

  <h2>GitHub Activity</h2>

  <div className="github-grid">

    <div className="github-card">
      <h3>Repositories</h3>
      <p>10+</p>
    </div>

    <div className="github-card">
      <h3>Main Stack</h3>
      <p>Node.js</p>
    </div>

    <div className="github-card">
      <h3>Projects</h3>
      <p>4+</p>
    </div>

  </div>

</section>

<section className="section">

  <h2>Certification</h2>

  <div className="cert-card">

    <img
      src={Certificate}
      alt="TechUp Certificate"
    />

    <div>

      <h3>
        TechUp Backend Developer Program
      </h3>

      <p>
        Completed backend developer training and
        built Book Management API as final project.
      </p>

    </div>

  </div>

</section>
<footer className="footer">

  <h2>KT Portfolio</h2>

  <p>
    Backend Engineer • Full Stack Developer
  </p>

  <div className="footer-links">

    <a
      href="https://github.com/aof03"
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
    >
      GitHub
    </a>

    <a
      href="mailto:k.kaweephat@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
    >
      Email
    </a>

    <a
      href="https://www.linkedin.com/in/kaweephat"
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
    >
      LinkedIn
    </a>

    <a
      href="tel:095-354-5562"
      className="btn-primary"
    >
      Phone
    </a>

    <a
      href="https://line.me/ti/p/~kaweephut"
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
    >
      Line
    </a>

  </div>

<div className="footer-bottom">
  <p>
    © 2026 Present Kaweephat • Backend Engineer • Full Stack Developer
  </p>
</div>

</footer>
    </main>
  );
}