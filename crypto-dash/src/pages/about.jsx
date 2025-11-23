import { Link } from "react-router";

const AboutPage = () => {
    return (
        <main className="about" aria-labelledby="about-title">
            <header className="about-hero">
                <h1 id="about-title">About Crypto Dash</h1>
                <p className="lede">
                    Crypto Dash is a lightweight, fast, and accessible dashboard to explore
                    live cryptocurrency market data. We focus on clarity, performance,
                    and an enjoyable developer experience.
                </p>
                <div className="hero-cta">
                    <Link to="/" className="btn">
                        Back to Dashboard
                    </Link>
                    <a
                        className="btn btn-ghost"
                        href="https://github.com/KQuiggins/modern_react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>
            </header>

            <section className="about-section">
                <h2>Our mission</h2>
                <p>
                    We want to make crypto market data approachable for developers and
                    traders alike. Crypto Dash presents up-to-date coin information in a
                    compact, responsive UI built with modern React and Vite. The app is
                    intentionally minimal so it's easy to extend as a learning project
                    or starting point for production dashboards.
                </p>
            </section>

            <section className="about-section about-features">
                <h2>Features</h2>
                <ul>
                    <li>Real-time coin listings with price, market cap, and 24h change</li>
                    <li>Filter, sort, and limit results for quick discovery</li>
                    <li>Responsive cards and accessible controls</li>
                    <li>Small, focused codebase suitable for learning and customization</li>
                </ul>
            </section>

            <section className="about-section about-tech">
                <h2>Tech stack</h2>
                <p>
                    Built with Vite, React, and a minimal dependency set to keep cold
                    starts fast. The project consumes a public coin API (configurable
                    via environment variable) and uses modern React patterns.
                </p>
                <div className="tech-list">
                    <span>Vite</span>
                    <span>React 19</span>
                    <span>Fetch API</span>
                    <span>ESLint</span>
                </div>
            </section>

            <section className="about-section team">
                <h2>Contributing & Contact</h2>
                <p>
                    Contributions, issues, and suggestions are welcome. Open a GitHub
                    issue or send a PR with improvements. Keep PRs focused and include a
                    short description of the change.
                </p>

                <div className="team-grid">
                    <article className="team-card">
                        <h3>KQuiggins</h3>
                        <p>Project maintainer & author — built this demo and learning repo.</p>
                        <a
                            href="https://github.com/KQuiggins"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </article>

                    <article className="team-card">
                        <h3>You</h3>
                        <p>
                            This project is a great place to experiment. Add new features,
                            improve accessibility, or wire in more detailed charts.
                        </p>
                    </article>
                </div>
            </section>

            <footer className="about-footnote">
                <small>
                    License: MIT — this repo is intended for learning. API usage is
                    subject to the provider's terms.
                </small>
            </footer>
        </main>
    );
};

export default AboutPage;