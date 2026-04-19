export default function HouseGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="300" cy="410" rx="240" ry="10" fill="#111111" fillOpacity="0.06" />

      {/* Main body */}
      <rect x="80" y="180" width="440" height="220" fill="#E8E4DC" />

      {/* Roof */}
      <polygon points="60,180 300,40 540,180" fill="#1A1A1A" />
      {/* Roof trim */}
      <polygon points="60,180 300,40 540,180" fill="none" stroke="#111111" strokeWidth="2" />

      {/* Chimney */}
      <rect x="380" y="60" width="36" height="80" fill="#2A2A2A" />
      <rect x="374" y="55" width="48" height="10" fill="#1A1A1A" />

      {/* Left wing / garage */}
      <rect x="20" y="230" width="90" height="170" fill="#DEDAD2" />
      {/* Garage door */}
      <rect x="28" y="290" width="74" height="110" fill="#C8C4BC" />
      <line x1="28" y1="345" x2="102" y2="345" stroke="#AAA" strokeWidth="1.5" />
      <line x1="28" y1="320" x2="102" y2="320" stroke="#AAA" strokeWidth="1.5" />
      <line x1="28" y1="370" x2="102" y2="370" stroke="#AAA" strokeWidth="1.5" />
      <line x1="65" y1="290" x2="65" y2="400" stroke="#AAA" strokeWidth="1.5" />

      {/* Right extension */}
      <rect x="490" y="240" width="90" height="160" fill="#DEDAD2" />
      {/* Extension window */}
      <rect x="505" y="265" width="60" height="50" fill="#B8D4E8" fillOpacity="0.7" stroke="#999" strokeWidth="1.5" />
      <line x1="535" y1="265" x2="535" y2="315" stroke="#999" strokeWidth="1" />

      {/* Front door */}
      <rect x="254" y="300" width="92" height="100" rx="2" fill="#1A1A1A" />
      <rect x="260" y="306" width="36" height="50" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="304" y="306" width="36" height="50" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      <rect x="260" y="362" width="80" height="32" fill="#2A2A2A" stroke="#333" strokeWidth="1" />
      {/* Door handle */}
      <circle cx="292" cy="357" r="4" fill="#C8A040" />
      {/* Door arch */}
      <path d="M254,310 Q300,270 346,310" fill="#C8A040" fillOpacity="0.15" stroke="#C8A040" strokeWidth="1.5" />

      {/* Ground floor windows */}
      <rect x="100" y="250" width="90" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#999" strokeWidth="1.5" />
      <line x1="145" y1="250" x2="145" y2="320" stroke="#999" strokeWidth="1" />
      <line x1="100" y1="285" x2="190" y2="285" stroke="#999" strokeWidth="1" />

      <rect x="410" y="250" width="90" height="70" fill="#B8D4E8" fillOpacity="0.6" stroke="#999" strokeWidth="1.5" />
      <line x1="455" y1="250" x2="455" y2="320" stroke="#999" strokeWidth="1" />
      <line x1="410" y1="285" x2="500" y2="285" stroke="#999" strokeWidth="1" />

      {/* First floor windows */}
      <rect x="120" y="105" width="70" height="55" fill="#B8D4E8" fillOpacity="0.5" stroke="#555" strokeWidth="1.5" />
      <line x1="155" y1="105" x2="155" y2="160" stroke="#555" strokeWidth="1" />

      <rect x="265" y="90" width="70" height="60" fill="#B8D4E8" fillOpacity="0.5" stroke="#555" strokeWidth="1.5" />
      <line x1="300" y1="90" x2="300" y2="150" stroke="#555" strokeWidth="1" />

      <rect x="410" y="105" width="70" height="55" fill="#B8D4E8" fillOpacity="0.5" stroke="#555" strokeWidth="1.5" />
      <line x1="445" y1="105" x2="445" y2="160" stroke="#555" strokeWidth="1" />

      {/* Path */}
      <path d="M254,400 L230,420 L370,420 L346,400 Z" fill="#C8C4BC" />
      <line x1="300" y1="400" x2="300" y2="420" stroke="#BBB" strokeWidth="1" />

      {/* Bushes */}
      <ellipse cx="110" cy="400" rx="40" ry="20" fill="#5A7A4A" fillOpacity="0.6" />
      <ellipse cx="490" cy="400" rx="40" ry="20" fill="#5A7A4A" fillOpacity="0.6" />
      <ellipse cx="150" cy="395" rx="25" ry="15" fill="#4A6A3A" fillOpacity="0.5" />
      <ellipse cx="450" cy="395" rx="25" ry="15" fill="#4A6A3A" fillOpacity="0.5" />

      {/* Ground line */}
      <rect x="0" y="400" width="600" height="20" fill="#D8D4CC" />
    </svg>
  );
}
