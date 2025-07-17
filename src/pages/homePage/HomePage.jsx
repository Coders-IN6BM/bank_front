import * as React from "react";
import { Navbar } from "../../components/nav/index";
import SplitText from "./SplitText.jsx";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export const HomePage = () => (
  <div style={{ width: "100vw", minHeight: "100vh", background: "#181C29" }}>
    <Navbar />
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: "600px",
        maxHeight: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
        src="https://res.cloudinary.com/deg8jxjsv/video/upload/v1752436035/Pivot-video2_pbyugu.mp4"
      />
       <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          left: 0,
          top: 0,
          background: "rgba(14, 18, 42, 0.62)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100vw",
          maxWidth: 1100,
          margin: "10px",
          padding: "40px 16px 64px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <SplitText
          text="Tu Banco Digital del Futuro"
          className="banking-title"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p
          style={{
            fontSize: "2rem",
            color: "#fff",
            textAlign: "center",
            marginBottom: 36,
            fontWeight: 400,
            textShadow: "10px 2px 16px #000b",
            maxWidth: 800
          }}
        >
          Gestiona tus finanzas con tecnología de vanguardia y seguridad total.
        </p>
        <a
          href="/auth/login"
          style={{
            display: "inline-block",
            padding: "0.9em 2.7em",
            background: "#27AE60",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.3rem",
            letterSpacing: ".05em",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.09)",
            textDecoration: "none",
            transition: "background 0.2s, transform 0.15s",
            cursor: "pointer",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#1e8449")}
          onMouseOut={e => (e.currentTarget.style.background = "#27AE60")}
        >
          Iniciar Sesión
        </a>
      </div>
    </section>
    
    {/* Segunda sección con video de fondo */}
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: "600px",
        maxHeight: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
        src="https://res.cloudinary.com/deg8jxjsv/video/upload/v1752442653/Pivot-video1_hlrumz.mp4"
      />
    </section>
    <section
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #181C29 50%, #0A2540 100%)",
        color: "#F8F9FA",
        padding: "80px 20px",
        maxWidth: "100vw",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Círculos de fondo decorativos */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(45, 156, 219, 0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-150px",
        left: "-150px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(39, 174, 96, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      
      {/* Contenedor principal */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        {/* Título principal con efecto especial */}
        <div style={{
          textAlign: "center",
          marginBottom: "60px"
        }}>
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            background: "linear-gradient(45deg, #F2C94C 0%, #27AE60 50%, #2D9CDB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px",
            letterSpacing: "2px",
            textShadow: "0 4px 20px rgba(242, 201, 76, 0.3)"
          }}>
            PIIVOT BANK
          </h2>
          <div style={{
            width: "120px",
            height: "4px",
            background: "linear-gradient(90deg, #F2C94C, #27AE60)",
            margin: "0 auto",
            borderRadius: "2px"
          }} />
        </div>

        {/* Grid de características */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          marginBottom: "50px"
        }}>
          {/* Card 1 - Glassmorphism */}
          <div style={{
            background: "rgba(45, 156, 219, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(242, 201, 76, 0.2)",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}>
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle, rgba(242, 201, 76, 0.1) 0%, transparent 50%)",
              opacity: "0.5",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>🚀</div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#F2C94C",
                marginBottom: "15px"
              }}>Transferencias Instantáneas</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#F8F9FA",
                opacity: "0.9"
              }}>
                Envía dinero en segundos a cualquier parte del mundo con nuestra tecnología blockchain avanzada
              </p>
            </div>
          </div>

          {/* Card 2 - Glassmorphism */}
          <div style={{
            background: "rgba(39, 174, 96, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(45, 156, 219, 0.2)",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}>
            <div style={{
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle, rgba(39, 174, 96, 0.1) 0%, transparent 50%)",
              opacity: "0.5",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>🛡️</div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#27AE60",
                marginBottom: "15px"
              }}>Seguridad Cuántica</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#F8F9FA",
                opacity: "0.9"
              }}>
                Protección de nivel militar con encriptación cuántica y autenticación biométrica multicapa
              </p>
            </div>
          </div>

          {/* Card 3 - Glassmorphism */}
          <div style={{
            background: "rgba(10, 37, 64, 0.3)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(39, 174, 96, 0.2)",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}>
            <div style={{
              position: "absolute",
              bottom: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle, rgba(45, 156, 219, 0.1) 0%, transparent 50%)",
              opacity: "0.5",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>🤖</div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#2D9CDB",
                marginBottom: "15px"
              }}>IA Financiera</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#F8F9FA",
                opacity: "0.9"
              }}>
                Asistente inteligente que analiza tus patrones de gasto y te ayuda a optimizar tus finanzas
              </p>
            </div>
          </div>
        </div>

        {/* Sección estadísticas impactantes */}
        <div style={{
          background: "linear-gradient(45deg, rgba(242, 201, 76, 0.1), rgba(45, 156, 219, 0.1))",
          backdropFilter: "blur(30px)",
          border: "2px solid rgba(242, 201, 76, 0.3)",
          borderRadius: "25px",
          padding: "50px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "linear-gradient(135deg, rgba(39, 174, 96, 0.05), rgba(45, 156, 219, 0.05))",
            zIndex: 0
          }} />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#F2C94C",
              marginBottom: "30px",
              textShadow: "0 2px 10px rgba(242, 201, 76, 0.3)"
            }}>
              El Futuro es Ahora
            </h3>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
              marginTop: "40px"
            }}>
              <div>
                <div style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  color: "#27AE60",
                  marginBottom: "10px"
                }}>99.9%</div>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#F8F9FA",
                  opacity: "0.8"
                }}>Uptime Garantizado</p>
              </div>
              
              <div>
                <div style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  color: "#2D9CDB",
                  marginBottom: "10px"
                }}>0.1s</div>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#F8F9FA",
                  opacity: "0.8"
                }}>Tiempo de Respuesta</p>
              </div>
              
              <div>
                <div style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  color: "#F2C94C",
                  marginBottom: "10px"
                }}>24/7</div>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#F8F9FA",
                  opacity: "0.8"
                }}>Soporte Experto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);