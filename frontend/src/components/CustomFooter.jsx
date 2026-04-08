import "./CustomFooter.css";
import CircularText from "./CircularText";
import DotGrid from "./DotGrid";

function CustomFooter() {
  return (
    <footer className="custom-footer">
      <div className="footer-dotgrid-bg" aria-hidden="true">
        <DotGrid
          dotSize={6}
          gap={44}
          baseColor="#271E37"
          activeColor="#8f0000"
          proximity={90}
          shockRadius={160}
          shockStrength={0.45}
          resistance={120}
          returnDuration={1.2}
        />
      </div>

      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-column footer-brand-column">
            <h2 className="footer-brand">Roberto Caldas</h2>

            <ul className="footer-link-list">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-center-spacer"></div>

          <div className="footer-column footer-widget-column">
            <div className="footer-right-stack">
              <CircularText
                text="ANGELO*BUDA*DEVELOPER*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />

              <div className="footer-contact-card">
                <a
                  href="https://www.linkedin.com/in/TU-USUARIO"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link"
                >
                  LINKEDIN
                </a>

                <a
                  href="mailto:tuemail@gmail.com"
                  className="footer-contact-link"
                >
                  GMAIL
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <ul className="footer-link-list footer-legal-list">
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#cookies">Cookies</a>
            </li>
            <li>
              <a href="/authors">Authors</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Roberto Caldas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default CustomFooter;