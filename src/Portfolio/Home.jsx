import { useState, useEffect } from "react";
import myImg from "./Images/myimg.jpeg";

const TypeWriter = ({ texts, speed = 60 }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx % texts.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIdx(c => c + 1);
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setIdx(i => i + 1); setCharIdx(0); }
        else setCharIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed]);

  return (
    <span style={{ color: "#00d4ff" }}>
      {displayed}
      <span style={{ animation: "homeBlink 1s infinite", color: "#00d4ff" }}>|</span>
    </span>
  );
};

// Floating particles for Home section
function HomeParticles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    color: ["#00d4ff", "#bf00ff", "#ff6b35", "#00ff88", "#f7df1e"][i % 5],
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: Math.random() * 15 + 10,
    delay: Math.random() * -20,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}55`,
            animation: `homeFloat${p.id % 3} ${p.dur}s ${p.delay}s infinite ease-in-out`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.05 }}>
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  </div>
);

// Scan line effect
function HomeScanLine() {
  return (
    <div style={{
      position: "absolute",
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, #00d4ff66, #00d4ffcc, #00d4ff66, transparent)",
      boxShadow: "0 0 20px #00d4ff",
      animation: "homeScanDown 10s linear infinite",
      pointerEvents: "none",
      zIndex: 1,
    }} />
  );
}

export default function Home({ isMobile, glitch, scrollTo }) {
  const avatarSize = isMobile ? "220px" : "320px";
  const orbitOffset1 = isMobile ? "85px" : "130px";
  const orbitOffset2 = isMobile ? "55px" : "95px";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverRing, setHoverRing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById("home-section")?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="section" 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        paddingTop: "60px", 
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HexGrid />
      <HomeParticles />
      <HomeScanLine />
      
      {/* Animated gradient background */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, #00d4ff08, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
      
      {/* Mouse-following glow */}
      <div style={{
        position: "absolute",
        left: `${mousePos.x}%`,
        top: `${mousePos.y}%`,
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, #00d4ff15, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0,
        transition: "left 0.1s ease, top 0.1s ease",
      }} />

      {/* Scoped styles */}
      <style>{`
        @keyframes homeBlink { 
          0%,100%{opacity:1} 
          50%{opacity:0} 
        }
        @keyframes homeFloat0 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.6} 
          50%{transform:translate(35px,-30px) scale(1.5);opacity:.3} 
        }
        @keyframes homeFloat1 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.5} 
          50%{transform:translate(-30px,35px) scale(0.7);opacity:.8} 
        }
        @keyframes homeFloat2 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.5} 
          33%{transform:translate(25px,25px) scale(1.3);opacity:.7} 
          66%{transform:translate(-20px,-35px) scale(0.7);opacity:.3} 
        }
        @keyframes homeScanDown { 
          0%{top:-2px;opacity:0} 
          5%{opacity:1} 
          95%{opacity:1} 
          100%{top:100%;opacity:0} 
        }
        @keyframes homeFloat { 
          0%,100%{transform:translateY(0px)} 
          50%{transform:translateY(-20px)} 
        }
        @keyframes homeSpinSlow { 
          0%{transform:rotate(0deg)} 
          100%{transform:rotate(360deg)} 
        }
        @keyframes homeSpinRev { 
          0%{transform:rotate(0deg)} 
          100%{transform:rotate(-360deg)} 
        }
        @keyframes homePulseRing { 
          0%{transform:scale(0.95);opacity:0.7} 
          50%{transform:scale(1.05);opacity:0.3} 
          100%{transform:scale(0.95);opacity:0.7} 
        }
        @keyframes homeGlowText { 
          0%,100%{text-shadow:0 0 20px #00d4ff55} 
          50%{text-shadow:0 0 40px #00d4ffaa,0 0 60px #bf00ff55} 
        }
        @keyframes homeFadeInUp { 
          from{opacity:0;transform:translateY(40px)} 
          to{opacity:1;transform:translateY(0)} 
        }
        @keyframes homeTitleGlow { 
          0%,100%{filter:drop-shadow(0 0 30px #00d4ff55)} 
          50%{filter:drop-shadow(0 0 60px #00d4ffaa,0 0 90px #bf00ff66)} 
        }
      `}</style>

      <div style={{ 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        gap: "50px", 
        zIndex: 2, 
        flexDirection: isMobile ? "column-reverse" : "row", 
        textAlign: isMobile ? "center" : "left", 
        paddingTop: isMobile ? "20px" : "0" 
      }}>
        <div style={{ 
          maxWidth: isMobile ? "100%" : "580px", 
          animation: "homeFadeInUp 0.8s ease", 
          flex: 1,
          position: "relative",
        }}>
          <div style={{ 
            fontSize: "11px", 
            letterSpacing: "5px", 
            color: "#00d4ff", 
            fontFamily: "'Share Tech Mono', monospace", 
            marginBottom: "20px", 
            display: "flex", 
            alignItems: "center", 
            gap: "12px", 
            justifyContent: isMobile ? "center" : "flex-start",
            textTransform: "uppercase",
          }}>
            <div style={{ 
              width: "45px", 
              height: "2px", 
              background: "linear-gradient(90deg, #00d4ff, #bf00ff)", 
              boxShadow: "0 0 8px #00d4ff" 
            }} />
            CODE + ART + CREATIVITY
          </div>
          
          <h1 
            className={glitch ? "glitch-active" : ""} 
            style={{ 
              fontFamily: "'Orbitron', monospace", 
              fontSize: "clamp(32px,5vw,68px)", 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: "16px", 
              color: "#e8f4ff",
              animation: "homeTitleGlow 4s ease-in-out infinite",
              letterSpacing: "-1px",
            }}>
            CREATIVE<br />
            <span style={{ 
              color: "#00d4ff",
              background: "linear-gradient(135deg, #00d4ff, #bf00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "homeGlowText 3s ease-in-out infinite",
            }}>DEVELOPER</span>
          </h1>
          
          <div style={{ 
            fontSize: "clamp(16px,2vw,22px)", 
            marginBottom: "28px", 
            fontFamily: "'Share Tech Mono', monospace", 
            minHeight: "32px",
            background: "linear-gradient(90deg, #00d4ff22, transparent)",
            padding: "12px 20px",
            borderRadius: "8px",
            display: "inline-block",
            width: isMobile ? "100%" : "auto",
            textAlign: isMobile ? "center" : "left",
          }}>
            <TypeWriter texts={["React Developer", "Digital Artist", "UI Craftsman", "Creative Coder", "Next.js Engineer"]} />
          </div>
          
          <p style={{ 
            fontSize: "16px", 
            color: "#7a9aaa", 
            lineHeight: 1.85, 
            maxWidth: "500px", 
            margin: isMobile ? "0 auto 40px" : "0 0 40px",
            letterSpacing: "0.3px",
          }}>
            Blending code and creativity to build immersive digital experiences. 
            Passionate about where technology meets art. 
            <span style={{ color: "#00d4ff", display: "inline-block", marginLeft: "8px" }}>✦</span>
          </p>
          
          <div style={{ 
            display: "flex", 
            gap: "20px", 
            flexWrap: "wrap", 
            justifyContent: isMobile ? "center" : "flex-start",
            position: "relative",
          }}>
            <button 
              onClick={() => scrollTo("services")}
              style={{ 
                padding: "14px 32px", 
                background: "transparent", 
                border: "1.5px solid #00d4ff", 
                color: "#00d4ff", 
                fontFamily: "'Orbitron', monospace", 
                fontSize: "11px", 
                letterSpacing: "3px", 
                cursor: "pointer", 
                borderRadius: "8px", 
                textTransform: "uppercase", 
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = "#00d4ff22"; 
                e.currentTarget.style.boxShadow = "0 0 30px #00d4ff66, inset 0 0 20px #00d4ff22"; 
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = "transparent"; 
                e.currentTarget.style.boxShadow = "none"; 
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              VIEW SERVICES
            </button>
            
            <button 
              onClick={() => scrollTo("contact")}
              style={{ 
                padding: "14px 32px", 
                background: "linear-gradient(135deg, #00d4ff, #00a0cc)", 
                border: "none", 
                color: "#030810", 
                fontFamily: "'Orbitron', monospace", 
                fontSize: "11px", 
                letterSpacing: "3px", 
                cursor: "pointer", 
                borderRadius: "8px", 
                textTransform: "uppercase", 
                fontWeight: 700, 
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.boxShadow = "0 0 40px #00d4ffaa, 0 5px 20px rgba(0,0,0,0.3)"; 
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "linear-gradient(135deg, #00d4ff, #00b8e6)";
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.boxShadow = "none"; 
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "linear-gradient(135deg, #00d4ff, #00a0cc)";
              }}>
              CONTACT ME
            </button>
          </div>

          {/* Social/tech badges */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
            justifyContent: isMobile ? "center" : "flex-start",
            flexWrap: "wrap",
          }}>
          </div>
        </div>

        <div 
          onMouseEnter={() => setHoverRing(true)}
          onMouseLeave={() => setHoverRing(false)}
          style={{ 
            flexShrink: 0, 
            width: avatarSize, 
            height: avatarSize, 
            animation: "homeFloat 6s ease-in-out infinite", 
            position: "relative",
            cursor: "pointer",
          }}>
          {/* Outer ring */}
          <div style={{ 
            position: "absolute", 
            inset: "-15px", 
            borderRadius: "50%", 
            border: `2px solid ${hoverRing ? "#00d4ffaa" : "#00d4ff22"}`, 
            boxShadow: hoverRing ? "0 0 60px #00d4ff55, inset 0 0 40px #00d4ff22" : "0 0 30px #00d4ff15, inset 0 0 30px #00d4ff08",
            transition: "all 0.4s ease",
            opacity: hoverRing ? 1 : 0.6,
          }} />
          
          {/* Orbiting dots - outer ring */}
          <div style={{ 
            position: "absolute", 
            inset: "0px", 
            borderRadius: "50%", 
            animation: "homeSpinSlow 20s linear infinite" 
          }}>
            {[0, 60, 120, 180, 240, 300].map(angle => (
              <div key={angle} style={{ 
                position: "absolute", 
                width: "10px", 
                height: "10px", 
                borderRadius: "50%", 
                background: `linear-gradient(135deg, #00d4ff, #bf00ff)`,
                top: "50%", 
                left: "50%", 
                transform: `rotate(${angle}deg) translateX(${orbitOffset1}) translateY(-50%)`, 
                boxShadow: "0 0 15px #00d4ff,0 0 25px #bf00ff88",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
          
          {/* Orbiting dots - inner ring */}
          <div style={{ 
            position: "absolute", 
            inset: "30px", 
            borderRadius: "50%", 
            animation: "homeSpinRev 15s linear infinite" 
          }}>
            {[45, 135, 225, 315].map(angle => (
              <div key={angle} style={{ 
                position: "absolute", 
                width: "6px", 
                height: "6px", 
                borderRadius: "50%", 
                background: "#bf00ff", 
                top: "50%", 
                left: "50%", 
                transform: `rotate(${angle}deg) translateX(${orbitOffset2}) translateY(-50%)`, 
                boxShadow: "0 0 12px #bf00ff, 0 0 20px #bf00ff88",
              }} />
            ))}
          </div>
          
          {/* Glowing ring */}
          <div style={{ 
            position: "absolute", 
            inset: "-5px", 
            borderRadius: "50%", 
            border: `1px solid ${hoverRing ? "#00d4ff88" : "#00d4ff33"}`,
            boxShadow: hoverRing ? "0 0 40px #00d4ff66" : "none",
            transition: "all 0.4s ease",
          }} />
          
          {/* Image container */}
          <div style={{ 
            position: "absolute", 
            inset: "0", 
            borderRadius: "50%", 
            overflow: "hidden", 
            background: "linear-gradient(135deg, #0a1520, #051020)",
            boxShadow: `0 0 50px ${hoverRing ? "#00d4ff66" : "#00d4ff33"}, inset 0 0 30px #00d4ff08`,
            transition: "box-shadow 0.4s ease",
          }}>
            <img 
              src={myImg} 
              alt="Harshal" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                objectPosition: "center top", 
                filter: hoverRing ? "brightness(1) saturate(1.2) contrast(1.05)" : "brightness(0.95) saturate(1.1)",
                transition: "all 0.4s ease",
                transform: hoverRing ? "scale(1.02)" : "scale(1)",
              }} 
            />
            
            {/* Overlay glow */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at center, ${hoverRing ? "#00d4ff22" : "transparent"}, transparent 70%)`,
              transition: "background 0.4s ease",
            }} />
          </div>
          
          {/* Pulse ring animation */}
          <div style={{ 
            position: "absolute", 
            inset: "-10px", 
            borderRadius: "50%", 
            border: "2px solid #00d4ff", 
            animation: "homePulseRing 3s ease-out infinite", 
            opacity: 0,
            pointerEvents: "none",
          }} />
          
          {/* Corner accent dots */}
          <div style={{
            position: "absolute",
            top: "-20px",
            right: "-10px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#ff6b35",
            boxShadow: "0 0 15px #ff6b35",
            animation: "homePulseRing 2s infinite",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-15px",
            left: "-5px",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#bf00ff",
            boxShadow: "0 0 12px #bf00ff",
            animation: "homePulseRing 2.5s infinite 0.5s",
          }} />
        </div>
      </div>
    </section>
  );
}

