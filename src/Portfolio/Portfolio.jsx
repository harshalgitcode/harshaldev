import { useState, useEffect, useRef } from "react";
import myImg from "./Images/myimg.jpeg";
import Art1 from "./Images/Art1.webp";
import Art2 from "./Images/Art2.webp";
import Art3 from "./Images/Art3.webp";
import Art4 from "./Images/Art4.webp";
import Art5 from "./Images/Art5.webp";

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

const artworks = [
  {
    img: Art1,
    name: "Jay Hanuman",
    deity: "Lord Hanuman",
    color: "#ff6b35",
    glowColor: "#ff6b3588",
    tagline: "The Devoted Warrior",
    description:
      "Shree Hanuman — the eternal devotee of Shree Ram. Symbol of boundless strength, unwavering loyalty, and pure devotion. He carried mountains, crossed oceans, and burned Lanka — all in the name of love and righteousness. This artwork captures his divine radiance and fearless spirit.",
    attributes: ["Strength", "Devotion", "Loyalty", "Courage"],
    mantra: "जय श्री राम",
    origin: "Ramayana",
  },
  {
    img: Art2,
    name: "Narasimha Avatar",
    deity: "Lord Narasimha",
    color: "#f7df1e",
    glowColor: "#f7df1e88",
    tagline: "The Fierce Protector",
    description:
      "Shree Narasimha — the half-lion, half-man avatar of Lord Vishnu. Born to protect his devotee Prahlad from the demon king Hiranyakashipu. His roar shook the universe, and his wrath dissolved the darkness. He appears at dusk — neither day nor night — beyond all limits.",
    attributes: ["Protection", "Justice", "Ferocity", "Grace"],
    mantra: "ॐ नृसिंहाय नमः",
    origin: "Bhagavata Purana",
  },
  {
    img: Art3,
    name: "Shree Krishna",
    deity: "Lord Krishna",
    color: "#bf00ff",
    glowColor: "#bf00ff88",
    tagline: "The Divine Flutist",
    description:
      "Shree Krishna — the supreme personality of Godhead. Philosopher, warrior, friend, and lover of souls. His flute melody calls every heart home. From the battlefields of Kurukshetra where he revealed the Bhagavad Gita, to the banks of Yamuna where he played with Radha — he is infinite love embodied.",
    attributes: ["Wisdom", "Love", "Playfulness", "Truth"],
    mantra: "हरे कृष्ण",
    origin: "Mahabharata & Bhagavad Gita",
  },
  {
    img: Art4,
    name: "Swami Samarth",
    deity: "Swami Samarth",
    color: "#00ff88",
    glowColor: "#00ff8888",
    tagline: "The Omnipotent Saint",
    description:
      "Shree Swami Samarth of Akkalkot — the living embodiment of Dattatreya. He appeared from the forest of Kardali with no known birth, performed countless miracles, and blessed devotees with fearlessness. His words echoed through time: 'Bhiy Kasha Re.' I am always with you.",
    attributes: ["Omnipotence", "Compassion", "Fearlessness", "Presence"],
    mantra: "जय जय स्वामी समर्थ",
    origin: "Akkalkot, Maharashtra",
  },
  {
    img: Art5,
    name: "Chhatrapati Shivaji Maharaj",
    deity: "The Great Maratha Warrior",
    color: "#ffaa33",
    glowColor: "#ffaa3388",
    tagline: "The Lion of Maharashtra",
    description:
      "Chhatrapati Shivaji Maharaj — the founder of the Maratha Empire and a visionary ruler. Known for his military genius, progressive administration, and deep respect for all faiths. He established 'Hindavi Swarajya' and inspired generations with his courage, justice, and strategic brilliance. This artwork honors his indomitable spirit and legacy.",
    attributes: ["Courage", "Strategy", "Justice", "Leadership"],
    mantra: "जय भवानी जय शिवाजी",
    origin: "Maratha Empire, 17th Century",
  },
];

