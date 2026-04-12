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
                <a href="https://www.instagram.com/robertocaldas_music/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@robertocaldas_music" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@robertocaldaslanza" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-center-spacer"></div>

          <div className="footer-column footer-widget-column">
            <div className="footer-right-stack">
              <CircularText
                text="ANGELO * BUDA * DEVELOPED * "
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />

              <div className="footer-contact-card">
                <a
                  href="https://www.linkedin.com/in/angelo-buda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  LINKEDIN
                </a>

                <a
                  href="mailto:budaangelo@gmail.com"
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