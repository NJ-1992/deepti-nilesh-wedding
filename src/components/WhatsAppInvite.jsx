"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
//  The full invitation text that gets sent on WhatsApp
// ─────────────────────────────────────────────
const INVITATION_MESSAGE = `🌸✨ *Wedding Invitation* ✨🌸

With God's grace, and with the blessings of our families and elders, we are delighted to invite you to celebrate the wedding of

💍 *Deepti & Nilesh* 💍

_"As we begin this beautiful journey of love, togetherness, and lifelong companionship, your gracious presence and blessings would make our celebration even more special"_

📅 *Date:* Monday, 6th July 2026
📍 *Venue:* Arjun Palace, Near Collectorate, Katni, M.P.

We would be truly honoured to have you join us on this special day and be a part of the celebration that means the world to us.

Your love, presence and blessings are what make this day truly magical. 🌹

🌐 *For all details, schedule & more:*
👉 https://deepti-nilesh-wedding-wnhl.vercel.app/

With warmth & love,
*Deepti & Nilesh* 💕`;

// ─────────────────────────────────────────────
//  WhatsApp Icon SVG
// ─────────────────────────────────────────────
function WhatsAppIcon({ size = 22, color = "#fff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  Copy Icon SVG
// ─────────────────────────────────────────────
function CopyIcon({ size = 18, color = "#C8955A" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  Check Icon SVG (for "Copied!" state)
// ─────────────────────────────────────────────
function CheckIcon({ size = 18, color = "#4CAF50" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  Main Component
// ─────────────────────────────────────────────
export default function WhatsAppInvite() {
  const [copied, setCopied] = useState(false);

  // Opens WhatsApp with the invitation pre-filled
  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(INVITATION_MESSAGE);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  // Copies the plain text to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITATION_MESSAGE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = INVITATION_MESSAGE;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section style={styles.section}>
      {/* ── Section Header ── */}
      <p style={styles.eyebrow}>Share the Joy</p>
      <h2 style={styles.heading}>Send Our Invitation</h2>
      <p style={styles.subText}>
        Tap the button below to instantly share our invitation with family &amp; friends on WhatsApp.
      </p>

      {/* ── Invitation Preview Card ── */}
      <div style={styles.previewCard}>
        {/* Card top bar (mimics a WhatsApp bubble) */}
        <div style={styles.previewBar}>
          <WhatsAppIcon size={16} color="#25D366" />
          <span style={styles.previewBarLabel}>WhatsApp Preview</span>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Message preview — rendered line by line */}
        <pre style={styles.previewText}>{INVITATION_MESSAGE}</pre>
      </div>

      {/* ── Action Buttons ── */}
      <div style={styles.buttonRow}>
        {/* Primary: Share on WhatsApp */}
        <button onClick={handleWhatsAppShare} style={styles.whatsappBtn}>
          <WhatsAppIcon size={20} color="#fff" />
          <span>Share on WhatsApp</span>
        </button>

        {/* Secondary: Copy text */}
        <button
          onClick={handleCopy}
          style={{
            ...styles.copyBtn,
            ...(copied ? styles.copyBtnCopied : {}),
          }}
        >
          {copied ? (
            <>
              <CheckIcon size={18} color="#4CAF50" />
              <span style={{ color: "#4CAF50" }}>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon size={18} color="#C8955A" />
              <span>Copy Text</span>
            </>
          )}
        </button>
      </div>

      {/* ── Footer note ── */}
      <p style={styles.footerNote}>
        WhatsApp will open with this message pre-filled — just choose your contacts and send 💕
      </p>
    </section>
  );
}

// ─────────────────────────────────────────────
//  Styles  (inline — no CSS framework needed)
// ─────────────────────────────────────────────
const styles = {
  section: {
    maxWidth: "620px",
    margin: "0 auto",
    padding: "64px 24px",
    textAlign: "center",
    fontFamily: "'Lato', 'Helvetica Neue', sans-serif",
  },

  eyebrow: {
    fontSize: "11px",
    letterSpacing: "5px",
    textTransform: "uppercase",
    color: "#C8955A",
    margin: "0 0 14px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
    color: "#2C1A3A",
    margin: "0 0 12px",
    lineHeight: 1.2,
  },

  subText: {
    fontSize: "15px",
    color: "#8A7A6A",
    lineHeight: 1.7,
    margin: "0 0 36px",
    maxWidth: "440px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  // ── Preview card ──
  previewCard: {
    background: "#FDF8F2",
    border: "1px solid #D4B07A",
    borderRadius: "12px",
    textAlign: "left",
    marginBottom: "28px",
    overflow: "hidden",
  },

  previewBar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 18px",
    background: "#F5EFE6",
  },

  previewBarLabel: {
    fontSize: "12px",
    letterSpacing: "1px",
    color: "#8A7A6A",
    textTransform: "uppercase",
  },

  divider: {
    height: "1px",
    background: "#E8D8C4",
  },

  previewText: {
    fontSize: "13.5px",
    lineHeight: "1.75",
    color: "#3A2A1A",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    margin: "0",
    padding: "20px 22px 24px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "400",
  },

  // ── Buttons ──
  buttonRow: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  whatsappBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "14px 28px",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    cursor: "pointer",
    fontFamily: "'Lato', sans-serif",
    transition: "background 0.2s, transform 0.1s",
  },

  copyBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "transparent",
    color: "#C8955A",
    border: "1.5px solid #C8955A",
    borderRadius: "50px",
    padding: "13px 26px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    fontFamily: "'Lato', sans-serif",
    transition: "border-color 0.2s, color 0.2s",
  },

  copyBtnCopied: {
    borderColor: "#4CAF50",
    color: "#4CAF50",
  },

  footerNote: {
    fontSize: "13px",
    color: "#B0A090",
    lineHeight: 1.6,
    margin: "0",
  },
};
