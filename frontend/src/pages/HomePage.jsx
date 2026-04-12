import { useEffect, useRef, useState } from "react";
import desktopVideo from "../assets/prueba.mp4";
import mobileVideo from "../assets/prueba-mobile.mp4";
import serviceImageOne from "../assets/pexels-marius-aholou-193600353-11432959.jpg";
import serviceImageTwo from "../assets/pexels-ardit-mbrati-216809103-18187614.jpg";
import runningVideo from "../assets/7876919-uhd_2160_4096_25fps.mp4";
import calisthenicsVideo from "../assets/15158575_2160_3840_25fps.mp4";
import hybridVideo from "../assets/4761416-uhd_2160_4096_25fps.mp4";
import aboutFinalImage from "../assets/aaron-brogden-9y4MaTz2Js0-unsplash.jpg";
import channelVideo from "../assets/4367639-hd_1920_1080_30fps.mp4";
import TextType from "../components/TextType.jsx";
import DecryptedText from "../components/DecryptedText.jsx"
import TrueFocus from "../components/TrueFocus.jsx"
import useRevealOnScroll from "../hooks/useRevealOnScroll"
import "./HomePage.css";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const videoRefs = useRef([]);
//cards/////////////////
const trainingCards = [
  {
    title: "Running",
    video: runningVideo,
  },
  {
    title: "Calistenia",
    video: calisthenicsVideo,
  },
  {
    title: "Hybrid",
    video: hybridVideo,
  },
];

const handleCardEnter = (index) => {
  const video = videoRefs.current[index];

  if (!video) return;

  video.play().catch(() => {});
};

const handleCardLeave = (index) => {
  const video = videoRefs.current[index];

  if (!video) return;

  video.pause();
};


useRevealOnScroll();

const sectionVideoRef = useRef(null);

useEffect(() => {
  const video = sectionVideoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);

return (
  <main className="home-page">
    {/* ----------------------- Hero ----------------- */}
    <section id="home" className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
      </video>
    
      <div className="hero-overlay"></div>
    
      <div className="hero-content">
        <TextType
          text="La disciplina construye lo que la motivación no puede sostener."
          delay={10}
          animateBy="letters"
          direction="top"
          className="hero-title"
          typingSpeed={75}
          pauseDuration={20000}
        />
      </div>
    </section> 
    {/* ----------------------- services ------------------ */}
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header reveal-on-scroll reveal-up">
          <h2 className="services-title">
            <DecryptedText
              text="Empieza hoy a construir el cambio"
              animateOn="view"
              clickMode="once"
              characters="01"
              speed={80}
              revealDirection="start"
              sequential
            />
          </h2>
        </div>
    
        <div className="services-grid">
          <article
            className="service-card reveal-on-scroll reveal-scale"
            style={{ backgroundImage: `url(${serviceImageOne})` }}
          >
            <div className="service-card-overlay"></div>
    
            <div className="service-card-content">
              <h3 className="service-card-title">Entrenamiento personal</h3>
    
              <p className="service-card-text">
                Un plan diseñado para ti, enfocado en resultados reales, técnica
                correcta y progreso constante.
              </p>
    
              <button className="service-card-button" type="button">
                Empecemos
              </button>
            </div>
          </article>
    
          <article
            className="service-card reveal-on-scroll reveal-scale reveal-delay-1"
            style={{ backgroundImage: `url(${serviceImageTwo})` }}
          >
            <div className="service-card-overlay"></div>
    
            <div className="service-card-content">
              <h3 className="service-card-title">Seguimiento y disciplina</h3>
    
              <p className="service-card-text">
                Acompañamiento pensado para ayudarte a mantener el enfoque,
                mejorar tu rendimiento y sostener hábitos que perduren.
              </p>
    
              <button className="service-card-button" type="button">
                Empecemos
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
    {/* ----------------------- cards ------------------ */}
<section id="info" className="training-section">
  <div className="container">
    <div className="training-header reveal-on-scroll reveal-up">
      <TrueFocus
        sentence="FOCUS LIFT GROWTH REPEAT"
        manualMode={false}
        blurAmount={9}
        borderColor="#6a1113"
        animationDuration={0.5}
        pauseBetweenAnimations={1.5}
      />
    </div>

    <div className="training-grid">
      {trainingCards.map((card, index) => (
        <article
          key={card.title}
          className={`training-card reveal-on-scroll reveal-scale ${
            index === 1 ? "reveal-delay-1" : ""
          } ${index === 2 ? "reveal-delay-2" : ""}`}
          onMouseEnter={() => handleCardEnter(index)}
          onMouseLeave={() => handleCardLeave(index)}

        >
          <video
            ref={(element) => {
              videoRefs.current[index] = element;
            }}
            className="training-video"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={card.video} type="video/mp4" />
          </video>

          <div className="training-card-overlay"></div>

          <div className="training-card-content">
            <h3 className="training-card-title">{card.title}</h3>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
    {/* ----------------------- social ------------------ */}

    {/* ----------------------- about me ------------------ */}
<section id="about" className="about-final-section">
  <div className="container">
    <div className="about-final-layout">
      <div className="about-final-image-wrapper reveal-on-scroll reveal-left">
        <img
          src={aboutFinalImage}
          alt="Roberto entrenando"
          className="about-final-image"
        />
      </div>

      <div className="about-final-content reveal-on-scroll reveal-up reveal-delay-1">
        <span className="about-final-kicker">About me</span>

        <h2 className="about-final-title">
          Entrenar bien no es solo moverse más, es construir una disciplina que
          transforme tu vida
        </h2>

        <p className="about-final-text">
          Soy Roberto, entrenador personal y apasionado por el rendimiento, la
          constancia y la evolución real. Mi enfoque no se basa en soluciones
          rápidas, sino en ayudarte a construir una versión más fuerte, más
          capaz y más disciplinada de ti mismo.
        </p>

        <p className="about-final-text">
          Cada entrenamiento tiene un propósito. Cada proceso necesita
          seguimiento. Y cada resultado sólido nace de un sistema que puedas
          sostener con el tiempo.
        </p>
      </div>
    </div>
  </div>
</section>
    {/* ----------------------- channel ------------------ */}
    <section className="channel-section">
      <div className="container">
        <div className="channel-header">
          <h2 className="channel-title">Suscríbete a mi canal</h2>
        </div>
        <div className="channel-video-shell">
          <div className="channel-video-wrapper reveal-on-scroll reveal-up">
  <video
    ref={sectionVideoRef}
    className="channel-video"
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src={channelVideo} type="video/mp4" />
  </video>
</div>
        </div>
      </div>
    </section>
  </main>
);
}

export default HomePage;