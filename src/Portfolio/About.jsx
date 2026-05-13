import { useState } from "react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const socialLinks = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/harshal_terekar/", color: "#bf00ff" },
  { Icon: GitHubIcon, label: "GitHub", href: "https://github.com/harshalgitcode", color: "#00ff88" },
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

const stats = [
  { val: "11+", label: "Technologies", color: "#00d4ff" },
  { val: "∞", label: "Creativity", color: "#bf00ff" },
  { val: "100%", label: "Passion", color: "#ff6b35" },
  { val: "24/7", label: "Dedication", color: "#00ff88" },
];

/* ── Floating Particles ── */
function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    color: ["#00d4ff", "#bf00ff", "#00ff88", "#ff6b35", "#f7df1e"][i % 5],
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
          opacity: 0.6,
        }} />
      ))}
      <style>{`
        @keyframes floatP0 { 0%,100%{transform:translate(0,0) scale(1);opacity:.6} 50%{transform:translate(26px,-22px) scale(1.4);opacity:.25} }
        @keyframes floatP1 { 0%,100%{transform:translate(0,0) scale(1);opacity:.5} 50%{transform:translate(-20px,26px) scale(0.7);opacity:.85} }
        @keyframes floatP2 { 0%,100%{transform:translate(0,0) scale(1);opacity:.45} 33%{transform:translate(16px,16px) scale(1.2);opacity:.75} 66%{transform:translate(-12px,-26px) scale(0.8);opacity:.3} }
      `}</style>
    </div>
  );
}

/* ── Hex Grid ── */
const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.055 }}>
      <defs>
        <pattern id="hex-about" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-about)" />
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
function SectionHeader({ title, subtitle, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", position: "relative" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "12px",
        fontSize: "11px", letterSpacing: "3px", color: "#00d4ff",
        fontFamily: "'Share Tech Mono', monospace", marginBottom: "12px",
      }}>
        {!center && <div style={{ width: "30px", height: "1px", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }} />}
        {subtitle.toUpperCase()}
        <div style={{ width: "30px", height: "1px", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff" }} />
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: "clamp(24px, 5vw, 48px)",
        fontWeight: 900, letterSpacing: "4px", margin: 0,
        background: "linear-gradient(135deg, #e8f4ff 0%, #00d4ff 35%, #bf00ff 65%, #00ff88 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 0 30px #00d4ff55)",
        animation: "titlePulse 4s ease-in-out infinite",
      }}>{title}</h2>
      <div style={{
        width: center ? "120px" : "80px", height: "3px", borderRadius: "2px",
        background: "linear-gradient(90deg, #00d4ff, #bf00ff, transparent)",
        margin: center ? "16px auto 0" : "16px 0 0",
        boxShadow: "0 0 16px #00d4ff, 0 0 32px #bf00ff44",
        animation: "barGlow 3s ease-in-out infinite",
      }} />
      <style>{`
        @keyframes titlePulse { 0%,100%{filter:drop-shadow(0 0 30px #00d4ff55)} 50%{filter:drop-shadow(0 0 50px #00d4ffaa)} }
        @keyframes barGlow { 0%,100%{box-shadow:0 0 16px #00d4ff,0 0 32px #bf00ff44} 50%{box-shadow:0 0 30px #00d4ff,0 0 60px #bf00ff88} }
      `}</style>
    </div>
  );
}

