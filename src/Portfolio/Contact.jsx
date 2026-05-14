import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── APNI EMAILJS DETAILS YAHAN BHARO ───────────────
const EMAILJS_SERVICE_ID = "service_g4hlvge";
const EMAILJS_TEMPLATE_ID = "template_4mdjvkr";
const EMAILJS_PUBLIC_KEY = "rkLg4SROtft2hSXYY";
// ────────────────────────────────────────────────────

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

const SuccessIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const ErrorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4466" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const LoadingSpinner = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin-slow 1s linear infinite" }}>
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("All fields are required..");
      setTimeout(() => setStatus("idle"), 3500);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address..");
      setTimeout(() => setStatus("idle"), 3500);
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message, reply_to: email },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMsg("Message was not sent. Please try again..");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    background: "#0a1520",
    border: "1px solid #1a2a3a",
    borderRadius: "6px",
    color: "#c8d8e8",
    fontSize: "14px",
    fontFamily: "'Share Tech Mono', monospace",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="section" style={{ display: "flex", alignItems: "center" }}>
      <HexGrid />

      {/* Scoped heading animations only — no effect on other sections */}
      <style>{`
        @keyframes contact-title-glow {
          0%,100% { filter: drop-shadow(0 0 20px #00d4ff44); }
          50%      { filter: drop-shadow(0 0 40px #00d4ffaa); }
        }
        @keyframes contact-bar-shimmer {
          0%,100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
      `}</style>

      <div style={{ maxWidth: "680px", margin: "0 auto", width: "100%", textAlign: "center" }}>

        {/* ── NEW HEADING ── */}
        <div style={{ marginBottom: "48px" }}>

          {/* Subtitle line */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            fontSize: "11px", letterSpacing: "3px", color: "#00d4ff",
            fontFamily: "'Share Tech Mono', monospace", marginBottom: "14px",
          }}>
            <div style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff)", boxShadow: "0 0 8px #00d4ff" }} />
            CONNECT WITH ME
            <div style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #00d4ff, transparent)", boxShadow: "0 0 8px #00d4ff" }} />
          </div>

          {/* Main title */}
          <h2 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "clamp(26px, 5vw, 52px)",
            fontWeight: 900,
            letterSpacing: "4px",
            margin: 0,
            background: "linear-gradient(135deg, #e8f4ff 0%, #00d4ff 45%, #bf00ff 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "contact-title-glow 4s ease-in-out infinite",
          }}>
            ESTABLISH.LINK
          </h2>

          {/* Animated underbar dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "16px" }}>
            <div style={{
              width: "60px", height: "2px", borderRadius: "2px",
              background: "linear-gradient(90deg, #00d4ff, #bf00ff)",
              boxShadow: "0 0 12px #00d4ff, 0 0 24px #bf00ff44",
              animation: "contact-bar-shimmer 3s ease-in-out infinite",
            }} />
            <div style={{ width: "10px", height: "2px", borderRadius: "2px", background: "#00d4ff44" }} />
            <div style={{ width: "6px", height: "2px", borderRadius: "2px", background: "#00d4ff22" }} />
          </div>
        </div>

        {/* ── ORIGINAL FORM — exact same as before ── */}
        <GlowCard style={{ textAlign: "left" }}>
          <div style={{ display: "grid", gap: "18px" }}>

            {/* NAME */}
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>NAME</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name..."
                disabled={isLoading}
                style={{ ...inputStyle, opacity: isLoading ? 0.6 : 1 }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>EMAIL</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your address..."
                disabled={isLoading}
                style={{ ...inputStyle, opacity: isLoading ? 0.6 : 1 }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", display: "block", marginBottom: "8px" }}>MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Transmit your message..."
                disabled={isLoading}
                style={{ ...inputStyle, resize: "vertical", opacity: isLoading ? 0.6 : 1 }}
                onFocus={e => e.target.style.borderColor = "#00d4ff44"}
                onBlur={e => e.target.style.borderColor = "#1a2a3a"}
              />
            </div>

            {/* STATUS BANNERS */}
            {status === "success" && (
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", border: "1px solid #00ff8855", borderRadius: "8px", background: "#00ff8808", animation: "fadeInUp 0.4s ease" }}>
                <SuccessIcon />
                <div>
                  <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "11px", color: "#00ff88", letterSpacing: "1.5px", marginBottom: "2px" }}>TRANSMISSION COMPLETE</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#00ff8888" }}>Message successfully sent! You'll receive a reply soon.</div>
                </div>
              </div>
            )}
            {status === "error" && (
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", border: "1px solid #ff446655", borderRadius: "8px", background: "#ff446608", animation: "fadeInUp 0.4s ease" }}>
                <ErrorIcon />
                <div>
                  <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "11px", color: "#ff4466", letterSpacing: "1.5px", marginBottom: "2px" }}>TRANSMISSION FAILED</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", color: "#ff446688" }}>{errorMsg}</div>
                </div>
              </div>
            )}

            {/* DIVIDER */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "4px 0" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff33, transparent)" }} />
              <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#4a6a7a", fontFamily: "'Share Tech Mono', monospace" }}>CONNECT VIA</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff33, transparent)" }} />
            </div>

            {/* SOCIAL LINKS */}
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

            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00d4ff44, transparent)", margin: "4px 0" }} />

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || status === "success"}
              style={{
                padding: "13px 40px",
                background: isLoading
                  ? "#00d4ff11"
                  : status === "success"
                  ? "#00ff8822"
                  : "linear-gradient(90deg, #00d4ff22, #00d4ff11)",
                border: `1px solid ${status === "success" ? "#00ff88" : "#00d4ff"}`,
                color: status === "success" ? "#00ff88" : "#00d4ff",
                fontFamily: "'Orbitron', monospace",
                fontSize: "12px",
                letterSpacing: "3px",
                cursor: isLoading || status === "success" ? "not-allowed" : "pointer",
                borderRadius: "6px",
                textTransform: "uppercase",
                transition: "all 0.3s",
                width: "100%",
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                opacity: isLoading ? 0.8 : 1,
              }}
              onMouseEnter={e => {
                if (!isLoading && status !== "success") {
                  e.currentTarget.style.background = "#00d4ff22";
                  e.currentTarget.style.boxShadow = "0 0 30px #00d4ff44";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = status === "success" ? "#00ff8822" : "linear-gradient(90deg, #00d4ff22, #00d4ff11)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {isLoading && <LoadingSpinner />}
              {status === "idle" && "TRANSMIT MESSAGE →"}
              {status === "loading" && "TRANSMITTING..."}
              {status === "success" && <><SuccessIcon /> TRANSMITTED</>}
              {status === "error" && "TRANSMIT MESSAGE →"}
            </button>

          </div>
        </GlowCard>

      </div>
    </section>
  );
}
