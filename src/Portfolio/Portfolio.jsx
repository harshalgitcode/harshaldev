import { useState, useEffect, useRef } from "react";
import myImg from "./Images/myimg.jpeg";

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

const skillSections = [
  {
    label: "LANGUAGES, FRAMEWORKS & LIBRARIES",
    color: "#00d4ff",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ES6+", "React JS", "Next.js", "Redux Toolkit", "React Query", "Formik"],
  },
  {
    label: "UI TOOLS & SPECIAL ABILITIES",
    color: "#00ff88",
    items: ["Bootstrap", "Material UI", "GitHub", "Postman", "VS Code", "UI/UX Intuition", "Performance Optimization", "Digital Art Creation", "Creative Problem Solving", "Component Architecture"],
  },
];

const NeonPaletteIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="1.5" fill="none" filter={`drop-shadow(0 0 4px ${color})`} />
    <circle cx="11" cy="14" r="3" fill={color} opacity="0.9" />
    <circle cx="18" cy="10" r="3" fill={color} opacity="0.9" />
    <circle cx="25" cy="14" r="3" fill={color} opacity="0.9" />
    <circle cx="24" cy="22" r="3" fill={color} opacity="0.9" />
    <circle cx="18" cy="22" r="4" fill={color} opacity="0.4" />
  </svg>
);

const NeonCodeIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="6" width="30" height="24" rx="3" stroke={color} strokeWidth="1.5" fill="none" filter={`drop-shadow(0 0 4px ${color})`} />
    <line x1="3" y1="12" x2="33" y2="12" stroke={color} strokeWidth="1" opacity="0.5" />
    <polyline points="10,18 14,22 10,26" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <line x1="17" y1="26" x2="24" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const NeonSparkIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <line x1="18" y1="4" x2="18" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" filter={`drop-shadow(0 0 3px ${color})`} />
    <line x1="18" y1="24" x2="18" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="18" x2="12" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="18" x2="32" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="18" r="4" fill={color} opacity="0.9" filter={`drop-shadow(0 0 6px ${color})`} />
  </svg>
);

const NeonGlobeIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke={color} strokeWidth="1.5" fill="none" filter={`drop-shadow(0 0 4px ${color})`} />
    <ellipse cx="18" cy="18" rx="6" ry="13" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
    <line x1="5" y1="18" x2="31" y2="18" stroke={color} strokeWidth="1" opacity="0.6" />
    <line x1="8" y1="12" x2="28" y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
    <line x1="8" y1="24" x2="28" y2="24" stroke={color} strokeWidth="1" opacity="0.4" />
  </svg>
);