/* ── Glow Card ── */
function GlowCard({ children, color = "#00d4ff", style = {}, delay = 0 }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? color + "55" : color + "22"}`,
        borderRadius: "18px", padding: "32px 28px",
        position: "relative",
        background: hov
          ? `linear-gradient(135deg, ${color}10, ${color}05, #030810ee)`
          : `linear-gradient(135deg, ${color}07, transparent)`,
        boxShadow: hov
          ? `0 0 100px ${color}22, 0 0 200px ${color}0a, 0 24px 80px #00000077, inset 0 0 80px ${color}06`
          : `0 0 40px ${color}0a, 0 16px 40px #00000055`,
        transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default", backdropFilter: "blur(2px)",
        animation: `fadeInUp 0.6s ease ${delay}s both`,
        ...style,
      }}
    >
      {/* Top-left corner bracket */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "50px", height: "50px", borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, borderRadius: "18px 0 0 0", boxShadow: `0 0 14px ${color}88`, opacity: hov ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />
      {/* Bottom-right corner bracket */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "50px", height: "50px", borderBottom: `2px solid ${color}88`, borderRight: `2px solid ${color}88`, borderRadius: "0 0 18px 0", opacity: hov ? 1 : 0.3, transition: "opacity 0.4s", pointerEvents: "none" }} />
      {/* Top shimmer bar */}
      <div style={{ position: "absolute", top: -1, left: "24px", width: hov ? "68%" : "38%", height: "2px", background: `linear-gradient(90deg, ${color}, ${color}66, transparent)`, boxShadow: `0 0 16px ${color}, 0 0 32px ${color}88`, transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)" }} />
      {/* Bottom shimmer */}
      <div style={{ position: "absolute", bottom: -1, right: "24px", width: hov ? "48%" : "18%", height: "1px", background: `linear-gradient(270deg, ${color}88, transparent)`, boxShadow: `0 0 10px ${color}88`, transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)" }} />
      {children}
    </div>
  );
}

/* ── Social Button ── */
function SocialBtn({ Icon, label, href, color }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer" title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "46px", height: "46px", borderRadius: "12px",
        border: `1px solid ${hov ? color + "99" : color + "44"}`,
        color, background: hov ? `${color}22` : `${color}0d`,
        textDecoration: "none",
        boxShadow: hov ? `0 0 24px ${color}66, inset 0 0 12px ${color}11` : `0 0 10px ${color}22`,
        transform: hov ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <Icon />
    </a>
  );
}

/* ── Hobby Card ── */
function HobbyCard({ Icon, color, label, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "16px 14px",
        border: `1px solid ${hov ? color + "77" : color + "28"}`,
        borderRadius: "12px",
        background: hov ? `linear-gradient(135deg, ${color}22, ${color}0e)` : `${color}08`,
        boxShadow: hov ? `0 0 28px ${color}44, inset 0 0 12px ${color}08` : "none",
        transform: hov ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
        cursor: "default",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Top shimmer on hover */}
      <div style={{ position: "absolute", top: -1, left: "10px", right: "10px", height: "1px", background: `linear-gradient(90deg, transparent, ${color}${hov ? "cc" : "44"}, transparent)`, transition: "opacity 0.3s" }} />
      <div style={{ marginBottom: "10px", filter: hov ? `drop-shadow(0 0 8px ${color})` : `drop-shadow(0 0 3px ${color}88)`, transition: "filter 0.3s", animation: "iconPulse 3s ease-in-out infinite" }}>
        <Icon color={color} />
      </div>
      <div style={{ fontSize: "12px", fontWeight: 600, color: hov ? "#e8f4ff" : "#dde", marginBottom: "4px", transition: "color 0.3s", textShadow: hov ? `0 0 10px ${color}88` : "none" }}>{label}</div>
      <div style={{ fontSize: "10px", color: hov ? "#7a9aaa" : "#5a6a7a", lineHeight: 1.5, marginBottom: "10px", transition: "color 0.3s" }}>{desc}</div>
      <div style={{ height: "1px", background: `linear-gradient(90deg, ${color}${hov ? "cc" : "88"}, transparent)`, boxShadow: hov ? `0 0 6px ${color}` : "none", transition: "all 0.3s" }} />
    </div>
  );
}