// ─── COMBINED SERVICE (single card) ───────────────────
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

      {/* Hex bg */}
      <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="#00d4ff" opacity="0.07"/>
      {/* Hex border glow */}
      <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="none" stroke="#00d4ff" strokeWidth="3" opacity="0.25" filter="url(#gc)"/>
      <polygon points="90,15 155,53 155,127 90,165 25,127 25,53" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.9"/>

      {/* < bracket */}
      <polyline points="72,62 56,90 72,118" fill="none" stroke="#00d4ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" filter="url(#gc)"/>
      <polyline points="72,62 56,90 72,118" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* > bracket */}
      <polyline points="108,62 124,90 108,118" fill="none" stroke="#bf00ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" filter="url(#gp)"/>
      <polyline points="108,62 124,90 108,118" fill="none" stroke="#bf00ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* / slash */}
      <line x1="98" y1="66" x2="82" y2="114" stroke="#ff6b35" strokeWidth="5" strokeLinecap="round" opacity="0.4" filter="url(#go)"/>
      <line x1="98" y1="66" x2="82" y2="114" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>

      {/* Brush handle */}
      <line x1="140" y1="40" x2="103" y2="77" stroke="#f7df1e" strokeWidth="5" strokeLinecap="round" opacity="0.4" filter="url(#gy)"/>
      <line x1="140" y1="40" x2="103" y2="77" stroke="#f7df1e" strokeWidth="2" strokeLinecap="round"/>
      {/* Bristle */}
      <ellipse cx="96" cy="84" rx="5" ry="3" fill="#ff6b35" transform="rotate(-45 96 84)" filter="url(#go)"/>

      {/* Palette dots */}
      <circle cx="22" cy="72" r="5" fill="#ff6b35" filter="url(#go)"/>
      <circle cx="16" cy="90" r="4" fill="#f7df1e" filter="url(#gy)"/>
      <circle cx="22" cy="108" r="5" fill="#00ff88" filter="url(#gg)"/>

      {/* Pixel squares */}
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
        "React & Next.js",
        "Creative CSS Animations",
        "Glassmorphism Effects",
        "Neon & Dark UI Themes",
        "Redux / React Query",
        "Responsive & Mobile-First",
        "TypeScript & ES6+",
        "Performance Optimized",
        "Component Architecture",
        "Custom Micro-interactions",
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
        "Character Illustration",
        "Cyberpunk & Mascot Design",
        "Deity & Mythological Art",
        "Website Mascot / Avatar",
        "Brand Visual Identity",
        "AutoDesk Sketchbook",
        "Light & Shadow Mastery",
        "Concept & Branding Art",
      ],
    },
  ],
};

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
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/harshal_terekar/", color: "#bf00ff" },
  { Icon: GitHubIcon, label: "GitHub", href: "https://github.com/harshalgitcode", color: "#00ff88" },
  { Icon: EmailIcon, label: "Email", href: "mailto:#", color: "#f7df1e" },
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

