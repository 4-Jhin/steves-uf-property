export default function HouseGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="350" cy="448" rx="280" ry="12" fill="#111111" fillOpacity="0.07" />

      {/* Left garage wing */}
      <rect x="30" y="250" width="110" height="190" fill="#DEDAD2" />
      {/* Garage door */}
      <rect x="38" y="300" width="94" height="140" fill="#C8C4BC" />
      <line x1="38" y1="340" x2="132" y2="340" stroke="#AAAA" strokeWidth="1.5" />
      <line x1="38" y1="320" x2="132" y2="320" stroke="#AAAA" strokeWidth="1.5" />
      <line x1="38" y1="360" x2="132" y2="360" stroke="#AAAA" strokeWidth="1.5" />
      <line x1="38" y1="380" x2="132" y2="380" stroke="#AAAA" strokeWidth="1.5" />
      <line x1="85" y1="300" x2="85" y2="440" stroke="#AAAA" strokeWidth="1.5" />

      {/* Right extension */}
      <rect x="560" y="260" width="110" height="180" fill="#DEDAD2" />
      {/* Extension window */}
      <rect x="578" y="285" width="74" height="60" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="615" y1="285" x2="615" y2="345" stroke="#999" strokeWidth="1" />
      <line x1="578" y1="315" x2="652" y2="315" stroke="#999" strokeWidth="1" />

      {/* Main house body */}
      <rect x="110" y="195" width="480" height="245" fill="#E8E4DC" />

      {/* Chimney — left */}
      <rect x="175" y="80" width="38" height="90" fill="#2A2A2A" />
      <rect x="168" y="74" width="52" height="12" fill="#1A1A1A" />

      {/* Chimney — right */}
      <rect x="487" y="95" width="34" height="75" fill="#2A2A2A" />
      <rect x="481" y="89" width="46" height="11" fill="#1A1A1A" />

      {/* Main roof */}
      <polygon points="90,195 350,42 610,195" fill="#1A1A1A" />

      {/* Roof ridge detail */}
      <line x1="90" y1="195" x2="610" y2="195" stroke="#333" strokeWidth="2" />

      {/* === FIRST FLOOR WINDOWS (on wall, below roofline y=195) === */}
      {/* Left first floor window */}
      <rect x="140" y="215" width="85" height="65" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="182" y1="215" x2="182" y2="280" stroke="#888" strokeWidth="1" />
      <line x1="140" y1="248" x2="225" y2="248" stroke="#888" strokeWidth="1" />

      {/* Centre first floor window */}
      <rect x="307" y="210" width="86" height="65" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="350" y1="210" x2="350" y2="275" stroke="#888" strokeWidth="1" />
      <line x1="307" y1="243" x2="393" y2="243" stroke="#888" strokeWidth="1" />

      {/* Right first floor window */}
      <rect x="475" y="215" width="85" height="65" fill="#B8D4E8" fillOpacity="0.6" stroke="#888" strokeWidth="1.5" />
      <line x1="517" y1="215" x2="517" y2="280" stroke="#888" strokeWidth="1" />
      <line x1="475" y1="248" x2="560" y2="248" stroke="#888" strokeWidth="1" />

      {/* === GROUND FLOOR === */}
      {/* Left ground window */}
      <rect x="130" y="310" width="100" height="80" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="180" y1="310" x2="180" y2="390" stroke="#999" strokeWidth="1" />
      <line x1="130" y1="350" x2="230" y2="350" stroke="#999" strokeWidth="1" />

      {/* Right ground window */}
      <rect x="470" y="310" width="100" height="80" fill="#B8D4E8" fillOpacity="0.65" stroke="#999" strokeWidth="1.5" />
      <line x1="520" y1="310" x2="520" y2="390" stroke="#999" strokeWidth="1" />
      <line x1="470" y1="350" x2="570" y2="350" stroke="#999" strokeWidth="1" />

      {/* Front door */}
      <rect x="300" y="310" width="100" height="130" rx="2" fill="#1A1A1A" />
      {/* Door panels */}
      <rect x="308" y="318" width="38" height="55" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="354" y="318" width="38" height="55" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="308" y="380" width="84" height="54" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      {/* Gold door handle */}
      <circle cx="338" cy="373" r="5" fill="#C8A040" />
      {/* Door arch */}
      <path d="M300,322 Q350,278 400,322" fill="#C8A040" fillOpacity="0.12" stroke="#C8A040" strokeWidth="2" />
      {/* Fanlight */}
      <path d="M308,322 Q350,288 392,322" fill="none" stroke="#C8A040" strokeWidth="1" strokeDasharray="4 3" />

      {/* Front step */}
      <rect x="288" y="438" width="124" height="10" rx="2" fill="#C8C4BC" />

      {/* Path */}
      <path d="M300,440 L272,460 L428,460 L400,440 Z" fill="#C8C4BC" />
      <line x1="350" y1="440" x2="350" y2="460" stroke="#BBB" strokeWidth="1" />

      {/* Bushes */}
      <ellipse cx="148" cy="442" rx="44" ry="20" fill="#5A7A4A" fillOpacity="0.55" />
      <ellipse cx="552" cy="442" rx="44" ry="20" fill="#5A7A4A" fillOpacity="0.55" />
      <ellipse cx="192" cy="436" rx="28" ry="16" fill="#4A6A3A" fillOpacity="0.5" />
      <ellipse cx="508" cy="436" rx="28" ry="16" fill="#4A6A3A" fillOpacity="0.5" />

      {/* Ground */}
      <rect x="0" y="448" width="700" height="12" fill="#D8D4CC" />
    </svg>
  );
}
