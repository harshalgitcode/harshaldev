import { useState, useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Artwork from "./Artwork";
import Contact from "./Contact";

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

const ScanLine = () => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", animation: "scan 4s linear infinite", zIndex: 9999, pointerEvents: "none", opacity: 0.4 }} />
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

const ScrollToTop = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00d4ff22, #bf00ff22)",
        border: "1px solid #00d4ff66",
        backdropFilter: "blur(8px)",
        cursor: "pointer",
        display: show ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        transition: "all 0.3s ease",
        boxShadow: "0 0 20px #00d4ff33",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 30px #00d4ff66";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 0 20px #00d4ff33";
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00d4ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default function Portfolio() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = ["home", "about", "skills", "services", "artwork", "contact"];
  const navLabels = { home: "HOME", about: "ABOUT", skills: "SKILLS", services: "SERVICES", artwork: "ARTWORK", contact: "CONTACT" };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  // ✅ FIXED: threshold 0 + rootMargin instead of threshold 0.3
  // Mobile landscape mein section viewport se taller hoti hai,
  // isliye 0.3 threshold kabhi fire nahi hota tha.
  // rootMargin "-40% 0px -40% 0px" matlab sirf viewport ka middle 20%
  // count hoga — screen ke center pe jo section ho wahi active hogi.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px",
      }
    );
    sections.forEach(s => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });
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
        @keyframes logoFlicker { 0%,93%,100%{opacity:1} 94%{opacity:.6} 95%{opacity:1} 96%{opacity:.8} 97%{opacity:1} }
        @keyframes hexSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes dotPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.7);opacity:.5} }
        @keyframes menuItemIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
        @keyframes menuSlide { from{opacity:0;transform:translateY(-12px) scaleY(0.94)} to{opacity:1;transform:translateY(0) scaleY(1)} }
        @keyframes footerScan { 0%{left:-60%} 100%{left:120%} }
        @keyframes bounceUp {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-5px)}
        }
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
        .nav-btn { background:none; border:1px solid transparent; cursor:pointer; padding:6px 13px; display:flex; align-items:center; gap:7px; border-radius:6px; transition:all 0.3s ease; }
        .nav-btn:hover .nav-label { color:#00d4ff !important; text-shadow:0 0 12px #00d4ff88; }
        .nav-btn:hover .nav-dash  { width:16px !important; background:#00d4ff55 !important; }
        .nav-btn:hover { background:#00d4ff09; border-color:#00d4ff1a; }
        .footer-wrap { position:relative; overflow:hidden; }
        .footer-sweep { position:absolute; top:0; height:100%; width:50%; background:linear-gradient(90deg,transparent,#00d4ff06,transparent); animation:footerScan 6s linear infinite; pointer-events:none; }
      `}</style>

      <ScanLine />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "#030d1af4" : "#030810f0", backdropFilter: "blur(20px)", borderBottom: `1px solid ${scrolled ? "#00d4ff22" : "#00d4ff0f"}`, boxShadow: scrolled ? "0 4px 40px #000000aa" : "none", transition: "all 0.4s ease" }}>
        
        {/* LOGO */}
        <div onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: "11px", flexShrink: 0, cursor: "pointer" }}>
          <div style={{ width: "34px", height: "34px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" style={{ position: "absolute", animation: "hexSpin 12s linear infinite" }}>
              <polygon points="17,2 31,9.5 31,24.5 17,32 3,24.5 3,9.5" stroke="#00d4ff44" strokeWidth="1" fill="none" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <polygon points="11,2 20,7 20,15 11,20 2,15 2,7" stroke="#00d4ff" strokeWidth="1.2" fill="#00d4ff0d" />
              <circle cx="11" cy="11" r="2" fill="#00d4ff" style={{ filter: "drop-shadow(0 0 4px #00d4ff)" }} />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "15px", fontWeight: 900, letterSpacing: "3px", lineHeight: 1, animation: "logoFlicker 9s ease-in-out infinite" }}>
              <span style={{ color: "#ddeeff" }}>HARSHAL</span>
              <span style={{ color: "#00d4ff", textShadow: "0 0 14px #00d4ff" }}>.</span>
              <span style={{ background: "linear-gradient(135deg,#00d4ff,#bf00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>DEV</span>
            </div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div style={{ display: isMobile ? "none" : "flex", gap: "2px", alignItems: "center" }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-btn" style={{ background: activeSection === s ? "#00d4ff15" : "none", border: activeSection === s ? "1px solid #00d4ff33" : "1px solid transparent", boxShadow: activeSection === s ? "0 0 18px #00d4ff15" : "none" }}>
              <div className="nav-dash" style={{ width: activeSection === s ? "18px" : "5px", height: "1.5px", background: activeSection === s ? "linear-gradient(90deg,#00d4ff,#bf00ff)" : "#253545", boxShadow: activeSection === s ? "0 0 8px #00d4ff" : "none", transition: "all 0.3s", borderRadius: "1px" }} />
              <span className="nav-label" style={{ fontSize: "9.5px", letterSpacing: "2.5px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#3a5565", fontFamily: "'Share Tech Mono', monospace", transition: "color 0.3s", textShadow: activeSection === s ? "0 0 10px #00d4ff88" : "none" }}>{navLabels[s]}</span>
            </button>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button ref={btnRef} onClick={() => setMenuOpen(o => !o)} style={{ display: isMobile ? "flex" : "none", alignItems: "center", justifyContent: "center", background: menuOpen ? "#00d4ff18" : "none", border: `1px solid ${menuOpen ? "#00d4ff55" : "#00d4ff33"}`, borderRadius: "8px", padding: "8px 10px", cursor: "pointer", color: "#00d4ff", lineHeight: 0, transition: "all 0.3s", boxShadow: menuOpen ? "0 0 20px #00d4ff44" : "none" }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && isMobile && (
        <div ref={menuRef} id="mobile-menu" style={{ position: "fixed", top: "60px", left: 0, right: 0, zIndex: 999, background: "#030d18fc", backdropFilter: "blur(24px)", borderBottom: "1px solid #00d4ff22", padding: "8px 5% 20px", boxShadow: "0 24px 60px #000000cc" }}>
          {sections.map((s, i) => (
            <button key={s} onClick={() => scrollTo(s)} className="menu-item" style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%", background: activeSection === s ? "#00d4ff0c" : "none", border: "none", borderBottom: "1px solid #00d4ff0d", borderRadius: activeSection === s ? "6px" : "0", cursor: "pointer", padding: "14px 10px", animationDelay: `${i * 0.04}s`, transition: "background 0.2s" }}>
              <div style={{ width: activeSection === s ? "24px" : "10px", height: "1.5px", background: activeSection === s ? "linear-gradient(90deg,#00d4ff,#bf00ff)" : "#1a2e3e", boxShadow: activeSection === s ? "0 0 8px #00d4ff" : "none", flexShrink: 0, transition: "all 0.3s", borderRadius: "1px" }} />
              <span style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: activeSection === s ? "#00d4ff" : "#3a5a6a", fontFamily: "'Share Tech Mono', monospace", textShadow: activeSection === s ? "0 0 10px #00d4ff66" : "none", transition: "color 0.3s" }}>{navLabels[s]}</span>
              {activeSection === s && <div style={{ marginLeft: "auto", width: "5px", height: "5px", borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 8px #00d4ff", animation: "dotPulse 1.8s ease-in-out infinite" }} />}
            </button>
          ))}
        </div>
      )}

      {/* SECTIONS */}
      <Home isMobile={isMobile} glitch={glitch} scrollTo={scrollTo} />
      <About isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Services isMobile={isMobile} scrollTo={scrollTo} />
      <Artwork isMobile={isMobile} />
      <Contact />

      {/* SCROLL TO TOP */}
      <ScrollToTop show={showScrollTop} />

      {/* FOOTER */}
      <footer>
        <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,#00d4ff77,#bf00ff44,transparent)", boxShadow: "0 0 14px #00d4ff44" }} />
        <div className="footer-wrap" style={{ padding: "26px 5% 22px" }}>
          <div className="footer-sweep" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#00d4ff" }}>© 2026</span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#00d4ff" }}>HARSHAL.DEV</span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#00d4ff" }}>BUILT WITH REACT</span>
          </div>
        </div>
        <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,#bf00ff33,transparent)" }} />
      </footer>
    </div>
  );
}