// ─── ART CARD ─────────────────────────────────────────
function ArtCard({ art, isMobile }) {
  const [expanded, setExpanded] = useState(false);
  const c = art.color;

  return (
    <div
      onClick={() => setExpanded(e => !e)}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        border: `1px solid ${c}33`,
        boxShadow: expanded ? `0 0 60px ${c}44, 0 0 120px ${c}22` : `0 0 20px ${c}18`,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        background: "#050d18",
        aspectRatio: expanded ? "auto" : "4/5",
      }}
    >
      <div style={{
        position: expanded ? "relative" : "absolute",
        inset: expanded ? "auto" : 0,
        height: expanded ? "260px" : "100%",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <img
          src={art.img}
          alt={art.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: expanded ? "brightness(0.75) saturate(1.2)" : "brightness(0.6) saturate(1.3)",
            transition: "all 0.5s ease",
            transform: expanded ? "scale(1)" : "scale(1.04)",
          }}
        />
        {!expanded && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, #050d18 0%, ${c}22 40%, transparent 70%)`,
          }} />
        )}
      </div>

      {!expanded && (
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 18px", zIndex: 2 }}>
          <div style={{ height: "1px", background: `linear-gradient(90deg, ${c}, transparent)`, marginBottom: "10px" }} />
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: c, marginBottom: "4px", opacity: 0.8 }}>{art.origin}</div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "16px", fontWeight: 900, color: "#e8f4ff", letterSpacing: "1px", marginBottom: "4px" }}>{art.name}</div>
          <div style={{ fontSize: "11px", color: "#5a7a8a", letterSpacing: "1px" }}>{art.tagline}</div>
          <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "6px", color: c, fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", animation: "blink 2s infinite" }}>
            <span>TAP TO EXPLORE</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <polyline points="2,1 8,5 2,9" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {expanded && (
        <div style={{ background: `linear-gradient(180deg, #050d18 0%, ${c}0a 100%)`, animation: "expandIn 0.4s ease" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "18px 20px 0", gap: "12px" }}>
            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: c, marginBottom: "4px" }}>{art.origin}</div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "18px", fontWeight: 900, color: "#e8f4ff", letterSpacing: "1px" }}>{art.name}</div>
              <div style={{ fontSize: "12px", color: c, marginTop: "2px", fontStyle: "italic" }}>{art.tagline}</div>
            </div>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${c}55`, display: "flex", alignItems: "center", justifyContent: "center", color: c, fontSize: "14px", flexShrink: 0, marginTop: "2px", background: `${c}11` }}>✕</div>
          </div>
          <div style={{ margin: "14px 20px", height: "1px", background: `linear-gradient(90deg, ${c}88, transparent)` }} />
          <p style={{ padding: "0 20px", fontSize: "13px", color: "#8aacbc", lineHeight: 1.85 }}>{art.description}</p>
          <div style={{ padding: "14px 20px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {art.attributes.map(attr => (
              <span key={attr} style={{ padding: "5px 13px", border: `1px solid ${c}55`, borderRadius: "20px", fontSize: "10px", color: c, fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1px", background: `${c}0d` }}>{attr}</span>
            ))}
          </div>
          <div style={{ margin: "16px 20px 20px", padding: "12px 16px", border: `1px solid ${c}33`, borderRadius: "10px", background: `${c}08`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "9px", letterSpacing: "2px", color: "#4a6a7a", marginBottom: "4px" }}>MANTRA</div>
              <div style={{ fontFamily: "serif", fontSize: "16px", color: c, letterSpacing: "1px" }}>{art.mantra}</div>
            </div>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, boxShadow: `0 0 12px ${c}`, flexShrink: 0 }} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── COMBINED SERVICE CARD ─────────────────────────────
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
        position: "relative",
        borderRadius: "24px",
        padding: isMobile ? "28px 22px 36px" : "52px 52px 44px",
        border: `1px solid ${hovered ? c + "55" : c + "18"}`,
        background: hovered
          ? `linear-gradient(135deg, ${c}0d, ${ac}07, ${tc}05, #030810)`
          : `linear-gradient(135deg, ${c}06, ${ac}04, transparent)`,
        boxShadow: hovered
          ? `0 0 100px ${c}22, 0 0 200px ${c}0a, inset 0 0 80px ${c}05`
          : `0 0 40px ${c}08`,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default",
        overflow: "hidden",
        animation: "fadeInUp 0.7s ease both",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: -1, left: "30px",
        width: hovered ? "70%" : "45%", height: "2px",
        background: `linear-gradient(90deg, ${c}, ${ac}88, ${tc}55, transparent)`,
        boxShadow: `0 0 12px ${c}`,
        transition: "width 0.6s ease",
      }} />

      {/* Corner brackets */}
      <div style={{ position: "absolute", top: "20px", right: "20px", width: "36px", height: "36px", borderTop: `1px solid ${c}55`, borderRight: `1px solid ${c}55`, borderRadius: "0 10px 0 0", opacity: hovered ? 1 : 0.25, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", width: "36px", height: "36px", borderBottom: `1px solid ${ac}55`, borderLeft: `1px solid ${ac}55`, borderRadius: "0 0 0 10px", opacity: hovered ? 1 : 0.25, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "24px", height: "24px", borderBottom: `1px solid ${tc}44`, borderRight: `1px solid ${tc}44`, borderRadius: "0 0 6px 0", opacity: hovered ? 0.7 : 0.15, transition: "opacity 0.3s" }} />

      {/* Background orbit circles */}
      <div style={{
        position: "absolute", right: isMobile ? "-60px" : "-20px", top: "50%",
        transform: "translateY(-50%)",
        opacity: hovered ? 0.06 : 0.025, transition: "opacity 0.5s", pointerEvents: "none",
      }}>
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

      {/* TOP ROW: Dual Icons + Tag */}
      <div style={{
        display: "flex", alignItems: "flex-start",
        justifyContent: "space-between", marginBottom: "32px", gap: "16px",
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: "14px", alignItems: "center", position: "relative" }}>
          {service.icons.map((icon, i) => (
            <div key={i} style={{
              width: "70px", height: "70px",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "16px",
              background: i === 0 ? `${c}08` : `${tc}08`,
              border: `1px solid ${i === 0 ? c : tc}33`,
              boxShadow: hovered ? `0 0 24px ${i === 0 ? c : tc}22` : "none",
              filter: hovered
                ? `drop-shadow(0 0 12px ${i === 0 ? c : tc})`
                : `drop-shadow(0 0 4px ${i === 0 ? c : tc}44)`,
              transition: "all 0.4s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              flexShrink: 0,
            }}>
              {icon}
            </div>
          ))}
        </div>

        {/* Tag badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "8px 18px",
          border: `1px solid ${c}44`,
          borderRadius: "30px",
          fontSize: "9px", color: c,
          fontFamily: "'Share Tech Mono', monospace", letterSpacing: "2.5px",
          background: `${c}0d`, flexShrink: 0,
          boxShadow: hovered ? `0 0 18px ${c}44` : "none",
          transition: "box-shadow 0.3s",
        }}>
          <div style={{
            width: "5px", height: "5px", borderRadius: "50%",
            background: c, boxShadow: `0 0 8px ${c}`,
            animation: "blink 2s infinite",
          }} />
          {service.tag}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: isMobile ? "20px" : "clamp(22px, 2.8vw, 36px)",
        fontWeight: 900, letterSpacing: "2px",
        color: "#e8f4ff", lineHeight: 1.15, marginBottom: "8px",
        textShadow: hovered ? `0 0 40px ${c}77` : "none",
        transition: "text-shadow 0.4s",
      }}>{service.title}</h3>

      <div style={{
        fontSize: "12px", color: service.subtitleColor || ac,
        fontFamily: "'Share Tech Mono', monospace", letterSpacing: "1.5px",
        marginBottom: "24px", opacity: 0.9,
        filter: `drop-shadow(0 0 8px ${service.subtitleColor || ac})`,
      }}>{service.subtitle}</div>
      {/* Tri-color bar */}
      <div style={{
        display: "flex", height: "3px", borderRadius: "2px",
        marginBottom: "24px", overflow: "hidden",
        opacity: hovered ? 1 : 0.4, transition: "opacity 0.4s",
      }}>
        <div style={{ flex: 1, background: c, boxShadow: `0 0 8px ${c}` }} />
        <div style={{ flex: 1, background: ac, boxShadow: `0 0 8px ${ac}` }} />
        <div style={{ flex: 1, background: tc, boxShadow: `0 0 8px ${tc}` }} />
      </div>

      {/* Highlight quote */}
      <div style={{
        padding: "12px 18px",
        borderLeft: `3px solid ${c}`,
        background: `${c}08`,
        borderRadius: "0 10px 10px 0",
        marginBottom: "24px",
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "13px", color: c, letterSpacing: "1px",
        opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s",
      }}>
        // {service.highlight}
      </div>

      {/* Description */}
      <p style={{ fontSize: "14px", color: "#7a9aaa", lineHeight: 2, marginBottom: "36px" }}>
        {service.description}
      </p>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, ${c}55, ${ac}44, ${tc}33, transparent)`,
        marginBottom: "32px",
      }} />

      {/* Feature Groups */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: "28px",
      }}>
        {service.featureGroups.map((group) => (
          <div key={group.heading}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", paddingBottom: "14px", borderBottom: `1px solid ${group.color}22` }}>
              <div style={{
                width: "48px", height: "48px", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "12px",
                background: `${group.color}08`,
                border: `1px solid ${group.color}44`,
                boxShadow: hovered ? `0 0 15px ${group.color}20` : "none",
                transition: "box-shadow 0.3s",
              }}>
                {group.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Orbitron', monospace", fontSize: "10px", color: group.color, letterSpacing: "2.5px", lineHeight: 1.4, marginBottom: "6px" }}>{group.heading}</h4>
                <div style={{ height: "2px", width: "36px", background: `linear-gradient(90deg, ${group.color}88, transparent)` }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.items.map((feat, i) => (
                <div key={feat} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 14px",
                  border: `1px solid ${group.color}22`,
                  borderRadius: "8px",
                  fontSize: "11.5px",
                  color: hovered ? group.color : "#4a6a7a",
                  fontFamily: "'Share Tech Mono', monospace",
                  background: hovered ? `${group.color}08` : "transparent",
                  transition: `all 0.2s ease ${i * 0.025}s`,
                }}>
                  <div style={{
                    width: "4px", height: "4px", borderRadius: "50%",
                    background: group.color, flexShrink: 0,
                    opacity: hovered ? 1 : 0.35,
                    boxShadow: hovered ? `0 0 6px ${group.color}` : "none",
                    transition: "all 0.2s",
                  }} />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom glow line */}
      <div style={{
        position: "absolute", bottom: -1, right: "30px",
        width: hovered ? "55%" : "30%", height: "1px",
        background: `linear-gradient(270deg, ${tc}, ${ac}66, transparent)`,
        boxShadow: `0 0 8px ${tc}`,
        transition: "width 0.6s ease",
      }} />
    </div>
  );
}

// ─── MAIN PORTFOLIO COMPONENT ─────────────────────────
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

      {/* HERO */}
      <section id="home" className="section" style={{ display: "flex", alignItems: "center", paddingTop: "60px", minHeight: "100vh" }}>
        <HexGrid />
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", zIndex: 1, flexDirection: isMobile ? "column-reverse" : "row", textAlign: isMobile ? "center" : "left", paddingTop: isMobile ? "20px" : "0" }}>
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

      {/* SERVICES — COMBINED SINGLE CARD */}
      <section id="services" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="SERVICES.EXE" subtitle="What I Offer" />

          <div style={{ marginTop: "50px" }}>
            <CombinedServiceCard service={combinedService} isMobile={isMobile} />
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: "50px", padding: "32px",
            border: "1px solid #00d4ff22", borderRadius: "12px",
            background: "linear-gradient(135deg, #00d4ff06, transparent)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "20px", position: "relative", overflow: "hidden",
          }}>
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

      {/* ARTWORK */}
      <section id="artwork" className="section">
        <HexGrid />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader title="DIVINE.ARTWORKS" subtitle="Digital Art Gallery" />
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "14px" : "20px",
            alignItems: "start",
            marginTop: "50px",
          }}>
            {artworks.map((art, i) => (
              <div key={art.name} style={{ animation: `fadeInUp 0.6s ease ${i * 0.12}s both` }} className="art-card-hover">
                <ArtCard art={art} isMobile={isMobile} />
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

      <footer style={{ textAlign: "center", padding: "28px 5%", borderTop: "1px solid #00d4ff11", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#2a4a5a", letterSpacing: "2px" }}>
        © 2026 &nbsp;|&nbsp; HARSHAL.DEV &nbsp;|&nbsp; BUILT WITH REACT
      </footer>
    </div>
  );
}

