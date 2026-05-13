import { useState } from "react";

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
      "HTML5", "CSS3", "JavaScript", "Bootstrap", "Material UI", "TypeScript", "ES6+",
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
      "GitHub", "Postman", "Vercel",
      "VS Code", "Creative Web Design", "Digital Art Creation", "Auto-Desk Sketch-Book"
    ]
  },
];

/* ── Floating Particles ── */
function Particles() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    color: ["#00d4ff", "#00ff88", "#bf00ff", "#ff6b35", "#f7df1e"][i % 5],
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: Math.random() * 14 + 10,
    delay: Math.random() * -20,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map((p) => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
          width: `${p.size}px`, height: `${p.size}px`, borderRadius: "50%",
          background: p.color,
          boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}55`,
          animation: `floatP${p.id % 3} ${p.dur}s ${p.delay}s infinite ease-in-out`,
          opacity: 0.65,
        }} />
      ))}
      <style>{`
        @keyframes floatP0 { 0%,100%{transform:translate(0,0) scale(1);opacity:.65} 50%{transform:translate(28px,-24px) scale(1.4);opacity:.25} }
        @keyframes floatP1 { 0%,100%{transform:translate(0,0) scale(1);opacity:.55} 50%{transform:translate(-22px,28px) scale(0.7);opacity:.85} }
        @keyframes floatP2 { 0%,100%{transform:translate(0,0) scale(1);opacity:.45} 33%{transform:translate(18px,18px) scale(1.2);opacity:.8} 66%{transform:translate(-14px,-28px) scale(0.8);opacity:.35} }
      `}</style>
    </div>
  );
}

/* ── Hex Grid ── */
const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.055 }}>
      <defs>
        <pattern id="hex-skills" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-skills)" />
    </svg>
  </div>
);

/* ── Scan Line ── */
function ScanLine() {
  return (
    <>
      <div style={{
        position: "absolute", left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #00d4ff44, #00d4ffbb, #00d4ff44, transparent)",
        boxShadow: "0 0 12px #00d4ff88",
        animation: "scanDown 9s linear infinite",
        pointerEvents: "none", zIndex: 1,
      }} />
      <style>{`@keyframes scanDown { 0%{top:-2px;opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{top:100%;opacity:0} }`}</style>
    </>
  );
}

/* ── Section Header ── */
function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "12px",
        fontSize: "11px", letterSpacing: "3px", color: "#00d4ff",
        fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px",
      }}>
        <div style={{ width: "30px", height: "1px", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }} />
        {subtitle.toUpperCase()}
        <div style={{ width: "30px", height: "1px", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }} />
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: "clamp(24px, 5vw, 48px)",
        fontWeight: 900, letterSpacing: "4px", margin: 0,
        background: "linear-gradient(135deg, #e8f4ff 0%, #00d4ff 40%, #00ff88 70%, #bf00ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 0 30px #00d4ff55)",
        animation: "titlePulse 4s ease-in-out infinite",
      }}>{title}</h2>
      <div style={{
        width: "80px", height: "3px", borderRadius: "2px",
        background: "linear-gradient(90deg, #00d4ff, #00ff88, transparent)",
        margin: "16px 0 0",
        boxShadow: "0 0 16px #00d4ff, 0 0 32px #00ff8844",
        animation: "barGlow 3s ease-in-out infinite",
      }} />
      <style>{`
        @keyframes titlePulse { 0%,100%{filter:drop-shadow(0 0 30px #00d4ff55)} 50%{filter:drop-shadow(0 0 50px #00d4ffaa)} }
        @keyframes barGlow { 0%,100%{box-shadow:0 0 16px #00d4ff,0 0 32px #00ff8844} 50%{box-shadow:0 0 30px #00d4ff,0 0 60px #00ff8888} }
      `}</style>
    </div>
  );
}

/* ── Skill Tag ── */
function SkillTag({ item, color, index, sectionIndex }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "10px 18px",
        border: `1px solid ${hov ? color + "aa" : color + "55"}`,
        borderRadius: "8px",
        fontSize: "12px", color: color,
        background: hov
          ? `linear-gradient(135deg, ${color}28, ${color}12)`
          : `${color}0d`,
        fontFamily: "'Share Tech Mono', monospace",
        letterSpacing: "1px",
        boxShadow: hov
          ? `0 0 24px ${color}66, 0 0 48px ${color}22, inset 0 0 10px ${color}11`
          : `0 0 8px ${color}22`,
        animation: `tagIn 0.4s ease ${(sectionIndex * 10 + index) * 0.06}s both`,
        position: "relative", overflow: "hidden",
        transition: "all 0.25s ease",
        cursor: "default",
        transform: hov ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
        textShadow: hov ? `0 0 10px ${color}` : "none",
      }}
    >
      {/* top shimmer line */}
      <span style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent, ${color}${hov ? "cc" : "66"}, transparent)`,
        transition: "opacity 0.25s",
      }} />
      {/* left accent bar */}
      <span style={{
        position: "absolute", left: 0, top: "20%", bottom: "20%", width: "2px",
        background: color,
        boxShadow: `0 0 8px ${color}`,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.25s",
        borderRadius: "0 1px 1px 0",
      }} />
      {item}
    </span>
  );
}

/* ── Glow Card ── */
function GlowCard({ children, color = "#00d4ff", style = {}, sectionIndex }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? color + "55" : color + "22"}`,
        borderRadius: "18px", padding: "32px 28px",
        position: "relative", height: "100%",
        background: hov
          ? `linear-gradient(135deg, ${color}10, ${color}05, #030810ee)`
          : `linear-gradient(135deg, ${color}07, transparent)`,
        boxShadow: hov
          ? `0 0 100px ${color}22, 0 0 200px ${color}0a, 0 24px 80px #00000077, inset 0 0 80px ${color}06`
          : `0 0 40px ${color}0a, 0 16px 40px #00000055`,
        transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default",
        backdropFilter: "blur(2px)",
        animation: `fadeInUp 0.6s ease ${sectionIndex * 0.15}s both`,
        ...style,
      }}
    >
      {/* animated corner — top left */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "50px", height: "50px",
        borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`,
        borderRadius: "18px 0 0 0",
        boxShadow: `0 0 14px ${color}88, inset 0 0 8px ${color}22`,
        opacity: hov ? 1 : 0.5,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />
      {/* animated corner — bottom right */}
      <div style={{
        position: "absolute", bottom: 0, right: 0, width: "50px", height: "50px",
        borderBottom: `2px solid ${color}88`, borderRight: `2px solid ${color}88`,
        borderRadius: "0 0 18px 0",
        opacity: hov ? 1 : 0.3,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />
      {/* top shimmer bar */}
      <div style={{
        position: "absolute", top: -1, left: "24px",
        width: hov ? "70%" : "40%", height: "2px",
        background: `linear-gradient(90deg, ${color}, ${color}66, transparent)`,
        boxShadow: `0 0 16px ${color}, 0 0 32px ${color}88`,
        transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
      }} />
      {/* bottom shimmer */}
      <div style={{
        position: "absolute", bottom: -1, right: "24px",
        width: hov ? "50%" : "20%", height: "1px",
        background: `linear-gradient(270deg, ${color}88, transparent)`,
        boxShadow: `0 0 10px ${color}88`,
        transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
      }} />
      {children}
    </div>
  );
}

/* ── Main Export ── */
export default function Skills({ isMobile }) {
  return (
    <section id="skills" className="section" style={{ position: "relative" }}>
      <HexGrid />
      <Particles />
      <ScanLine />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeader title="SKILL.MATRIX" subtitle="Technical Arsenal" />
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "28px", marginTop: "50px", alignItems: "start",
        }}>
          {skillSections.map(({ label, color, icon, items }, si) => (
            <GlowCard key={label} color={color} sectionIndex={si}>
              {/* Card header */}
              <div style={{
                display: "flex", alignItems: "center", gap: "16px",
                marginBottom: "28px", paddingBottom: "18px",
                borderBottom: `1px solid ${color}2a`,
              }}>
                <div style={{
                  width: "60px", height: "60px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "14px",
                  background: `radial-gradient(circle at 40% 30%, ${color}18, ${color}06)`,
                  border: `1px solid ${color}55`,
                  color: color,
                  boxShadow: `0 0 20px ${color}33, inset 0 0 10px ${color}0e`,
                  transition: "all 0.4s",
                }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Orbitron', monospace", fontSize: "10px",
                    color: color, letterSpacing: "2.5px", lineHeight: 1.4,
                    margin: "0 0 8px",
                    textShadow: `0 0 12px ${color}88`,
                  }}>{label}</h3>
                  <div style={{
                    height: "2px", width: "44px",
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                    boxShadow: `0 0 8px ${color}`,
                  }} />
                </div>
              </div>

              {/* Skill tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {items.map((item, i) => (
                  <SkillTag key={item} item={item} color={color} index={i} sectionIndex={si} />
                ))}
              </div>

              {/* Footer dots */}
              <div style={{
                marginTop: "28px", paddingTop: "18px",
                borderTop: `1px solid ${color}18`,
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {[1, 0.45, 0.2].map((op, di) => (
                    <div key={di} style={{
                      width: di === 0 ? "8px" : "6px",
                      height: di === 0 ? "8px" : "6px",
                      borderRadius: "50%", background: color, opacity: op,
                      boxShadow: di === 0 ? `0 0 12px ${color}, 0 0 24px ${color}88` : "none",
                      animation: di === 0 ? `dotPulse${si} 2.5s ease-in-out infinite` : "none",
                    }} />
                  ))}
                </div>
                <div style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "9px",
                  color: color, opacity: 0.5, letterSpacing: "2px",
                }}>
                  {items.length} SKILLS
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tagIn { from{opacity:0;transform:translateY(10px) scale(0.9)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dotPulse0 { 0%,100%{transform:scale(1);box-shadow:0 0 12px #00d4ff,0 0 24px #00d4ff88} 50%{transform:scale(1.5);box-shadow:0 0 20px #00d4ff,0 0 40px #00d4ffaa} }
        @keyframes dotPulse1 { 0%,100%{transform:scale(1);box-shadow:0 0 12px #00ff88,0 0 24px #00ff8888} 50%{transform:scale(1.5);box-shadow:0 0 20px #00ff88,0 0 40px #00ff88aa} }
      `}</style>
    </section>
  );
}



