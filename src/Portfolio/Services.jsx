import { useState } from "react";

const combinedService = {
  id: "creative",
  title: "CREATIVE WEB DEVELOPER",
  subtitle: "Code + Art → Immersive Digital Experiences",
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
  tag: "CODE + ART + CREATIVITY",
  highlight: "Where clean code meets creative vision.",
  description:
    "I don't just write code — I craft visual experiences born directly from imagination. From a blank canvas, I build immersive, animated, pixel-perfect web interfaces using React, Next.js, and CSS sorcery. And beyond the browser — I create original digital art, cyberpunk mascots, mythological deities, brand characters, and concept illustrations. Every website I build carries that same artistic eye — making brands feel alive, memorable, and uniquely theirs.",
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
        "Web Development","React & Next.js", "Creative CSS Animations", "Glassmorphism Effects",
        "Neon & Dark UI Themes", "Redux Toolkit / React Query", "Responsive & Mobile-First",
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
        "Concept & Branding Art",
      ],
    },
  ],
};

// Floating Particles - Scoped to this component only
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: ["#00d4ff", "#bf00ff", "#ff6b35", "#00ff88", "#f7df1e"][i % 5],
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: Math.random() * 14 + 10,
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
            animation: `servicesFloat${p.id % 3} ${p.dur}s ${p.delay}s infinite ease-in-out`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

// Hex Grid - Scoped
const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.055 }}>
      <defs>
        <pattern id="hex-services" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-services)" />
    </svg>
  </div>
);

// Scan Line - Scoped
function ScanLine() {
  return (
    <div style={{
      position: "absolute",
      left: 0,
      right: 0,
      height: "1px",
      background: "linear-gradient(90deg, transparent, #00d4ff44, #00d4ffbb, #00d4ff44, transparent)",
      boxShadow: "0 0 12px #00d4ff88",
      animation: "servicesScanDown 8s linear infinite",
      pointerEvents: "none",
      zIndex: 1,
    }} />
  );
}

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
        fontWeight: 900,
        letterSpacing: "4px",
        margin: 0,
        background: "linear-gradient(135deg, #e8f4ff 0%, #00d4ff 40%, #bf00ff 70%, #ff6b35 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0 0 30px #00d4ff55)",
        animation: "servicesTitlePulse 4s ease-in-out infinite",
      }}>{title}</h2>
      <div style={{
        width: "80px", height: "3px", borderRadius: "2px",
        background: "linear-gradient(90deg, #00d4ff, #bf00ff, transparent)",
        margin: "16px 0 0",
        boxShadow: "0 0 16px #00d4ff, 0 0 32px #bf00ff44",
        animation: "servicesBarGlow 3s ease-in-out infinite",
      }} />
    </div>
  );
}

function AnimatedBorder({ color, accentColor }) {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, borderRadius: "24px", pointerEvents: "none", zIndex: 1 }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "60px", borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, borderRadius: "24px 0 0 0", boxShadow: `0 0 12px ${color}88, inset 0 0 8px ${color}22`, animation: "servicesCornerPulse 3s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "60px", height: "60px", borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}`, borderRadius: "0 0 24px 0", boxShadow: `0 0 12px ${accentColor}88`, animation: "servicesCornerPulse 3s ease-in-out infinite 1.5s" }} />
      </div>
    </>
  );
}

