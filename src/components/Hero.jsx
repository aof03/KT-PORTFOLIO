export default function Hero() {
  return (
    <section className="hero">

      <div style={{
        display: "inline-block",
        padding: "6px 12px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "999px",
        fontSize: "12px",
        marginBottom: "20px"
      }}>
        Backend Engineer • System Design • Capzi Platform
      </div>

      <h1>
        Building Scalable Backend Systems
      </h1>

      <p>
        I design APIs, authentication systems, and real-time backend architecture.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center" }}>
        <a className="btn btn-primary" href="/projects">View Projects</a>
        <a className="btn" href="/capzi">Case Study</a>
      </div>

    </section>
  );
}

{/* STATS */}

<section className="stats-section">

  <div className="stat-card">
    <h3>20+</h3>
    <p>API Endpoints Built</p>
  </div>

  <div className="stat-card">
    <h3>3</h3>
    <p>Full Stack Projects</p>
  </div>

  <div className="stat-card">
    <h3>1</h3>
    <p>Ride-Hailing Platform</p>
  </div>

</section>