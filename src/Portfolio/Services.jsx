import { useState } from "react";

const combinedService = {
  id: "creative",
  title: "CREATIVE WEB DEVELOPER",
  subtitle: "Code × Art → Immersive Digital Experiences",
  subtitleColor: "#ff6b35",
  color: "#00d4ff",
  accentColor: "#bf00ff",
  thirdColor: "#ff6b35",
  icons: [
    (
      <svg key="creative" width="48" height="48" viewBox="0 0 180 180" fill="none">
        <defs>
          <filter id="gc"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="gp"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="go"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="gy"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="gg"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="#00d4ff" opacity="0.07"/>
        <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="none" stroke="#00d4ff" strokeWidth="3" opacity="0.25" filter="url(#gc)"/>
        <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.9"/>
        <polyline points="72,62 56,90 72,118" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" filter="url(#gc)"/>
        <polyline points="72,62 56,90 72,118" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="108,62 124,90 108,118" fill="none" stroke="#bf00ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" filter="url(#gp)"/>
        <polyline points="108,62 124,90 108,118" fill="none" stroke="#bf00ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="98" y1="66" x2="82" y2="114" stroke="#ff6b35" strokeWidth="5" strokeLinecap="round" opacity="0.4" filter="url(#go)"/>
        <line x1="98" y1="66" x2="82" y2="114" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
        <line x1="140" y1="40" x2="103" y2="77" stroke="#f7df1e" strokeWidth="5" strokeLinecap="round" opacity="0.4" filter="url(#gy)"/>
        <line x1="140" y1="40" x2="103" y2="77" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="96" cy="84" rx="5" ry="3" fill="#ff6b35" transform="rotate(-45 96 84)" filter="url(#go)"/>
        <circle cx="22" cy="72" r="5" fill="#ff6b35" filter="url(#go)"/>
        <circle cx="16" cy="90" r="4" fill="#f7df1e" filter="url(#gy)"/>
        <circle cx="22" cy="108" r="5" fill="#00ff88" filter="url(#gg)"/>
        <rect x="144" y="83" width="7" height="7" rx="1" fill="#00d4ff" filter="url(#gc)"/>
        <rect x="153" y="83" width="7" height="7" rx="1" fill="#bf00ff" filter="url(#gp)"/>
        <rect x="144" y="92" width="7" height="7" rx="1" fill="#bf00ff" opacity="0.7" filter="url(#gp)"/>
        <rect x="153" y="92" width="7" height="7" rx="1" fill="#00d4ff" opacity="0.7" filter="url(#gc)"/>
      </svg>
    ),
  ],
  tag: "CODE + ART + CRETIVITY",
  highlight: "Where clean code meets creative vision.",
  description:
    "I don't just write code — I craft visual experiences born directly from imagination. No Figma, no wireframes. From a blank canvas I build immersive, animated, pixel-perfect web interfaces using React, Next.js, and CSS sorcery. And beyond the browser — I create original digital art: cyberpunk mascots, mythological deities, brand characters, and concept illustrations using AutoDesk Sketchbook. Every website I build carries that same artistic eye — making brands feel alive, memorable, and uniquely theirs.",
  featureGroups: [
    {
      heading: "WEB DEVELOPMENT",
      color: "#00d4ff",
      icon: (
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <rect x="4" y="6" width="48" height="34" rx="4" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
          <line x1="4" y1="16" x2="52" y2="16" stroke="#00d4ff" strokeWidth="1" opacity="0.4" />
          <circle cx="11" cy="11" r="2.2" fill="#ff6b35" />
          <circle cx="19" cy="11" r="2.2" fill="#f7df1e" />
          <circle cx="27" cy="11" r="2.2" fill="#00ff88" />
          <polyline points="14,26 19,31 14,36" stroke="#00d4ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="30,26 25,31 30,36" stroke="#bf00ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      items: [
        "React & Next.js", "Creative CSS Animations", "Glassmorphism Effects",
        "Neon & Dark UI Themes", "Redux / React Query", "Responsive & Mobile-First",
        "TypeScript & ES6+", "Performance Optimized", "Component Architecture", "Custom Micro-interactions",
      ],
    },
    {
      heading: "DIGITAL ART & DESIGN",
      color: "#ff6b35",
      icon: (
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <path d="M10 44 Q14 28 22 22 Q30 16 36 22 Q42 28 36 36 Q30 44 26 42 Q22 40 24 36 Q26 32 30 34" stroke="#ff6b35" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="4" fill="#ff6b35" opacity="0.95" />
          <circle cx="24" cy="8" r="3" fill="#bf00ff" opacity="0.95" />
          <circle cx="36" cy="7" r="3.5" fill="#00d4ff" opacity="0.95" />
          <line x1="40" y1="38" x2="48" y2="46" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      items: [
        "Character Illustration", "Cyberpunk & Mascot Design", "Deity & Mythological Art",
        "Website Mascot / Avatar", "Brand Visual Identity", "AutoDesk Sketchbook",
        "Light & Shadow Mastery", "Concept & Branding Art",
      ],
    },
  ],
};

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="hex-services" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-services)" />
    </svg>
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

function CombinedServiceCard({ service, isMobile }) {
  const [hovered, setHovered] = useState(false);
  const c = service.color;
  const ac = service.accentColor;
  const tc = service.thirdColor;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: "24px",
        padding: isMobile ? "28px 22px 36px" : "52px 52px 44px",
        border: `1px solid ${hovered ? c + "55" : c + "18"}`,
        background: hovered
          ? `linear-gradient(135deg, ${c}0d, ${ac}07, ${tc}05, #030810)`
          : `linear-gradient(135deg, ${c}06, ${ac}04, transparent)`,
        boxShadow: hovered
          ? `0 0 100px ${c}22, 0 0 200px ${c}0a, inset 0 0 80px ${c}05`
          : `0 0 40px ${c}08`,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default", overflow: "hidden",
        animation: "fadeInUp 0.7s ease both",
      }}
    >
      <div style={{ position: "absolute", top: -1, left: "30px", width: hovered ? "70%" : "45%", height: "2px", background: `linear-gradient(90deg, ${c}, ${ac}88, ${tc}55, transparent)`, boxShadow: `0 0 12px ${c}`, transition: "width 0.6s ease" }} />
      <div style={{ position: "absolute", top: "20px", right: "20px", width: "36px", height: "36px", borderTop: `1px solid ${c}55`, borderRight: `1px solid ${c}55`, borderRadius: "0 10px 0 0", opacity: hovered ? 1 : 0.25, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", width: "36px", height: "36px", borderBottom: `1px solid ${ac}55`, borderLeft: `1px solid ${ac}55`, borderRadius: "0 0 0 10px", opacity: hovered ? 1 : 0.25, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "24px", height: "24px", borderBottom: `1px solid ${tc}44`, borderRight: `1px solid ${tc}44`, borderRadius: "0 0 6px 0", opacity: hovered ? 0.7 : 0.15, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", right: isMobile ? "-60px" : "-20px", top: "50%", transform: "translateY(-50%)", opacity: hovered ? 0.06 : 0.025, transition: "opacity 0.5s", pointerEvents: "none" }}>
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="130" stroke={c} strokeWidth="0.8" />
          <circle cx="150" cy="150" r="95" stroke={ac} strokeWidth="0.8" />
          <circle cx="150" cy="150" r="60" stroke={tc} strokeWidth="0.8" />
          <circle cx="150" cy="150" r="28" stroke={c} strokeWidth="0.8" />
          <line x1="20" y1="150" x2="280" y2="150" stroke={c} strokeWidth="0.5" />
          <line x1="150" y1="20" x2="150" y2="280" stroke={c} strokeWidth="0.5" />
          <line x1="58" y1="58" x2="242" y2="242" stroke={ac} strokeWidth="0.4" opacity="0.6" />
          <line x1="242" y1="58" x2="58" y2="242" stroke={ac} strokeWidth="0.4" opacity="0.6" />
        </svg>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: "14px", alignItems: "center", position: "relative" }}>
          {service.icons.map((icon, i) => (
            <div key={i} style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "16px", background: i === 0 ? `${c}08` : `${tc}08`, border: `1px solid ${i === 0 ? c : tc}33`, boxShadow: hovered ? `0 0 24px ${i === 0 ? c : tc}22` : "none", filter: hovered ? `drop-shadow(0 0 12px ${i === 0 ? c : tc})` : `drop-shadow(0 0 4px ${i === 0 ? c : tc}44)`, transition: "all 0.4s ease", transform: hovered ? "scale(1.08)" : "scale(1)", flexShrink: 0 }}>
              {icon}
            </div>
          ))}
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", border: `1px solid ${c}44`, borderRadius: "30px", fontSize: "9px", color: c, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "2.5px", background: `${c}0d`, flexShrink: 0, boxShadow: hovered ? `0 0 18px ${c}44` : "none", transition: "box-shadow 0.3s" }}>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: c, boxShadow: `0 0 8px ${c}`, animation: "blink 2s infinite" }} />
          {service.tag}
        </div>
      </div>

      <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: isMobile ? "20px" : "clamp(22px, 2.8vw, 36px)", fontWeight: 900, letterSpacing: "2px", color: "#e8f4ff", lineHeight: 1.15, marginBottom: "8px", textShadow: hovered ? `0 0 40px ${c}77` : "none", transition: "text-shadow 0.4s" }}>{service.title}</h3>
      <div style={{ fontSize: "12px", color: service.subtitleColor || ac, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1.5px", marginBottom: "24px", opacity: 0.9, filter: `drop-shadow(0 0 8px ${service.subtitleColor || ac})` }}>{service.subtitle}</div>

      <div style={{ display: "flex", height: "3px", borderRadius: "2px", marginBottom: "24px", overflow: "hidden", opacity: hovered ? 1 : 0.4, transition: "opacity 0.4s" }}>
        <div style={{ flex: 1, background: c, boxShadow: `0 0 8px ${c}` }} />
        <div style={{ flex: 1, background: ac, boxShadow: `0 0 8px ${ac}` }} />
        <div style={{ flex: 1, background: tc, boxShadow: `0 0 8px ${tc}` }} />
      </div>

      <div style={{ padding: "12px 18px", borderLeft: `3px solid ${c}`, background: `${c}08`, borderRadius: "0 10px 10px 0", marginBottom: "24px", fontFamily: "'Share Tech Mono', monospace", fontSize: "13px", color: c, letterSpacing: "1px", opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s" }}>
        // {service.highlight}
      </div>

      <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 2, marginBottom: "36px" }}>{service.description}</p>

      <div style={{ height: "1px", background: `linear-gradient(90deg, ${c}55, ${ac}44, ${tc}33, transparent)`, marginBottom: "32px" }} />

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "28px" }}>
        {service.featureGroups.map((group) => (
          <div key={group.heading}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", paddingBottom: "14px", borderBottom: `1px solid ${group.color}22` }}>
              <div style={{ width: "48px", height: "48px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: `${group.color}08`, border: `1px solid ${group.color}44`, boxShadow: hovered ? `0 0 15px ${group.color}20` : "none", transition: "box-shadow 0.3s" }}>
                {group.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Orbitron', monospace", fontSize: "10px", color: group.color, letterSpacing: "2.5px", lineHeight: 1.4, marginBottom: "6px" }}>{group.heading}</h4>
                <div style={{ height: "2px", width: "36px", background: `linear-gradient(90deg, ${group.color}88, transparent)` }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.items.map((feat, i) => (
                <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", border: `1px solid ${group.color}22`, borderRadius: "8px", fontSize: "11.5px", color: hovered ? group.color : "#4a6a7a", fontFamily: "'Share Tech Mono', monospace", background: hovered ? `${group.color}08` : "transparent", transition: `all 0.2s ease ${i * 0.025}s` }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: group.color, flexShrink: 0, opacity: hovered ? 1 : 0.35, boxShadow: hovered ? `0 0 6px ${group.color}` : "none", transition: "all 0.2s" }} />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: -1, right: "30px", width: hovered ? "55%" : "30%", height: "1px", background: `linear-gradient(270deg, ${tc}, ${ac}66, transparent)`, boxShadow: `0 0 8px ${tc}`, transition: "width 0.6s ease" }} />
    </div>
  );
}

export default function Services({ isMobile, scrollTo }) {
  return (
    <section id="services" className="section">
      <HexGrid />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title="SERVICES.EXE" subtitle="What I Offer" />
        <div style={{ marginTop: "50px" }}>
          <CombinedServiceCard service={combinedService} isMobile={isMobile} />
        </div>

        <div style={{ marginTop: "50px", padding: "32px", border: "1px solid #00d4ff22", borderRadius: "12px", background: "linear-gradient(135deg, #00d4ff06, transparent)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -1, left: "30px", right: "40%", height: "1px", background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: "#00d4ff88", marginBottom: "8px" }}>READY TO BUILD SOMETHING?</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 900, color: "#e8f4ff" }}>LET'S COLLABORATE</div>
            <p style={{ fontSize: "13px", color: "#4a6a7a", marginTop: "6px", fontFamily: "'Share Tech Mono', monospace" }}>Open for freelance projects & creative collaborations.</p>
          </div>
          <button onClick={() => scrollTo("contact")}
            style={{ padding: "13px 32px", background: "transparent", border: "1px solid #00d4ff", color: "#00d4ff", fontFamily: "'Orbitron', monospace", fontSize: "11px", letterSpacing: "3px", cursor: "pointer", borderRadius: "6px", textTransform: "uppercase", transition: "all 0.3s ease", flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = "#00d4ff22"; e.currentTarget.style.boxShadow = "0 0 30px #00d4ff44"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>
            GET IN TOUCH →
          </button>
        </div>
      </div>
    </section>
  );
}