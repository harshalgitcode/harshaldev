import { useState, useEffect, useRef } from "react";
import myImg from "./Images/myimg.jpeg";

const skillSections = [
  {
    label: "LANGUAGES",
    color: "#00d4ff",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ES6+"],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    color: "#bf00ff",
    items: ["React JS", "Next.js", "Redux Toolkit", "React Query", "Formik"],
  },
  {
    label: "UI & TOOLS",
    color: "#00ff88",
    items: ["Bootstrap", "Material UI", "GitHub", "Postman", "VS Code"],
  },
];

// SVG Neon Icons for hobbies
const NeonPaletteIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="1.5" fill="none" filter={`drop-shadow(0 0 4px ${color})`} />
    <circle cx="11" cy="14" r="3" fill={color} opacity="0.9" />
    <circle cx="18" cy="10" r="3" fill={color} opacity="0.9" />
    <circle cx="25" cy="14" r="3" fill={color} opacity="0.9" />
    <circle cx="24" cy="22" r="3" fill={color} opacity="0.9" />
    <circle cx="18" cy="22" r="4" fill={color} opacity="0.4" />
    <text x="18" y="27" textAnchor="middle" fontSize="6" fill={color} fontFamily="monospace">ART</text>
  </svg>
);

const NeonCodeIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="6" width="30" height="24" rx="3" stroke={color} strokeWidth="1.5" fill="none" filter={`drop-shadow(0 0 4px ${color})`} />
    <line x1="3" y1="12" x2="33" y2="12" stroke={color} strokeWidth="1" opacity="0.5" />
    <polyline points="10,18 14,22 10,26" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <line x1="17" y1="26" x2="24" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const NeonSparkIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <line x1="18" y1="4" x2="18" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" filter={`drop-shadow(0 0 3px ${color})`} />
    <line x1="18" y1="24" x2="18" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" filter={`drop-shadow(0 0 3px ${color})`} />
    <line x1="4" y1="18" x2="12" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" filter={`drop-shadow(0 0 3px ${color})`} />
    <line x1="24" y1="18" x2="32" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" filter={`drop-shadow(0 0 3px ${color})`} />
    <line x1="8.7" y1="8.7" x2="14.2" y2="14.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="21.8" y1="21.8" x2="27.3" y2="27.3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="27.3" y1="8.7" x2="21.8" y2="14.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="14.2" y1="21.8" x2="8.7" y2="27.3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="18" r="4" fill={color} opacity="0.9" filter={`drop-shadow(0 0 6px ${color})`} />
  </svg>
);

const NeonGlobeIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
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

// Social SVG icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <line x1="8" y1="11" x2="8" y2="17" />
    <line x1="8" y1="8" x2="8.01" y2="8" />
    <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
    <line x1="12" y1="11" x2="12" y2="17" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polyline points="2,4 12,14 22,4" />
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

const CircuitLines = () => (
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }} viewBox="0 0 1400 900">
    <g stroke="#00d4ff" strokeWidth="0.8" fill="none">
      <path d="M0,200 L200,200 L200,100 L400,100" />
      <path d="M400,100 L450,100 M470,100 L600,100 L600,300 L800,300" />
      <path d="M1400,400 L1200,400 L1200,200 L1000,200 L1000,350" />
      <path d="M0,600 L150,600 L150,700 L300,700 L300,500 L500,500" />
      <path d="M1400,700 L1300,700 L1300,600 L1100,600 L1100,800" />
      <circle cx="450" cy="100" r="4" fill="#00d4ff" />
      <circle cx="800" cy="300" r="4" fill="#00d4ff" />
      <circle cx="1000" cy="350" r="4" fill="#00d4ff" />
      <circle cx="500" cy="500" r="4" fill="#00d4ff" />
    </g>
  </svg>
);

const NavDot = ({ label, onClick, active }) => (
  <button onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "6px 0" }}>
    <div style={{ width: active ? "28px" : "8px", height: "2px", background: active ? "#00d4ff" : "#334", transition: "all 0.3s ease", boxShadow: active ? "0 0 8px #00d4ff" : "none" }} />
    <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: active ? "#00d4ff" : "#556", fontFamily: "'Courier New', monospace", transition: "color 0.3s" }}>{label}</span>
  </button>
);

