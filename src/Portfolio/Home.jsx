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
      <span style={{ animation: "blink 1s infinite", color: "#00d4ff" }}>|</span>
    </span>
  );
};

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  </div>
);

export default function Home({ isMobile, glitch, scrollTo }) {
  const avatarSize = isMobile ? "200px" : "300px";
  const orbitOffset1 = isMobile ? "80px" : "120px";
  const orbitOffset2 = isMobile ? "50px" : "85px";

  return (
    <section id="home" className="section" style={{ display: "flex", alignItems: "center", paddingTop: "60px", minHeight: "100vh" }}>
      <HexGrid />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", zIndex: 1, flexDirection: isMobile ? "column-reverse" : "row", textAlign: isMobile ? "center" : "left", paddingTop: isMobile ? "20px" : "0" }}>
        <div style={{ maxWidth: isMobile ? "100%" : "580px", animation: "fadeInUp 0.8s ease", flex: 1 }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px", justifyContent: isMobile ? "center" : "flex-start" }}>
            <div style={{ width: "40px", height: "1px", background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }} />
            CODE + ART + CRETIVITY
          </div>
          <h1 className={glitch ? "glitch-active" : ""} style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(30px,5vw,64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "12px", color: "#e8f4ff", animation: "glow-text 3s ease-in-out infinite" }}>
            CREATIVE<br /><span style={{ color: "#00d4ff" }}>DEVELOPER</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,2vw,20px)", marginBottom: "24px", fontFamily: "'Share Tech Mono', monospace", color: "#6a8a9a", minHeight: "28px" }}>
            <TypeWriter texts={["React Developer", "Digital Artist", "UI Craftsman", "Creative Coder", "Next.js Engineer"]} />
          </p>
          <p style={{ fontSize: "15px", color: "#5a7a8a", lineHeight: 1.8, maxWidth: "480px", margin: isMobile ? "0 auto 36px" : "0 0 36px" }}>
            Blending code and creativity to build immersive digital experiences. Passionate about where technology meets art.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
            <button onClick={() => scrollTo("services")}
              style={{ padding: "12px 28px", background: "transparent", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "11px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 20px #00d4ff44"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>VIEW SERVICES</button>
            <button onClick={() => scrollTo("contact")}
              style={{ padding: "12px 28px", background: "#00d4ff", border: "1px solid #00d4ff", color: "#030810", fontFamily: "'Orbitron', monospace", fontSize: "11px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", fontWeight: 700, transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 30px #00d4ff77"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>CONTACT</button>
          </div>
        </div>

        <div style={{ flexShrink: 0, width: avatarSize, height: avatarSize, animation: "float 6s ease-in-out infinite", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid #00d4ff22", boxShadow: "0 0 30px #00d4ff15, inset 0 0 30px #00d4ff08" }} />
          <div style={{ position: "absolute", inset: "10px", borderRadius: "50%", border: "1px solid #00d4ff44", animation: "spin-slow 20s linear infinite" }}>
            {[0, 90, 180, 270].map(angle => (
              <div key={angle} style={{ position: "absolute", width: "8px", height: "8px", borderRadius: "50%", background: "#00d4ff", top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(${orbitOffset1}) translateY(-50%)`, boxShadow: "0 0 10px #00d4ff,0 0 20px #00d4ff55" }} />
            ))}
          </div>
          <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", border: "1px dashed #bf00ff33", animation: "spin-rev 15s linear infinite" }}>
            {[45, 135, 225, 315].map(angle => (
              <div key={angle} style={{ position: "absolute", width: "5px", height: "5px", borderRadius: "50%", background: "#bf00ff", top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(${orbitOffset2}) translateY(-50%)`, boxShadow: "0 0 8px #bf00ff" }} />
            ))}
          </div>
          <div style={{ position: "absolute", inset: "70px", borderRadius: "50%", border: "2px solid #00d4ff66", boxShadow: "0 0 40px #00d4ff33, inset 0 0 20px #00d4ff08", overflow: "hidden", background: "linear-gradient(135deg,#0a1520,#051020)" }}>
            <img src={myImg} alt="Harshal" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.95) saturate(1.1)" }} />
          </div>
          <div style={{ position: "absolute", inset: "60px", borderRadius: "50%", border: "2px solid #00d4ff", animation: "pulse-ring 3s ease-out infinite", opacity: 0 }} />
        </div>
      </div>
    </section>
  );
}