/* ── Stat Card ── */
function StatCard({ val, label, color, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textAlign: "center", padding: "24px 12px",
        border: `1px solid ${hov ? color + "55" : color + "20"}`,
        borderRadius: "14px",
        background: hov
          ? `radial-gradient(ellipse at 50% 0%, ${color}18, ${color}06)`
          : `radial-gradient(ellipse at 50% 0%, ${color}08, transparent)`,
        boxShadow: hov ? `0 0 40px ${color}33, 0 0 80px ${color}11` : `0 0 12px ${color}0a`,
        transition: "all 0.4s ease",
        cursor: "default",
        position: "relative", overflow: "hidden",
        animation: `fadeInUp 0.5s ease ${0.1 + index * 0.1}s both`,
      }}
    >
      {/* corner accent */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "28px", height: "28px", borderTop: `1px solid ${color}88`, borderLeft: `1px solid ${color}88`, borderRadius: "14px 0 0 0", opacity: hov ? 1 : 0.4, transition: "opacity 0.3s" }} />
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: "clamp(22px, 4vw, 32px)",
        fontWeight: 900, marginBottom: "6px",
        color: color,
        textShadow: hov ? `0 0 20px ${color}, 0 0 40px ${color}88` : `0 0 10px ${color}55`,
        transition: "text-shadow 0.4s",
        animation: hov ? "none" : `valPulse 3s ease-in-out ${index * 0.5}s infinite`,
      }}>{val}</div>
      <div style={{ fontSize: "10px", letterSpacing: "2.5px", color: hov ? "#7a9aaa" : "#4a6a7a", textTransform: "uppercase", fontFamily: "'Share Tech Mono', monospace", transition: "color 0.3s" }}>{label}</div>
    </div>
  );
}

/* ── Main Export ── */
export default function About({ isMobile }) {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <HexGrid />
      <Particles />
      <ScanLine />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeader title="ABOUT.ME" subtitle="Personal Profile" />

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "28px", marginTop: "50px" }}>

          {/* System Profile Card */}
          <GlowCard color="#00d4ff" delay={0}>
            <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "13px", color: "#00d4ff", letterSpacing: "2.5px", marginBottom: "18px", textShadow: "0 0 14px #00d4ff88" }}>SYSTEM PROFILE</h3>
            <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 1.9, marginBottom: "14px" }}>
              Hi, I'm <span style={{ color: "#00d4ff", textShadow: "0 0 10px #00d4ff88", fontWeight: 600 }}>Harshal</span> — a frontend developer with 2+ years of experience in web development, creating interfaces that feel alive. I believe code is just another form of art.
            </p>
            <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 1.9 }}>
              When I'm not pushing pixels, I'm creating digital art, exploring generative design, and finding the intersection of technology and human creativity.
            </p>
            <div style={{ marginTop: "28px", paddingTop: "18px", borderTop: "1px solid #00d4ff18" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff66", fontFamily: "'Share Tech Mono', monospace", marginBottom: "14px" }}>CONNECT WITH ME</div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {socialLinks.map(({ Icon, label, href, color }) => (
                  <SocialBtn key={label} Icon={Icon} label={label} href={href} color={color} />
                ))}
              </div>
            </div>
          </GlowCard>

          {/* Passion Modules Card */}
          <GlowCard color="#bf00ff" delay={0.15}>
            <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "13px", color: "#bf00ff", letterSpacing: "2.5px", marginBottom: "20px", textShadow: "0 0 14px #bf00ff88" }}>PASSION MODULES</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {hobbies.map(({ Icon, color, label, desc }) => (
                <HobbyCard key={label} Icon={Icon} color={color} label={label} desc={desc} />
              ))}
            </div>
          </GlowCard>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "16px", marginTop: "28px" }}>
          {stats.map((s, i) => (
            <StatCard key={s.label} val={s.val} label={s.label} color={s.color} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes iconPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
        @keyframes valPulse { 0%,100%{opacity:1} 50%{opacity:.6} }
      `}</style>
    </section>
  );
}

