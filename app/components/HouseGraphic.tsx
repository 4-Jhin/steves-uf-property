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

      {/* ── GARAGE WING — extends off left edge ── */}
      <rect x="-20" y="255" width="310" height="200" fill="#DEDAD2" />
      {/* Garage door panels */}
      <rect x="-20" y="300" width="295" height="155" fill="#C8C4BC" />
      <line x1="-20" y1="335" x2="275" y2="335" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-20" y1="358" x2="275" y2="358" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-20" y1="381" x2="275" y2="381" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-20" y1="404" x2="275" y2="404" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="-20" y1="427" x2="275" y2="427" stroke="#B0B0A8" strokeWidth="2" />
      <line x1="118" y1="300" x2="118" y2="455" stroke="#B0B0A8" strokeWidth="2" />
      {/* Garage roof lean */}
      <polygon points="-20,255 290,255 290,245 -20,245" fill="#1A1A1A" />

      {/* ── MAIN HOUSE BODY ── */}
      <rect x="270" y="190" width="560" height="265" fill="#E8E4DC" />

      {/* Chimney left */}
      <rect x="330" y="72" width="42" height="100" fill="#2A2A2A" />
      <rect x="322" y="65" width="58" height="13" fill="#1A1A1A" />

      {/* Chimney right */}
      <rect x="720" y="88" width="38" height="85" fill="#2A2A2A" />
      <rect x="713" y="82" width="52" height="12" fill="#1A1A1A" />

      {/* Main roof */}
      <polygon points="248,190 550,38 852,190" fill="#1A1A1A" />
      <line x1="248" y1="190" x2="852" y2="190" stroke="#333" strokeWidth="2" />

      {/* ── FIRST FLOOR WINDOWS ── */}
      <rect x="295" y="208" width="95" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="342" y1="208" x2="342" y2="278" stroke="#888" strokeWidth="1" />
      <line x1="295" y1="243" x2="390" y2="243" stroke="#888" strokeWidth="1" />

      <rect x="502" y="202" width="96" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="550" y1="202" x2="550" y2="272" stroke="#888" strokeWidth="1" />
      <line x1="502" y1="237" x2="598" y2="237" stroke="#888" strokeWidth="1" />

      <rect x="710" y="208" width="95" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="757" y1="208" x2="757" y2="278" stroke="#888" strokeWidth="1" />
      <line x1="710" y1="243" x2="805" y2="243" stroke="#888" strokeWidth="1" />

      {/* ── GROUND FLOOR WINDOWS ── */}
      <rect x="285" y="308" width="110" height="90" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="340" y1="308" x2="340" y2="398" stroke="#999" strokeWidth="1" />
      <line x1="285" y1="353" x2="395" y2="353" stroke="#999" strokeWidth="1" />

      <rect x="715" y="308" width="110" height="90" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="770" y1="308" x2="770" y2="398" stroke="#999" strokeWidth="1" />
      <line x1="715" y1="353" x2="825" y2="353" stroke="#999" strokeWidth="1" />

      {/* ── FRONT DOOR ── */}
      <rect x="495" y="308" width="110" height="147" rx="2" fill="#1A1A1A" />
      <rect x="504" y="317" width="42" height="62" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="554" y="317" width="43" height="62" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="504" y="386" width="93" height="63" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <circle cx="536" cy="380" r="6" fill="#C8A040" />
      <path d="M495,320 Q550,272 605,320" fill="#C8A040" fillOpacity="0.12" stroke="#C8A040" strokeWidth="2" />
      <path d="M504,320 Q550,282 596,320" fill="none" stroke="#C8A040" strokeWidth="1" strokeDasharray="4 3" />

      {/* Step */}
      <rect x="480" y="453" width="140" height="10" rx="2" fill="#C8C4BC" />
      {/* Path */}
      <path d="M495,455 L460,490 L640,490 L605,455 Z" fill="#C8C4BC" />
      <line x1="550" y1="455" x2="550" y2="490" stroke="#BBB" strokeWidth="1" />

      {/* Bushes near house */}
      <ellipse cx="310" cy="450" rx="50" ry="22" fill="#5A7A4A" fillOpacity="0.55" />
      <ellipse cx="795" cy="450" rx="50" ry="22" fill="#5A7A4A" fillOpacity="0.55" />

      {/* ── TREES — extending off right edge ── */}
      {/* Tree 1 */}
      <rect x="910" y="310" width="18" height="145" fill="#6B4C2A" />
      <ellipse cx="919" cy="290" rx="55" ry="70" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="919" cy="270" rx="42" ry="55" fill="#4A6A35" fillOpacity="0.7" />

      {/* Tree 2 */}
      <rect x="1020" y="280" width="22" height="175" fill="#6B4C2A" />
      <ellipse cx="1031" cy="255" rx="70" ry="88" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="1031" cy="230" rx="54" ry="68" fill="#4A6A35" fillOpacity="0.7" />

      {/* Tree 3 — large, partially off screen */}
      <rect x="1170" y="260" width="26" height="195" fill="#6B4C2A" />
      <ellipse cx="1183" cy="228" rx="90" ry="110" fill="#3A5A2A" fillOpacity="0.85" />
      <ellipse cx="1183" cy="200" rx="70" ry="85" fill="#4A6A35" fillOpacity="0.7" />

      {/* Tree 4 — mostly off screen */}
      <rect x="1340" y="290" width="22" height="165" fill="#6B4C2A" />
      <ellipse cx="1351" cy="265" rx="75" ry="92" fill="#3A5A2A" fillOpacity="0.85" />

      {/* Ground shadow under house */}
      <ellipse cx="550" cy="458" rx="300" ry="12" fill="#111111" fillOpacity="0.06" />
    </svg>
  );
}
