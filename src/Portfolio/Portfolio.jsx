import { useState, useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Artwork from "./Artwork";
import Contact from "./Contact";

const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
};

const ScanLine = () => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", animation: "scan 4s linear infinite", zIndex: 9999, pointerEvents: "none", opacity: 0.4 }} />
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Portfolio() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sections = ["home", "about", "skills", "services", "artwork", "contact"];
  const navLabels = { home: "HOME", about: "ABOUT", skills: "SKILLS", services: "SERVICES", artwork: "ARTWORK", contact: "CONTACT" };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    sections.forEach(s => { const el = document.getElementById(s); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  return (
    <div style={{ background: "#030810", minHeight: "100vh", color: "#c8d8e8", fontFamily: "'Segoe UI', sans-serif", overflowX: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scan { 0%{top:-2px} 100%{top:100vh} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.95);opacity:1} 100%{transform:scale(1.3);opacity:0} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        @keyframes glow-text { 0%,100%{text-shadow:0 0 20px #00d4ff55} 50%{text-shadow:0 0 40px #00d4ffaa,0 0 80px #00d4ff55} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes neon-pulse { 0%,100%{filter:drop-shadow(0 0 3px currentColor)} 50%{filter:drop-shadow(0 0 8px currentColor)} }
        @keyframes tag-in { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes expandIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; background:#030810; }
        ::-webkit-scrollbar-thumb { background:#00d4ff33; border-radius:2px; }
        .section { min-height:100vh; padding:90px 5% 60px; position:relative; overflow:hidden; }
        .glitch-active { animation:glow-text 0.2s ease; filter:hue-rotate(30deg); }
        .skill-tag { transition:all 0.25s ease; animation:tag-in 0.4s ease both; cursor:default; }
        .skill-tag:hover { transform:translateY(-2px) scale(1.06); }
        .hobby-card { transition:all 0.3s ease; cursor:default; }
        .hobby-card:hover { transform:translateY(-4px); }
        .social-btn { transition:all 0.3s ease; }
        .social-btn:hover { transform:translateY(-3px) scale(1.08); }
        .nav-link { transition:all 0.3s ease; }
        .nav-link:hover { color:#00d4ff !important; }
        #mobile-menu { animation: slideDown 0.25s ease; }
        .art-card-hover:hover { transform: translateY(-6px); }
        .art-card-hover { transition: transform 0.3s ease; }
      `}</style>

      <ScanLine />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(180deg,#030810f0,#030810cc)", backdropFilter: "blur(12px)", borderBottom: "1px solid #00d4ff11" }}>
        <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "16px", color: "#00d4ff", letterSpacing: "3px", flexShrink: 0 }}>HARSHAL.DEV</div>
        <div style={{ display: isMobile ? "none" : "flex", gap: "4px", alignItems: "center" }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: activeSection === s ? "20px" : "6px", height: "2px", background: activeSection === s ? "#00d4ff" : "#334", transition: "all 0.3s", boxShadow: activeSection === s ? "0 0 8px #00d4ff" : "none" }} />
              <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#556", fontFamily: "'Share Tech Mono', monospace", transition: "color 0.3s" }}>{navLabels[s]}</span>
            </button>
          ))}
        </div>
        <button ref={btnRef} onClick={() => setMenuOpen(o => !o)} style={{ display: isMobile ? "flex" : "none", alignItems: "center", justifyContent: "center", background: "none", border: "1px solid #00d4ff44", borderRadius: "6px", padding: "7px 9px", cursor: "pointer", color: "#00d4ff", lineHeight: 0 }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && isMobile && (
        <div ref={menuRef} id="mobile-menu" style={{ position: "fixed", top: "60px", left: 0, right: 0, zIndex: 999, background: "#030d18f8", backdropFilter: "blur(16px)", borderBottom: "1px solid #00d4ff22", padding: "8px 5% 16px" }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{ display: "flex", alignItems: "center", gap: "14px", width: "100%", background: "none", border: "none", borderBottom: "1px solid #00d4ff0d", cursor: "pointer", padding: "13px 0" }}>
              <div style={{ width: "20px", height: "1px", background: activeSection === s ? "#00d4ff" : "#334", boxShadow: activeSection === s ? "0 0 6px #00d4ff" : "none", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#7a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>{navLabels[s]}</span>
            </button>
          ))}
        </div>
      )}

      {/* SECTIONS */}
      <Home isMobile={isMobile} glitch={glitch} scrollTo={scrollTo} />
      <About isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Services isMobile={isMobile} scrollTo={scrollTo} />
      <Artwork isMobile={isMobile} />
      <Contact />

      <footer style={{ textAlign: "center", padding: "28px 5%", borderTop: "1px solid #00d4ff11", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#2a4a5a", letterSpacing: "2px" }}>
        © 2026 &nbsp;|&nbsp; HARSHAL.DEV &nbsp;|&nbsp; BUILT WITH REACT
      </footer>
    </div>
  );
}

