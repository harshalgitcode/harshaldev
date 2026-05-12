const skillSections = [
  {
    label: "LANGUAGES, FRAMEWORKS & LIBRARIES",
    color: "#00d4ff",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <polyline points="10,18 13,21 10,24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <polyline points="22,18 19,21 22,24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="21" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    items: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "ES6+",
      "React JS", "Next.js", "Redux Toolkit", "React Query", "Formik"
    ]
  },
  {
    label: "UI TOOLS & SPECIAL ABILITIES",
    color: "#00ff88",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 16L16 22L28 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 22L16 28L28 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    items: [
      "Bootstrap", "Material UI", "GitHub", "Postman",
      "VS Code", "Creative Web Design", "Digital Art Creation", "Auto-Desk Sketch-Book"
    ]
  },
];

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="hex-skills" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-skills)" />
    </svg>
  </div>
);

const GlowCard = ({ children, color = "#00d4ff", style = {} }) => (
  <div style={{ border: `1px solid ${color}22`, borderRadius: "12px", padding: "24px", position: "relative", background: `linear-gradient(135deg, ${color}08, transparent)`, boxShadow: `0 0 20px ${color}15, inset 0 0 20px ${color}05`, transition: "all 0.3s ease", ...style }}>
    <div style={{ position: "absolute", top: -1, left: "20px", right: "20px", height: "1px", background: `linear-gradient(90deg, transparent, ${color}88, transparent)` }} />
    {children}
  </div>
);

function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "3px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px" }}>
        <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />
        {subtitle.toUpperCase()}
      </div>
      <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(24px, 5vw, 48px)", fontWeight: 900, color: "#e8f4ff", letterSpacing: "2px", textShadow: "0 0 40px #00d4ff33" }}>{title}</h2>
      <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #00d4ff, transparent)", margin: "16px 0 0", boxShadow: "0 0 10px #00d4ff" }} />
    </div>
  );
}

export default function Skills({ isMobile }) {
  return (
    <section id="skills" className="section">
      <HexGrid />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title="SKILL.MATRIX" subtitle="Technical Arsenal" />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "28px", marginTop: "50px", alignItems: "start" }}>
          {skillSections.map(({ label, color, icon, items }, si) => (
            <GlowCard key={label} color={color} style={{ padding: "32px 28px", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px", paddingBottom: "16px", borderBottom: `1px solid ${color}22` }}>
                <div style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: `${color}08`, border: `1px solid ${color}44`, color: color, boxShadow: `0 0 15px ${color}20` }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "10px", color: color, letterSpacing: "2.5px", lineHeight: 1.4, marginBottom: "6px" }}>{label}</h3>
                  <div style={{ height: "2px", background: `linear-gradient(90deg, ${color}88, transparent)`, width: "40px" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {items.map((item, i) => (
                  <span key={item} className="skill-tag"
                    style={{ padding: "10px 18px", border: `1px solid ${color}55`, borderRadius: "8px", fontSize: "12px", color: color, background: `${color}0d`, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1px", boxShadow: `0 0 8px ${color}22`, animation: `tag-in 0.4s ease ${(si * 10 + i) * 0.06}s both`, position: "relative", overflow: "hidden", transition: "all 0.25s ease", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${color}28`; e.currentTarget.style.boxShadow = `0 0 18px ${color}66`; e.currentTarget.style.borderColor = `${color}99`; e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.boxShadow = `0 0 8px ${color}22`; e.currentTarget.style.borderColor = `${color}55`; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}>
                    <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
                    {item}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "24px", paddingTop: "16px", display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, opacity: 0.8, boxShadow: `0 0 8px ${color}` }} />
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, opacity: 0.4 }} />
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, opacity: 0.2 }} />
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}