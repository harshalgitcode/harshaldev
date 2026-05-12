import { useState } from "react";
import Art1 from "./Images/Art1.webp";
import Art2 from "./Images/Art2.webp";
import Art3 from "./Images/Art3.webp";
import Art4 from "./Images/Art4.webp";
import Art5 from "./Images/Art5.webp";

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

const HexGrid = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
    <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
      <defs>
        <pattern id="hex-artwork" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,46 30,61 2,46 2,17" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-artwork)" />
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

function ArtCard({ art, isMobile }) {
  const [expanded, setExpanded] = useState(false);
  const c = art.color;

  return (
    <div
      onClick={() => setExpanded(e => !e)}
      style={{
        position: "relative", borderRadius: "16px", overflow: "hidden", cursor: "pointer",
        border: `1px solid ${c}33`,
        boxShadow: expanded ? `0 0 60px ${c}44, 0 0 120px ${c}22` : `0 0 20px ${c}18`,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        background: "#050d18",
        aspectRatio: expanded ? "auto" : "4/5",
      }}
    >
      <div style={{ position: expanded ? "relative" : "absolute", inset: expanded ? "auto" : 0, height: expanded ? "260px" : "100%", overflow: "hidden", flexShrink: 0 }}>
        <img src={art.img} alt={art.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: expanded ? "brightness(0.75) saturate(1.2)" : "brightness(0.6) saturate(1.3)", transition: "all 0.5s ease", transform: expanded ? "scale(1)" : "scale(1.04)" }} />
        {!expanded && (
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, #050d18 0%, ${c}22 40%, transparent 70%)` }} />
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

export default function Artwork({ isMobile }) {
  return (
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
  );
}