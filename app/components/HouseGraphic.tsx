export default function HouseGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* ── GROUND ── */}
      <rect x="0" y="455" width="1400" height="45" fill="#D8D4CC" />

      {/* ── GARAGE — bleeds off left edge ── */}
      <rect x="-100" y="248" width="530" height="207" fill="#DEDAD2" />
      <rect x="-100" y="295" width="515" height="160" fill="#C8C4BC" />
      <line x1="-100" y1="330" x2="430" y2="330" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-100" y1="353" x2="430" y2="353" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-100" y1="376" x2="430" y2="376" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-100" y1="399" x2="430" y2="399" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-100" y1="422" x2="430" y2="422" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="158" y1="295" x2="158" y2="455" stroke="#B0B0A8" strokeWidth="2" />
      <polygon points="-100,248 430,248 430,238 -100,238" fill="#1A1A1A" />

      {/* ── MAIN HOUSE BODY — shifted right ── */}
      <rect x="410" y="190" width="560" height="265" fill="#E8E4DC" />

      {/* Chimney left */}
      <rect x="472" y="72" width="42" height="100" fill="#2A2A2A" />
      <rect x="464" y="65" width="58" height="13" fill="#1A1A1A" />

      {/* Chimney right */}
      <rect x="860" y="88" width="38" height="85" fill="#2A2A2A" />
      <rect x="853" y="82" width="52" height="12" fill="#1A1A1A" />

      {/* Main roof */}
      <polygon points="388,190 690,38 992,190" fill="#1A1A1A" />
      <line x1="388" y1="190" x2="992" y2="190" stroke="#333" strokeWidth="2" />

      {/* ── FIRST FLOOR WINDOWS ── */}
      <rect x="435" y="208" width="95" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="482" y1="208" x2="482" y2="278" stroke="#888" strokeWidth="1" />
      <line x1="435" y1="243" x2="530" y2="243" stroke="#888" strokeWidth="1" />

      <rect x="642" y="202" width="96" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="690" y1="202" x2="690" y2="272" stroke="#888" strokeWidth="1" />
      <line x1="642" y1="237" x2="738" y2="237" stroke="#888" strokeWidth="1" />

      <rect x="850" y="208" width="95" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="897" y1="208" x2="897" y2="278" stroke="#888" strokeWidth="1" />
      <line x1="850" y1="243" x2="945" y2="243" stroke="#888" strokeWidth="1" />

      {/* ── GROUND FLOOR WINDOWS ── */}
      <rect x="425" y="308" width="110" height="90" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="480" y1="308" x2="480" y2="398" stroke="#999" strokeWidth="1" />
      <line x1="425" y1="353" x2="535" y2="353" stroke="#999" strokeWidth="1" />

      <rect x="855" y="308" width="110" height="90" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="910" y1="308" x2="910" y2="398" stroke="#999" strokeWidth="1" />
      <line x1="855" y1="353" x2="965" y2="353" stroke="#999" strokeWidth="1" />

      {/* ── FRONT DOOR ── */}
      <rect x="635" y="308" width="110" height="147" rx="2" fill="#1A1A1A" />
      <rect x="644" y="317" width="42" height="62" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="694" y="317" width="43" height="62" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="644" y="386" width="93" height="63" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <circle cx="676" cy="380" r="6" fill="#C8A040" />
      <path d="M635,320 Q690,272 745,320" fill="#C8A040" fillOpacity="0.12" stroke="#C8A040" strokeWidth="2" />
      <path d="M644,320 Q690,282 736,320" fill="none" stroke="#C8A040" strokeWidth="1" strokeDasharray="4 3" />

      {/* Step + path */}
      <rect x="620" y="453" width="140" height="10" rx="2" fill="#C8C4BC" />
      <path d="M635,455 L600,490 L780,490 L745,455 Z" fill="#C8C4BC" />

      {/* Bushes */}
      <ellipse cx="450" cy="450" rx="50" ry="22" fill="#5A7A4A" fillOpacity="0.55" />
      <ellipse cx="935" cy="450" rx="50" ry="22" fill="#5A7A4A" fillOpacity="0.55" />

      {/* Ground shadow */}
      <ellipse cx="690" cy="458" rx="300" ry="12" fill="#111111" fillOpacity="0.06" />

      {/* ── TREES — bleeding off right edge ── */}
      {/* Tree 1 */}
      <rect x="1060" y="320" width="18" height="135" fill="#6B4C2A" />
      <ellipse cx="1069" cy="298" rx="58" ry="72" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="1069" cy="278" rx="44" ry="56" fill="#4A6A35" fillOpacity="0.7" />

      {/* Tree 2 */}
      <rect x="1185" y="290" width="22" height="165" fill="#6B4C2A" />
      <ellipse cx="1196" cy="262" rx="74" ry="92" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="1196" cy="238" rx="57" ry="72" fill="#4A6A35" fillOpacity="0.7" />

      {/* Tree 3 — partially cut off right */}
      <rect x="1348" y="275" width="24" height="180" fill="#6B4C2A" />
      <ellipse cx="1360" cy="245" rx="88" ry="108" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="1360" cy="218" rx="68" ry="84" fill="#4A6A35" fillOpacity="0.7" />
    </svg>
  );
}