const GlowCard = ({ children, color = "#00d4ff", style = {} }) => (
  <div style={{ border: `1px solid ${color}22`, borderRadius: "12px", padding: "24px", position: "relative", background: `linear-gradient(135deg, ${color}08, transparent)`, boxShadow: `0 0 20px ${color}15, inset 0 0 20px ${color}05`, transition: "all 0.3s ease", ...style }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 40px ${color}30, inset 0 0 30px ${color}10`; e.currentTarget.style.borderColor = `${color}55`; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 20px ${color}15, inset 0 0 20px ${color}05`; e.currentTarget.style.borderColor = `${color}22`; }}
  >
    <div style={{ position: "absolute", top: -1, left: "20px", right: "20px", height: "1px", background: `linear-gradient(90deg, transparent, ${color}88, transparent)` }} />
    {children}
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 200); }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setActiveSection(id); };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach(s => { const el = document.getElementById(s); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

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
        @keyframes glow-text { 0%,100%{text-shadow:0 0 20px #00d4ff55} 50%{text-shadow:0 0 40px #00d4ffaa, 0 0 80px #00d4ff55} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes neon-pulse { 0%,100%{filter:drop-shadow(0 0 3px currentColor)} 50%{filter:drop-shadow(0 0 8px currentColor)} }
        @keyframes tag-in { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        * { box-sizing:border-box; margin:0; padding:0; scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:4px; background:#030810; }
        ::-webkit-scrollbar-thumb { background:#00d4ff33; border-radius:2px; }
        .section { min-height:100vh; padding:100px 5% 60px; position:relative; overflow:hidden; }
        .glitch-active { animation:glow-text 0.2s ease; filter:hue-rotate(30deg); }
        .skill-tag { transition:all 0.25s ease; animation:tag-in 0.4s ease both; cursor:default; }
        .skill-tag:hover { transform:translateY(-2px) scale(1.06); }
        .hobby-card { transition:all 0.3s ease; cursor:default; }
        .hobby-card:hover { transform:translateY(-4px); }
        .social-btn { transition:all 0.3s ease; }
        .social-btn:hover { transform:translateY(-3px) scale(1.08); }
      `}</style>

      <ScanLine />

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(180deg, #030810ee, transparent)", backdropFilter: "blur(10px)", borderBottom: "1px solid #00d4ff11" }}>
        <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "18px", color: "#00d4ff", letterSpacing: "3px" }}>HARSHAL.DEV</div>
        <div style={{ display: "flex", gap: "8px" }}>
          {sections.map(s => <NavDot key={s} label={s} onClick={() => scrollTo(s)} active={activeSection === s} />)}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HexGrid />
        <CircuitLines />

        <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)" }}>
          <div style={{ position: "relative", width: "320px", height: "320px", animation: "float 6s ease-in-out infinite" }}>
            <div style={{ position: "absolute", inset: "0", borderRadius: "50%", border: "1px solid #00d4ff22", boxShadow: "0 0 30px #00d4ff15, inset 0 0 30px #00d4ff08" }} />
            <div style={{ position: "absolute", inset: "10px", borderRadius: "50%", border: "1px solid #00d4ff44", animation: "spin-slow 20s linear infinite" }}>
              {[0, 90, 180, 270].map(angle => (
                <div key={angle} style={{ position: "absolute", width: "8px", height: "8px", borderRadius: "50%", background: "#00d4ff", top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(145px) translateY(-50%)`, boxShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff55" }} />
              ))}
            </div>
            <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", border: "1px dashed #bf00ff33", animation: "spin-rev 15s linear infinite" }}>
              {[45, 135, 225, 315].map(angle => (
                <div key={angle} style={{ position: "absolute", width: "5px", height: "5px", borderRadius: "50%", background: "#bf00ff", top: "50%", left: "50%", transform: `rotate(${angle}deg) translateX(115px) translateY(-50%)`, boxShadow: "0 0 8px #bf00ff" }} />
              ))}
            </div>
            <div style={{ position: "absolute", inset: "70px", borderRadius: "50%", border: "2px solid #00d4ff66", boxShadow: "0 0 40px #00d4ff33, inset 0 0 20px #00d4ff08", overflow: "hidden" }}>
              <img src={myImg} alt="Harshal" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.95) saturate(1.1)" }} />
            </div>
            <div style={{ position: "absolute", inset: "60px", borderRadius: "50%", border: "2px solid #00d4ff", animation: "pulse-ring 3s ease-out infinite", opacity: 0 }} />
          </div>
        </div>

        <div style={{ maxWidth: "650px", zIndex: 1, animation: "fadeInUp 0.8s ease" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "1px", background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }} />
            INITIALIZING PORTFOLIO INTERFACE
            <div style={{ width: "40px", height: "1px", background: "#00d4ff" }} />
          </div>
          <h1 className={glitch ? "glitch-active" : ""} style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "12px", color: "#e8f4ff", animation: "glow-text 3s ease-in-out infinite" }}>
            CREATIVE<br /><span style={{ color: "#00d4ff" }}>DEVELOPER</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 22px)", marginBottom: "24px", fontFamily: "'Share Tech Mono', monospace", color: "#6a8a9a", minHeight: "32px" }}>
            <TypeWriter texts={["React Developer", "Digital Artist", "UI Craftsman", "Creative Coder", "Next.js Engineer"]} />
          </p>
          <p style={{ fontSize: "15px", color: "#5a7a8a", lineHeight: 1.8, marginBottom: "36px", maxWidth: "480px" }}>
            Blending code and creativity to build immersive digital experiences. Passionate about where technology meets art.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} style={{ padding: "12px 32px", background: "transparent", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "12px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 20px #00d4ff44"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>VIEW WORK</button>
            <button onClick={() => scrollTo("contact")} style={{ padding: "12px 32px", background: "#00d4ff", border: "1px solid #00d4ff", color: "#030810", fontFamily: "'Orbitron', monospace", fontSize: "12px", letterSpacing: "2px", cursor: "pointer", borderRadius: "4px", textTransform: "uppercase", fontWeight: 700, transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 30px #00d4ff77"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>CONTACT</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="ABOUT.ME" subtitle="Personal Profile" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "60px" }}>
            <GlowCard>
              <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "14px", color: "#00d4ff", letterSpacing: "2px", marginBottom: "16px" }}>SYSTEM PROFILE</h3>
              <p style={{ fontSize: "15px", color: "#7a9aaa", lineHeight: 1.9, marginBottom: "16px" }}>
                Hi, I'm <span style={{ color: "#00d4ff" }}>Harshal</span> — a frontend developer with a deep passion for creating interfaces that feel alive. I believe code is just another form of art — every component a brushstroke, every interaction a performance.
              </p>
              <p style={{ fontSize: "15px", color: "#7a9aaa", lineHeight: 1.9 }}>
                When I'm not pushing pixels, I'm creating digital art, exploring generative design, and finding the intersection of technology and human creativity.
              </p>
              {/* Social links */}
              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #00d4ff15" }}>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff66", fontFamily: "'Share Tech Mono', monospace", marginBottom: "14px" }}>CONNECT WITH ME</div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {socialLinks.map(({ Icon, label, href, color }) => (
                    <a key={label} href={href} title={label} className="social-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "10px", border: `1px solid ${color}44`, color, background: `${color}0d`, textDecoration: "none", boxShadow: `0 0 10px ${color}22` }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 22px ${color}66`; e.currentTarget.style.borderColor = `${color}99`; e.currentTarget.style.background = `${color}22`; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 10px ${color}22`; e.currentTarget.style.borderColor = `${color}44`; e.currentTarget.style.background = `${color}0d`; }}>
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Passion Modules — neon SVG icons */}
            <GlowCard color="#bf00ff">
              <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "14px", color: "#bf00ff", letterSpacing: "2px", marginBottom: "20px" }}>PASSION MODULES</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {hobbies.map(({ Icon, color, label, desc }) => (
                  <div key={label} className="hobby-card" style={{ padding: "18px 16px", border: `1px solid ${color}28`, borderRadius: "10px", background: `${color}08` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}66`; e.currentTarget.style.background = `${color}18`; e.currentTarget.style.boxShadow = `0 0 20px ${color}33`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}28`; e.currentTarget.style.background = `${color}08`; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ marginBottom: "10px", animation: "neon-pulse 3s ease-in-out infinite" }}>
                      <Icon color={color} />
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#dde", marginBottom: "4px", letterSpacing: "0.5px" }}>{label}</div>
                    <div style={{ fontSize: "11px", color: "#5a6a7a", lineHeight: 1.5, marginBottom: "10px" }}>{desc}</div>
                    <div style={{ height: "1px", background: `linear-gradient(90deg, ${color}88, transparent)`, boxShadow: `0 0 4px ${color}` }} />
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "32px" }}>
            {[{ val: "11+", label: "Technologies" }, { val: "∞", label: "Creativity" }, { val: "100%", label: "Passion" }, { val: "24/7", label: "Dedication" }].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "24px 16px", border: "1px solid #00d4ff15", borderRadius: "8px", background: "#00d4ff05" }}>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "32px", color: "#00d4ff", fontWeight: 900, marginBottom: "4px" }}>{s.val}</div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#4a6a7a", textTransform: "uppercase" }}>{s.label}</div>
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

          <div style={{ display: "grid", gap: "24px", marginTop: "60px" }}>
            {skillSections.map(({ label, color, items }, si) => (
              <GlowCard key={label} color={color} style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, boxShadow: `0 0 12px ${color}`, flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "12px", color, letterSpacing: "3px" }}>{label}</h3>
                  <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${color}66, transparent)` }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {items.map((item, i) => (
                    <span key={item} className="skill-tag" style={{ padding: "9px 20px", border: `1px solid ${color}55`, borderRadius: "6px", fontSize: "13px", color, background: `${color}0d`, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1px", boxShadow: `0 0 8px ${color}22`, animationDelay: `${(si * 5 + i) * 0.07}s`, position: "relative", overflow: "hidden" }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${color}28`; e.currentTarget.style.boxShadow = `0 0 18px ${color}66`; e.currentTarget.style.borderColor = `${color}99`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.boxShadow = `0 0 8px ${color}22`; e.currentTarget.style.borderColor = `${color}55`; }}>
                      <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            ))}

            {/* Special Abilities */}
            <GlowCard color="#ff6b35" style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff6b35", boxShadow: "0 0 12px #ff6b35", flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "12px", color: "#ff6b35", letterSpacing: "3px" }}>SPECIAL ABILITIES</h3>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #ff6b3566, transparent)" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["UI/UX Intuition", "Performance Optimization", "Digital Art Creation", "Creative Problem Solving", "Component Architecture"].map((a, i) => (
                  <span key={a} className="skill-tag" style={{ padding: "9px 20px", border: "1px solid #ff6b3555", borderRadius: "6px", fontSize: "13px", color: "#ff6b35", background: "#ff6b350d", fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1px", boxShadow: "0 0 8px #ff6b3522", animationDelay: `${i * 0.07}s`, position: "relative", overflow: "hidden" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#ff6b3528"; e.currentTarget.style.boxShadow = "0 0 18px #ff6b3566"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#ff6b350d"; e.currentTarget.style.boxShadow = "0 0 8px #ff6b3522"; }}>
                    <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #ff6b35, transparent)" }} />
                    {a}
                  </span>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="PROJECT.LOG" subtitle="Digital Creations" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "60px" }}>
            {projects.map((p, i) => (
              <div key={p.name} style={{ border: `1px solid ${p.color}22`, borderRadius: "12px", padding: "28px", position: "relative", overflow: "hidden", background: `linear-gradient(135deg, ${p.color}06, transparent)`, transition: "all 0.3s ease", cursor: "pointer", animation: `fadeInUp 0.6s ease ${i * 0.15}s both` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}55`; e.currentTarget.style.boxShadow = `0 0 40px ${p.color}25`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${p.color}22`; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ position: "absolute", top: -1, left: "20px", right: "60%", height: "1px", background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}`, marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "16px", color: "#e8f4ff", marginBottom: "8px", letterSpacing: "1px" }}>{p.name}</h3>
                <div style={{ fontSize: "11px", color: p.color, letterSpacing: "2px", fontFamily: "'Share Tech Mono', monospace", marginBottom: "14px", textTransform: "uppercase" }}>{p.tech}</div>
                <p style={{ fontSize: "14px", color: "#5a7a8a", lineHeight: 1.7 }}>{p.desc}</p>
                <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "11px", color: p.color, border: `1px solid ${p.color}44`, padding: "4px 12px", borderRadius: "4px", fontFamily: "'Share Tech Mono', monospace" }}>VIEW CODE</span>
                  <span style={{ fontSize: "11px", color: "#4a6a7a", border: "1px solid #1a2a3a", padding: "4px 12px", borderRadius: "4px", fontFamily: "'Share Tech Mono', monospace" }}>LIVE DEMO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ display: "flex", alignItems: "center" }}>
        <HexGrid />
        <div style={{ maxWidth: "700px", margin: "0 auto", width: "100%", textAlign: "center" }}>
          <SectionHeader title="ESTABLISH.LINK" subtitle="Open Communication Channel" center />

          {/* Social quick-links row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginTop: "36px", marginBottom: "28px" }}>
            {socialLinks.map(({ Icon, label, href, color }) => (
              <a key={label} href={href} title={label} className="social-btn" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 22px", border: `1px solid ${color}44`, borderRadius: "8px", color, background: `${color}0d`, textDecoration: "none", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px", letterSpacing: "1px", boxShadow: `0 0 10px ${color}22` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 22px ${color}55`; e.currentTarget.style.background = `${color}22`; e.currentTarget.style.borderColor = `${color}88`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 10px ${color}22`; e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.borderColor = `${color}44`; }}>
                <Icon /> {label}
              </a>
            ))}
          </div>

          <GlowCard style={{ textAlign: "left" }}>
            <div style={{ display: "grid", gap: "20px" }}>
              {[{ label: "NAME", placeholder: "Your designation..." }, { label: "EMAIL", placeholder: "Your comm address..." }].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>{f.label}</label>
                  <input placeholder={f.placeholder} style={{ width: "100%", padding: "12px 16px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", transition: "border-color 0.3s" }}
                    onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                    onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>MESSAGE</label>
                <textarea rows={4} placeholder="Transmit your message..." style={{ width: "100%", padding: "12px 16px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", resize: "vertical", transition: "border-color 0.3s" }}
                  onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                  onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
              </div>
              <button style={{ padding: "14px 40px", background: "linear-gradient(90deg, #00d4ff22, #00d4ff11)", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "13px", letterSpacing: "3px", cursor: "pointer", borderRadius: "6px", textTransform: "uppercase", transition: "all 0.3s", width: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 30px #00d4ff44"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(90deg, #00d4ff22, #00d4ff11)"; e.currentTarget.style.boxShadow = "none"; }}>
                TRANSMIT MESSAGE
              </button>
            </div>
          </GlowCard>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "30px", borderTop: "1px solid #00d4ff11", fontFamily: "'Share Tech Mono', monospace", fontSize: "12px", color: "#2a4a5a", letterSpacing: "2px" }}>
        © 2026 &nbsp;|&nbsp; HARSHAL.DEV &nbsp;|&nbsp; BUILT WITH REACT
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "3px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px" }}>
        {!center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
        {subtitle.toUpperCase()}
        {center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
      </div>
      <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#e8f4ff", letterSpacing: "2px", textShadow: "0 0 40px #00d4ff33" }}>{title}</h2>
      <div style={{ width: center ? "120px" : "60px", height: "2px", background: "linear-gradient(90deg, #00d4ff, transparent)", margin: center ? "16px auto 0" : "16px 0 0", boxShadow: "0 0 10px #00d4ff" }} />
    </div>
  );
}