const hobbies = [
  { Icon: NeonPaletteIcon, color: "#bf00ff", label: "Digital Art", desc: "Creating worlds pixel by pixel" },
  { Icon: NeonCodeIcon, color: "#00d4ff", label: "Coding", desc: "Building experiences from scratch" },
  { Icon: NeonSparkIcon, color: "#f7df1e", label: "Creativity", desc: "Designing the impossible" },
  { Icon: NeonGlobeIcon, color: "#00ff88", label: "Web Design", desc: "Crafting beautiful interfaces" },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <line x1="8" y1="11" x2="8" y2="17" />
    <line x1="8" y1="8" x2="8.01" y2="8" />
    <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
    <line x1="12" y1="11" x2="12" y2="17" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polyline points="2,4 12,14 22,4" />
  </svg>
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

const socialLinks = [
  { Icon: InstagramIcon, label: "Instagram", href: "#", color: "#bf00ff" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#", color: "#00d4ff" },
  { Icon: EmailIcon, label: "Email", href: "mailto:#", color: "#00ff88" },
];

const projects = [
  { name: "NeoUI Dashboard", tech: "React + Redux Toolkit", desc: "Real-time analytics dashboard with glassmorphism design", color: "#00d4ff" },
  { name: "ArtVault", tech: "Next.js + TypeScript", desc: "Digital art gallery with immersive viewing experience", color: "#bf00ff" },
  { name: "FormForge", tech: "Formik + Material UI", desc: "Dynamic form builder with drag-and-drop capabilities", color: "#ff6b35" },
  { name: "QueryHub", tech: "React Query + Bootstrap", desc: "Data fetching hub with smart caching visualization", color: "#00ff88" },
];

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

const ScanLine = () => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", animation: "scan 4s linear infinite", zIndex: 9999, pointerEvents: "none", opacity: 0.4 }} />
);

const GlowCard = ({ children, color = "#00d4ff", style = {} }) => (
  <div style={{ border: `1px solid ${color}22`, borderRadius: "12px", padding: "24px", position: "relative", background: `linear-gradient(135deg, ${color}08, transparent)`, boxShadow: `0 0 20px ${color}15, inset 0 0 20px ${color}05`, transition: "all 0.3s ease", ...style }}>
    <div style={{ position: "absolute", top: -1, left: "20px", right: "20px", height: "1px", background: `linear-gradient(90deg, transparent, ${color}88, transparent)` }} />
    {children}
  </div>
);

function SectionHeader({ title, subtitle, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "3px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px" }}>
        {!center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
        {subtitle.toUpperCase()}
        {center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
      </div>
      <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(24px, 5vw, 48px)", fontWeight: 900, color: "#e8f4ff", letterSpacing: "2px", textShadow: "0 0 40px #00d4ff33" }}>{title}</h2>
      <div style={{ width: center ? "120px" : "60px", height: "2px", background: "linear-gradient(90deg, #00d4ff, transparent)", margin: center ? "16px auto 0" : "16px 0 0", boxShadow: "0 0 10px #00d4ff" }} />
    </div>
  );
}

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

  const sections = ["home", "about", "skills", "projects", "contact"];

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

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const avatarSize = isMobile ? "200px" : "300px";
  const orbitOffset1 = isMobile ? "80px" : "120px";
  const orbitOffset2 = isMobile ? "50px" : "85px";

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
        .project-card { transition:all 0.3s ease; }
        .project-card:hover { transform:translateY(-4px); }
        #mobile-menu { animation: slideDown 0.25s ease; }
      `}</style>

      <ScanLine />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(180deg,#030810f0,#030810cc)", backdropFilter: "blur(12px)", borderBottom: "1px solid #00d4ff11" }}>
        <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "16px", color: "#00d4ff", letterSpacing: "3px", flexShrink: 0 }}>HARSHAL.DEV</div>

        {/* Desktop nav */}
        <div style={{ display: isMobile ? "none" : "flex", gap: "4px", alignItems: "center" }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: activeSection === s ? "20px" : "6px", height: "2px", background: activeSection === s ? "#00d4ff" : "#334", transition: "all 0.3s", boxShadow: activeSection === s ? "0 0 8px #00d4ff" : "none" }} />
              <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#556", fontFamily: "'Share Tech Mono', monospace", transition: "color 0.3s" }}>{s}</span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          id="menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: isMobile ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "1px solid #00d4ff44",
            borderRadius: "6px",
            padding: "7px 9px",
            cursor: "pointer",
            color: "#00d4ff",
            lineHeight: 0,
          }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && isMobile && (
        <div
          ref={menuRef}
          id="mobile-menu"
          style={{ position: "fixed", top: "60px", left: 0, right: 0, zIndex: 999, background: "#030d18f8", backdropFilter: "blur(16px)", borderBottom: "1px solid #00d4ff22", padding: "8px 5% 16px" }}
        >
          {sections.map(s => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{ display: "flex", alignItems: "center", gap: "14px", width: "100%", background: "none", border: "none", borderBottom: "1px solid #00d4ff0d", cursor: "pointer", padding: "13px 0" }}
            >
              <div style={{ width: "20px", height: "1px", background: activeSection === s ? "#00d4ff" : "#334", boxShadow: activeSection === s ? "0 0 6px #00d4ff" : "none", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#7a9aaa", fontFamily: "'Share Tech Mono', monospace" }}>{s}</span>
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="section" style={{ display: "flex", alignItems: "center", paddingTop: "60px", minHeight: "100vh" }}>
        <HexGrid />
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", zIndex: 1, flexDirection: isMobile ? "column-reverse" : "row", textAlign: isMobile ? "center" : "left", paddingTop: isMobile ? "20px" : "0" }}>

          {/* Text */}
          <div style={{ maxWidth: isMobile ? "100%" : "580px", animation: "fadeInUp 0.8s ease", flex: 1 }}>
            <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px", justifyContent: isMobile ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "1px", background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }} />
              INITIALIZING PORTFOLIO INTERFACE
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
              <button onClick={() => scrollTo("projects")} style={{ padding: "12px 28px", background: "transparent", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "11px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 20px #00d4ff44"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>VIEW WORK</button>
              <button onClick={() => scrollTo("contact")} style={{ padding: "12px 28px", background: "#00d4ff", border: "1px solid #00d4ff", color: "#030810", fontFamily: "'Orbitron', monospace", fontSize: "11px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", fontWeight: 700, transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 30px #00d4ff77"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>CONTACT</button>
            </div>
          </div>

          {/* Avatar */}
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

      {/* ABOUT */}
      <section id="about" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="ABOUT.ME" subtitle="Personal Profile" />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "28px", marginTop: "50px" }}>
            <GlowCard>
              <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "13px", color: "#00d4ff", letterSpacing: "2px", marginBottom: "16px" }}>SYSTEM PROFILE</h3>
              <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 1.9, marginBottom: "14px" }}>
                Hi, I'm <span style={{ color: "#00d4ff" }}>Harshal</span> — a frontend developer with a deep passion for creating interfaces that feel alive. I believe code is just another form of art.
              </p>
              <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 1.9 }}>
                When I'm not pushing pixels, I'm creating digital art, exploring generative design, and finding the intersection of technology and human creativity.
              </p>
              <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid #00d4ff15" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff66", fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px" }}>CONNECT WITH ME</div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {socialLinks.map(({ Icon, label, href, color }) => (
                    <a key={label} href={href} title={label} className="social-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "10px", border: `1px solid ${color}44`, color, background: `${color}0d`, textDecoration: "none", boxShadow: `0 0 10px ${color}22` }}>
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </GlowCard>

            <GlowCard color="#bf00ff">
              <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "13px", color: "#bf00ff", letterSpacing: "2px", marginBottom: "18px" }}>PASSION MODULES</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {hobbies.map(({ Icon, color, label, desc }) => (
                  <div key={label} className="hobby-card" style={{ padding: "14px 12px", border: `1px solid ${color}28`, borderRadius: "10px", background: `${color}08` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}66`; e.currentTarget.style.background = `${color}18`; e.currentTarget.style.boxShadow = `0 0 20px ${color}33`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}28`; e.currentTarget.style.background = `${color}08`; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ marginBottom: "8px", animation: "neon-pulse 3s ease-in-out infinite" }}><Icon color={color} /></div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#dde", marginBottom: "3px" }}>{label}</div>
                    <div style={{ fontSize: "10px", color: "#5a6a7a", lineHeight: 1.5, marginBottom: "8px" }}>{desc}</div>
                    <div style={{ height: "1px", background: `linear-gradient(90deg,${color}88,transparent)` }} />
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "16px", marginTop: "28px" }}>
            {[{ val: "11+", label: "Technologies" }, { val: "∞", label: "Creativity" }, { val: "100%", label: "Passion" }, { val: "24/7", label: "Dedication" }].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "20px 12px", border: "1px solid #00d4ff15", borderRadius: "8px", background: "#00d4ff05" }}>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(22px,4vw,32px)", color: "#00d4ff", fontWeight: 900, marginBottom: "4px" }}>{s.val}</div>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#4a6a7a", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="SKILL.MATRIX" subtitle="Technical Arsenal" />
          <div style={{ display: "grid", gap: "20px", marginTop: "50px" }}>
            {skillSections.map(({ label, color, items }, si) => (
              <GlowCard key={label} color={color} style={{ padding: "26px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, boxShadow: `0 0 12px ${color}`, flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "11px", color, letterSpacing: "3px" }}>{label}</h3>
                  <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg,${color}66,transparent)`, minWidth: "20px" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {items.map((item, i) => (
                    <span key={item} className="skill-tag"
                      style={{ padding: "8px 16px", border: `1px solid ${color}55`, borderRadius: "6px", fontSize: "12px", color, background: `${color}0d`, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1px", boxShadow: `0 0 8px ${color}22`, animationDelay: `${(si * 10 + i) * 0.06}s`, position: "relative", overflow: "hidden" }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}28`; e.currentTarget.style.boxShadow = `0 0 18px ${color}66`; e.currentTarget.style.borderColor = `${color}99`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.boxShadow = `0 0 8px ${color}22`; e.currentTarget.style.borderColor = `${color}55`; }}>
                      <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg,transparent,${color},transparent)` }} />
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="PROJECT.LOG" subtitle="Digital Creations" />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px", marginTop: "50px" }}>
            {projects.map((p, i) => (
              <div key={p.name} className="project-card"
                style={{ border: `1px solid ${p.color}22`, borderRadius: "12px", padding: "24px", position: "relative", overflow: "hidden", background: `linear-gradient(135deg,${p.color}06,transparent)`, animation: `fadeInUp 0.6s ease ${i * 0.15}s both`, cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}55`; e.currentTarget.style.boxShadow = `0 0 40px ${p.color}25`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${p.color}22`; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ position: "absolute", top: -1, left: "20px", right: "60%", height: "1px", background: `linear-gradient(90deg,${p.color},transparent)` }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}`, marginBottom: "14px" }} />
                <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "15px", color: "#e8f4ff", marginBottom: "8px", letterSpacing: "1px" }}>{p.name}</h3>
                <div style={{ fontSize: "10px", color: p.color, letterSpacing: "2px", fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px", textTransform: "uppercase" }}>{p.tech}</div>
                <p style={{ fontSize: "13px", color: "#5a7a8a", lineHeight: 1.7 }}>{p.desc}</p>
                <div style={{ marginTop: "18px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "10px", color: p.color, border: `1px solid ${p.color}44`, padding: "4px 12px", borderRadius: "4px", fontFamily: "'Share Tech Mono', monospace" }}>VIEW CODE</span>
                  <span style={{ fontSize: "10px", color: "#4a6a7a", border: "1px solid #1a2a3a", padding: "4px 12px", borderRadius: "4px", fontFamily: "'Share Tech Mono', monospace" }}>LIVE DEMO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ display: "flex", alignItems: "center" }}>
        <HexGrid />
        <div style={{ maxWidth: "680px", margin: "0 auto", width: "100%", textAlign: "center" }}>
          <SectionHeader title="ESTABLISH.LINK" subtitle="Open Communication Channel" center />
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px", marginBottom: "24px", flexWrap: "wrap" }}>
            {socialLinks.map(({ Icon, label, href, color }) => (
              <a key={label} href={href} title={label} className="social-btn"
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", border: `1px solid ${color}44`, borderRadius: "8px", color, background: `${color}0d`, textDecoration: "none", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px", letterSpacing: "1px", boxShadow: `0 0 10px ${color}22` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 22px ${color}55`; e.currentTarget.style.background = `${color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 10px ${color}22`; e.currentTarget.style.background = `${color}0d`; }}>
                <Icon /> {label}
              </a>
            ))}
          </div>
          <GlowCard style={{ textAlign: "left" }}>
            <div style={{ display: "grid", gap: "18px" }}>
              {[{ label: "NAME", placeholder: "Your designation..." }, { label: "EMAIL", placeholder: "Your comm address..." }].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>{f.label}</label>
                  <input placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", transition: "border-color 0.3s" }}
                    onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                    onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>MESSAGE</label>
                <textarea rows={4} placeholder="Transmit your message..." style={{ width: "100%", padding: "11px 14px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", resize: "vertical", transition: "border-color 0.3s" }}
                  onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                  onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
              </div>
              <button style={{ padding: "13px 40px", background: "linear-gradient(90deg,#00d4ff22,#00d4ff11)", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "12px", letterSpacing: "3px", cursor: "pointer", borderRadius: "6px", textTransform: "uppercase", transition: "all 0.3s", width: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 30px #00d4ff44"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(90deg,#00d4ff22,#00d4ff11)"; e.currentTarget.style.boxShadow = "none"; }}>
                TRANSMIT MESSAGE
              </button>
            </div>
          </GlowCard>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "28px 5%", borderTop: "1px solid #00d4ff11", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#2a4a5a", letterSpacing: "2px" }}>
        © 2026 &nbsp;|&nbsp; HARSHAL.DEV &nbsp;|&nbsp; BUILT WITH REACT
      </footer>
    </div>
  );
}

