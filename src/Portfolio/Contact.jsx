


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
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polyline points="2,4 12,14 22,4" />
  </svg>
);

const socialLinks = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/harshal_terekar/", color: "#bf00ff" },
  { Icon: GitHubIcon, label: "GitHub", href: "https://github.com/harshalgitcode", color: "#00ff88" },
  { Icon: EmailIcon, label: "Email", href: "mailto:#", color: "#f7df1e" },
];

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="hex-contact" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-contact)" />
    </svg>
  </div>
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
        {center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
        {subtitle.toUpperCase()}
        {center && <div style={{ width: "30px", height: "1px", background: "#00d4ff" }} />}
      </div>
      <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(24px, 5vw, 48px)", fontWeight: 900, color: "#e8f4ff", letterSpacing: "2px", textShadow: "0 0 40px #00d4ff33" }}>{title}</h2>
      <div style={{ width: center ? "120px" : "60px", height: "2px", background: "linear-gradient(90deg, #00d4ff, transparent)", margin: center ? "16px auto 0" : "16px 0 0", boxShadow: "0 0 10px #00d4ff" }} />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ display: "flex", alignItems: "center" }}>
      <HexGrid />
      <div style={{ maxWidth: "680px", margin: "0 auto", width: "100%", textAlign: "center" }}>
        <SectionHeader title="ESTABLISH.LINK" subtitle="Open Communication Channel" center />
        <GlowCard style={{ textAlign: "left" }}>
          <div style={{ display: "grid", gap: "18px" }}>
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>NAME</label>
              <input placeholder="Your designation..."
                style={{ width: "100%", padding: "11px 14px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", transition: "border-color 0.3s" }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
            </div>
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>EMAIL</label>
              <input placeholder="Your comm address..."
                style={{ width: "100%", padding: "11px 14px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", transition: "border-color 0.3s" }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
            </div>
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>MESSAGE</label>
              <textarea rows={4} placeholder="Transmit your message..."
                style={{ width: "100%", padding: "11px 14px", background: "#0a1520", border: "1px solid #1a2a3a", borderRadius: "6px", color: "#c8d8e8", fontSize: "14px", fontFamily: "'Share Tech Mono', monospace", outline: "none", resize: "vertical", transition: "border-color 0.3s" }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "8px 0 4px" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff33, transparent)" }} />
              <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#4a6a7a", fontFamily: "'Share Tech Mono', monospace" }}>CONNECT VIA</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff33, transparent)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "8px", flexWrap: "wrap" }}>
              {socialLinks.map(({ Icon, label, href, color }) => (
                <a key={label} href={href} title={label} className="social-btn"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: `1px solid ${color}44`, borderRadius: "30px", color, background: `${color}0d`, textDecoration: "none", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", letterSpacing: "1px", boxShadow: `0 0 10px ${color}22`, transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${color}66`; e.currentTarget.style.background = `${color}22`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 10px ${color}22`; e.currentTarget.style.background = `${color}0d`; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <Icon /><span>{label}</span>
                </a>
              ))}
            </div>
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff44, transparent)", margin: "8px 0 4px" }} />
            <button
              style={{ padding: "13px 40px", background: "linear-gradient(90deg, #00d4ff22, #00d4ff11)", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "12px", letterSpacing: "3px", cursor: "pointer", borderRadius: "6px", textTransform: "uppercase", transition: "all 0.3s", width: "100%", marginTop: "8px" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 30px #00d4ff44"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(90deg, #00d4ff22, #00d4ff11)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              TRANSMIT MESSAGE →
            </button>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}