function FeatureItem({ feat, color, hovered, index }) {
  const [itemHov, setItemHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setItemHov(true)}
      onMouseLeave={() => setItemHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "10px 16px",
        border: `1px solid ${itemHov ? color + "66" : color + "22"}`,
        borderRadius: "8px",
        fontSize: "11.5px",
        color: (hovered || itemHov) ? color : "#4a6a7a",
        fontFamily: "'Share Tech Mono', monospace",
        background: itemHov
          ? `linear-gradient(90deg, ${color}15, ${color}08)`
          : hovered ? `${color}08` : "transparent",
        transition: `all 0.25s ease ${index * 0.03}s`,
        boxShadow: itemHov ? `0 0 16px ${color}22, inset 0 0 8px ${color}08` : "none",
        transform: itemHov ? "translateX(4px)" : "translateX(0)",
        cursor: "default",
      }}
    >
      <div style={{
        width: "6px", height: "6px", borderRadius: "50%",
        background: color, flexShrink: 0,
        opacity: (hovered || itemHov) ? 1 : 0.35,
        boxShadow: (hovered || itemHov) ? `0 0 10px ${color}, 0 0 20px ${color}88` : "none",
        transition: "all 0.25s",
        animation: (hovered || itemHov) ? "servicesDotBlink 1.5s ease-in-out infinite" : "none",
      }} />
      {feat}
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
        border: `1px solid ${hovered ? c + "66" : c + "20"}`,
        background: hovered
          ? `linear-gradient(135deg, ${c}12, ${ac}09, ${tc}06, #030810ee)`
          : `linear-gradient(135deg, ${c}07, ${ac}05, #030810)`,
        boxShadow: hovered
          ? `0 0 120px ${c}28, 0 0 240px ${c}0e, 0 30px 80px #00000088, inset 0 0 100px ${c}06`
          : `0 0 60px ${c}0c, 0 20px 60px #00000066`,
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default", overflow: "hidden",
        animation: "servicesFadeInUp 0.7s ease both",
        backdropFilter: "blur(2px)",
      }}
    >
      <AnimatedBorder color={c} accentColor={ac} />

      <div style={{
        position: "absolute", top: -1, left: "20px",
        width: hovered ? "75%" : "40%", height: "2px",
        background: `linear-gradient(90deg, ${c}, ${ac}99, ${tc}66, transparent)`,
        boxShadow: `0 0 20px ${c}, 0 0 40px ${c}88`,
        transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
        animation: "servicesShimmerBar 4s ease-in-out infinite",
      }} />

      <div style={{
        position: "absolute", bottom: -1, right: "20px",
        width: hovered ? "60%" : "25%", height: "1px",
        background: `linear-gradient(270deg, ${tc}, ${ac}66, transparent)`,
        boxShadow: `0 0 12px ${tc}`,
        transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
      }} />

      <div style={{
        position: "absolute", right: isMobile ? "-80px" : "-30px", top: "50%",
        transform: "translateY(-50%)",
        opacity: hovered ? 0.09 : 0.03,
        transition: "opacity 0.6s",
        pointerEvents: "none",
      }}>
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
          <circle cx="170" cy="170" r="150" stroke={c} strokeWidth="0.8" />
          <circle cx="170" cy="170" r="110" stroke={ac} strokeWidth="0.8" />
          <circle cx="170" cy="170" r="70" stroke={tc} strokeWidth="0.8" />
          <circle cx="170" cy="170" r="32" stroke={c} strokeWidth="0.8" />
          <line x1="20" y1="170" x2="320" y2="170" stroke={c} strokeWidth="0.5" />
          <line x1="170" y1="20" x2="170" y2="320" stroke={c} strokeWidth="0.5" />
          <line x1="65" y1="65" x2="275" y2="275" stroke={ac} strokeWidth="0.4" opacity="0.6" />
          <line x1="275" y1="65" x2="65" y2="275" stroke={ac} strokeWidth="0.4" opacity="0.6" />
          <circle cx="170" cy="170" r="150" stroke={ac} strokeWidth="0.4" strokeDasharray="8 12" opacity="0.5" />
        </svg>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px", gap: "16px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          {service.icons.map((icon, i) => (
            <div key={i} style={{
              width: "76px", height: "76px",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "18px",
              background: `radial-gradient(circle at 40% 40%, ${c}18, ${c}06)`,
              border: `1px solid ${c}44`,
              boxShadow: hovered
                ? `0 0 30px ${c}44, 0 0 60px ${c}22, inset 0 0 20px ${c}0e`
                : `0 0 10px ${c}22`,
              filter: hovered
                ? `drop-shadow(0 0 16px ${c})`
                : `drop-shadow(0 0 5px ${c}55)`,
              transition: "all 0.5s ease",
              transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
              flexShrink: 0,
            }}>
              {icon}
            </div>
          ))}
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          padding: "9px 20px",
          border: `1px solid ${c}55`,
          borderRadius: "30px",
          fontSize: "9px", color: c,
          fontFamily: "'Share Tech Mono', monospace",
          letterSpacing: "2.5px",
          background: `radial-gradient(ellipse at 50% 0%, ${c}18, ${c}07)`,
          flexShrink: 0,
          boxShadow: hovered ? `0 0 24px ${c}55, inset 0 0 12px ${c}0e` : `0 0 8px ${c}22`,
          transition: "box-shadow 0.4s",
        }}>
          <div style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: c, boxShadow: `0 0 10px ${c}, 0 0 20px ${c}`,
            animation: "servicesBlink 2s infinite",
          }} />
          {service.tag}
        </div>
      </div>

      <h3 style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: isMobile ? "20px" : "clamp(22px, 2.8vw, 36px)",
        fontWeight: 900, letterSpacing: "3px",
        margin: "0 0 8px 0",
        background: hovered
          ? `linear-gradient(135deg, #e8f4ff, ${c}, ${ac})`
          : "none",
        WebkitBackgroundClip: hovered ? "text" : "unset",
        WebkitTextFillColor: hovered ? "transparent" : "#e8f4ff",
        backgroundClip: hovered ? "text" : "unset",
        color: hovered ? "transparent" : "#e8f4ff",
        filter: hovered ? `drop-shadow(0 0 30px ${c}99)` : "none",
        transition: "all 0.5s ease",
        position: "relative", zIndex: 2,
      }}>{service.title}</h3>

      <div style={{
        fontSize: "12px", color: service.subtitleColor || ac,
        fontFamily: "'Share Tech Mono', monospace",
        letterSpacing: "1.5px", marginBottom: "28px", opacity: 0.95,
        filter: `drop-shadow(0 0 10px ${service.subtitleColor || ac})`,
        position: "relative", zIndex: 2,
      }}>{service.subtitle}</div>

      <div style={{
        display: "flex", height: "4px", borderRadius: "3px",
        marginBottom: "28px", overflow: "hidden",
        opacity: hovered ? 1 : 0.45, transition: "opacity 0.5s",
        boxShadow: hovered ? `0 0 20px ${c}88, 0 0 40px ${ac}44` : "none",
        position: "relative", zIndex: 2,
      }}>
        <div style={{ flex: 1, background: c, boxShadow: `0 0 10px ${c}` }} />
        <div style={{ flex: 1, background: ac, boxShadow: `0 0 10px ${ac}` }} />
        <div style={{ flex: 1, background: tc, boxShadow: `0 0 10px ${tc}` }} />
      </div>

      <div style={{
        padding: "14px 20px",
        borderLeft: `3px solid ${c}`,
        background: `linear-gradient(90deg, ${c}12, transparent)`,
        borderRadius: "0 12px 12px 0",
        marginBottom: "28px",
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "13px", color: c,
        letterSpacing: "1px",
        opacity: hovered ? 1 : 0.65,
        boxShadow: hovered ? `0 0 24px ${c}22, inset 0 0 16px ${c}08` : "none",
        transition: "all 0.4s",
        position: "relative", zIndex: 2,
      }}>
        {service.highlight}
      </div>

      <p style={{
        fontSize: "14px", color: "#7a9aaa", lineHeight: 2,
        marginBottom: "40px", position: "relative", zIndex: 2,
      }}>{service.description}</p>

      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, ${c}66, ${ac}55, ${tc}44, transparent)`,
        marginBottom: "36px",
        boxShadow: `0 0 8px ${c}44`,
        position: "relative", zIndex: 2,
      }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: "32px",
        position: "relative", zIndex: 2,
      }}>
        {service.featureGroups.map((group) => (
          <div key={group.heading}>
            <div style={{
              display: "flex", alignItems: "center", gap: "16px",
              marginBottom: "20px", paddingBottom: "16px",
              borderBottom: `1px solid ${group.color}2a`,
            }}>
              <div style={{
                width: "52px", height: "52px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "14px",
                background: `radial-gradient(circle at 40% 30%, ${group.color}18, ${group.color}06)`,
                border: `1px solid ${group.color}55`,
                boxShadow: hovered
                  ? `0 0 22px ${group.color}33, inset 0 0 12px ${group.color}0e`
                  : `0 0 6px ${group.color}18`,
                transition: "all 0.4s",
              }}>
                {group.icon}
              </div>
              <div>
                <h4 style={{
                  fontFamily: "'Orbitron', monospace", fontSize: "10px",
                  color: group.color, letterSpacing: "2.5px",
                  lineHeight: 1.4, marginBottom: "6px", margin: "0 0 6px",
                  textShadow: hovered ? `0 0 14px ${group.color}` : "none",
                  transition: "text-shadow 0.4s",
                }}>{group.heading}</h4>
                <div style={{
                  height: "2px", width: hovered ? "60px" : "36px",
                  background: `linear-gradient(90deg, ${group.color}, transparent)`,
                  boxShadow: `0 0 6px ${group.color}`,
                  transition: "width 0.4s",
                }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.items.map((feat, i) => (
                <FeatureItem key={feat} feat={feat} color={group.color} hovered={hovered} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTABanner({ scrollTo }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      marginTop: "50px", padding: "36px 40px",
      border: `1px solid ${hov ? "#00d4ff55" : "#00d4ff22"}`,
      borderRadius: "16px",
      background: hov
        ? "linear-gradient(135deg, #00d4ff0e, #bf00ff08, #030810)"
        : "linear-gradient(135deg, #00d4ff06, transparent)",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
      position: "relative", overflow: "hidden",
      boxShadow: hov ? "0 0 80px #00d4ff18, 0 20px 60px #00000055" : "0 0 30px #00000044",
      transition: "all 0.4s ease",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ position: "absolute", top: -1, left: "30px", right: "40%", height: "2px", background: "linear-gradient(90deg, #00d4ff, #bf00ff44, transparent)", boxShadow: "0 0 14px #00d4ff88", animation: "servicesShimmerBar 3s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: -1, right: "30px", left: "50%", height: "1px", background: "linear-gradient(270deg, #ff6b35, transparent)", boxShadow: "0 0 8px #ff6b35" }} />
      <div>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: "#00d4ff88", marginBottom: "8px" }}>READY TO BUILD SOMETHING?</div>
        <div style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 900,
          background: hov ? "linear-gradient(90deg, #e8f4ff, #00d4ff)" : "none",
          WebkitBackgroundClip: hov ? "text" : "unset",
          WebkitTextFillColor: hov ? "transparent" : "#e8f4ff",
          color: hov ? "transparent" : "#e8f4ff",
          transition: "all 0.4s",
        }}>LET'S COLLABORATE</div>
        <p style={{ fontSize: "13px", color: "#4a6a7a", marginTop: "6px", fontFamily: "'Share Tech Mono', monospace" }}>Open for freelance projects & creative collaborations.</p>
      </div>
      <button
        onClick={() => scrollTo("contact")}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#00d4ff22";
          e.currentTarget.style.boxShadow = "0 0 40px #00d4ff66, inset 0 0 20px #00d4ff11";
          e.currentTarget.style.letterSpacing = "4px";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow = "0 0 10px #00d4ff22";
          e.currentTarget.style.letterSpacing = "3px";
        }}
        style={{
          padding: "14px 36px", background: "transparent",
          border: "1px solid #00d4ff",
          color: "#00d4ff",
          fontFamily: "'Orbitron', monospace", fontSize: "11px",
          letterSpacing: "3px", cursor: "pointer", borderRadius: "8px",
          textTransform: "uppercase",
          transition: "all 0.35s ease", flexShrink: 0,
          boxShadow: "0 0 10px #00d4ff22",
          textShadow: "0 0 10px #00d4ff88",
        }}>
        GET IN TOUCH →
      </button>
    </div>
  );
}

export default function Services({ isMobile, scrollTo }) {
  return (
    <section id="services" className="section" style={{ position: "relative" }}>
      <HexGrid />
      <Particles />
      <ScanLine />
      
      {/* Scoped styles - only affect this component */}
      <style>{`
        @keyframes servicesBlink { 
          0%,100%{opacity:1;box-shadow:0 0 10px #00d4ff,0 0 20px #00d4ff} 
          50%{opacity:.3;box-shadow:0 0 4px #00d4ff} 
        }
        @keyframes servicesShimmerBar { 
          0%,100%{opacity:1} 
          50%{opacity:.6} 
        }
        @keyframes servicesDotBlink { 
          0%,100%{transform:scale(1)} 
          50%{transform:scale(1.6)} 
        }
        @keyframes servicesFadeInUp { 
          from{opacity:0;transform:translateY(30px)} 
          to{opacity:1;transform:translateY(0)} 
        }
        @keyframes servicesTitlePulse { 
          0%,100%{filter:drop-shadow(0 0 30px #00d4ff55)} 
          50%{filter:drop-shadow(0 0 50px #00d4ffaa)} 
        }
        @keyframes servicesBarGlow { 
          0%,100%{box-shadow:0 0 16px #00d4ff,0 0 32px #bf00ff44} 
          50%{box-shadow:0 0 30px #00d4ff,0 0 60px #bf00ff88} 
        }
        @keyframes servicesCornerPulse { 
          0%,100%{opacity:.6} 
          50%{opacity:1} 
        }
        @keyframes servicesScanDown { 
          0%{top:-2px;opacity:0} 
          5%{opacity:1} 
          95%{opacity:1} 
          100%{top:100%;opacity:0} 
        }
        @keyframes servicesFloat0 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.7} 
          50%{transform:translate(30px,-25px) scale(1.4);opacity:.3} 
        }
        @keyframes servicesFloat1 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.6} 
          50%{transform:translate(-25px,30px) scale(0.7);opacity:.9} 
        }
        @keyframes servicesFloat2 { 
          0%,100%{transform:translate(0,0) scale(1);opacity:.5} 
          33%{transform:translate(20px,20px) scale(1.2);opacity:.8} 
          66%{transform:translate(-15px,-30px) scale(0.8);opacity:.4} 
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <SectionHeader title="SERVICES.EXE" subtitle="What I Offer" />
        <div style={{ marginTop: "50px" }}>
          <CombinedServiceCard service={combinedService} isMobile={isMobile} />
        </div>
        <CTABanner scrollTo={scrollTo} />
      </div>
    </section>
  );
}
