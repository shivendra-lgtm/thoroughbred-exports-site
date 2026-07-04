import React from "react";

/**
 * A hand-drawn, graffiti/caricature-style SVG mural. Wraps in a horizontal
 * slab suitable for placement between the hero and the footer. No text —
 * pure illustration.
 */
export default function MuralSVG({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 460"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        {/* rough paper texture */}
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence baseFrequency="0.85" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="1.2" />
        </filter>
        {/* spray-paint noise */}
        <filter id="spray">
          <feTurbulence baseFrequency="1.5" numOctaves="1" seed="3" />
          <feColorMatrix values="0 0 0 0 0
                                 0 0 0 0 0
                                 0 0 0 0 0
                                 0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* WALL BACKGROUND */}
      <rect x="0" y="0" width="1600" height="460" fill="#EFECE1" />
      <rect x="0" y="0" width="1600" height="460" fill="url(#brick)" opacity="0.06" />

      {/* Subtle paint drips from the top edge */}
      {[
        [80, 20], [230, 55], [340, 15], [520, 40], [700, 25],
        [860, 55], [1010, 20], [1180, 45], [1310, 15], [1470, 35],
      ].map(([x, h], i) => (
        <rect
          key={"drip-" + i}
          x={x}
          y={0}
          width="4"
          height={h + Math.random() * 10}
          fill={i % 2 ? "#C45A44" : "#264635"}
          opacity="0.35"
        />
      ))}

      {/* GRAFFITI SUN in top-right */}
      <g transform="translate(1420 100)">
        <circle cx="0" cy="0" r="52" fill="#DFA73D" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = Math.cos(a) * 60,
            y1 = Math.sin(a) * 60;
          const x2 = Math.cos(a) * 82,
            y2 = Math.sin(a) * 82;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#DFA73D"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="-14" cy="-6" r="4" fill="#1A201C" />
        <circle cx="14" cy="-6" r="4" fill="#1A201C" />
        <path
          d="M -18 14 Q 0 30 18 14"
          stroke="#1A201C"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* CARGO SHIP (right-center) */}
      <g transform="translate(1140 240) rotate(-2)">
        {/* hull */}
        <path
          d="M -140 40 L 160 40 L 140 90 L -120 90 Z"
          fill="#264635"
          stroke="#1A201C"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* deck stacks */}
        <rect x="-110" y="-30" width="50" height="60" fill="#C45A44" stroke="#1A201C" strokeWidth="3" />
        <rect x="-55" y="-45" width="45" height="75" fill="#DFA73D" stroke="#1A201C" strokeWidth="3" />
        <rect x="-5" y="-20" width="60" height="50" fill="#F6F4EB" stroke="#1A201C" strokeWidth="3" />
        <rect x="60" y="-40" width="50" height="70" fill="#264635" stroke="#1A201C" strokeWidth="3" />
        {/* bridge */}
        <rect x="115" y="-10" width="30" height="40" fill="#F6F4EB" stroke="#1A201C" strokeWidth="3" />
        <rect x="130" y="-30" width="12" height="20" fill="#1A201C" />
        {/* smoke */}
        <circle cx="138" cy="-52" r="8" fill="#B89645" opacity="0.6" />
        <circle cx="150" cy="-64" r="10" fill="#B89645" opacity="0.45" />
        <circle cx="165" cy="-78" r="12" fill="#B89645" opacity="0.3" />
        {/* portholes */}
        <circle cx="-110" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="-80" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="-50" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="-20" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="10" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="40" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="70" cy="60" r="4" fill="#F6F4EB" />
        <circle cx="100" cy="60" r="4" fill="#F6F4EB" />
      </g>

      {/* WAVES beneath the ship */}
      <g transform="translate(1140 360)">
        <path
          d="M -180 0 Q -130 -12 -80 0 T 20 0 T 120 0 T 220 0"
          stroke="#264635"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M -170 18 Q -120 6 -70 18 T 30 18 T 130 18 T 230 18"
          stroke="#B89645"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* BIG CARGO CONTAINER (left) */}
      <g transform="translate(180 300) rotate(-4)">
        <rect x="-110" y="-70" width="220" height="130" fill="#C45A44" stroke="#1A201C" strokeWidth="5" />
        {/* corrugation */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={i}
            x1={-110 + i * 22}
            y1={-70}
            x2={-110 + i * 22}
            y2={60}
            stroke="#1A201C"
            strokeWidth="1.5"
            opacity="0.5"
          />
        ))}
        {/* door lines */}
        <line x1="0" y1="-70" x2="0" y2="60" stroke="#1A201C" strokeWidth="3" />
        {/* corner posts */}
        <rect x="-116" y="-76" width="12" height="12" fill="#1A201C" />
        <rect x="104" y="-76" width="12" height="12" fill="#1A201C" />
        <rect x="-116" y="54" width="12" height="12" fill="#1A201C" />
        <rect x="104" y="54" width="12" height="12" fill="#1A201C" />
      </g>

      {/* SMALLER GREEN CONTAINER STACKED */}
      <g transform="translate(320 210) rotate(3)">
        <rect x="-70" y="-40" width="140" height="80" fill="#264635" stroke="#1A201C" strokeWidth="4" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={-70 + i * 20} y1={-40} x2={-70 + i * 20} y2={40} stroke="#1A201C" strokeWidth="1" opacity="0.5" />
        ))}
      </g>

      {/* MANGO */}
      <g transform="translate(510 130) rotate(-8)">
        <path
          d="M 0 -40 C 45 -35 55 20 20 45 C -20 55 -50 20 -40 -15 C -35 -35 -20 -42 0 -40 Z"
          fill="#DFA73D"
          stroke="#1A201C"
          strokeWidth="4"
        />
        {/* mango cheek shine */}
        <ellipse cx="-8" cy="-8" rx="14" ry="6" fill="#F6F4EB" opacity="0.5" />
        {/* leaf */}
        <path d="M 5 -40 Q 22 -60 42 -50 Q 30 -38 5 -40 Z" fill="#264635" stroke="#1A201C" strokeWidth="3" />
      </g>

      {/* BANANA BUNCH */}
      <g transform="translate(720 250) rotate(6)">
        <path
          d="M -60 0 C -40 -30 30 -50 60 -20 C 55 -8 30 -6 8 -2 C -20 4 -50 12 -60 0 Z"
          fill="#DFA73D"
          stroke="#1A201C"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M -55 15 C -35 -12 35 -32 62 -2 C 55 10 30 12 8 16 C -20 22 -48 28 -55 15 Z"
          fill="#B89645"
          stroke="#1A201C"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* stem */}
        <path d="M 58 -18 L 78 -34" stroke="#1A201C" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* GRAPE CLUSTER */}
      <g transform="translate(870 130)">
        {[[0, 0], [-16, 6], [16, 6], [-8, 20], [8, 20], [-22, 22], [22, 22], [0, 36], [-16, 40], [16, 40], [-8, 54], [8, 54], [0, 68]].map(
          ([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="12"
              fill="#264635"
              stroke="#1A201C"
              strokeWidth="2.5"
            />
          )
        )}
        {/* stem + leaf */}
        <path d="M 0 -8 C 10 -18 20 -30 5 -42" stroke="#1A201C" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M -18 -30 Q -8 -50 22 -40 Q 8 -22 -18 -30 Z" fill="#B89645" stroke="#1A201C" strokeWidth="3" />
      </g>

      {/* RED CHILLI */}
      <g transform="translate(1000 320) rotate(20)">
        <path
          d="M 0 0 C 30 -6 60 -8 78 -16 Q 100 -20 106 -6 Q 96 6 78 4 C 58 6 30 12 0 12 Z"
          fill="#C45A44"
          stroke="#1A201C"
          strokeWidth="4"
        />
        <path d="M 0 4 L -16 -6" stroke="#264635" strokeWidth="6" strokeLinecap="round" />
        <path d="M -16 -6 L -6 -14" stroke="#264635" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* SPICE SACKS */}
      <g transform="translate(430 380)">
        <path
          d="M -50 20 C -50 -20 -30 -30 0 -30 C 30 -30 50 -20 50 20 C 50 40 40 45 0 45 C -40 45 -50 40 -50 20 Z"
          fill="#B89645"
          stroke="#1A201C"
          strokeWidth="4"
        />
        {/* drawstring */}
        <path d="M -18 -30 L -18 -46 L 18 -46 L 18 -30" stroke="#1A201C" strokeWidth="3" fill="none" />
        <circle cx="0" cy="-46" r="4" fill="#1A201C" />
        {/* second sack */}
        <g transform="translate(90 4)">
          <path
            d="M -40 15 C -40 -18 -22 -25 0 -25 C 22 -25 40 -18 40 15 C 40 33 30 38 0 38 C -30 38 -40 33 -40 15 Z"
            fill="#C45A44"
            stroke="#1A201C"
            strokeWidth="4"
          />
          <path d="M -14 -25 L -14 -38 L 14 -38 L 14 -25" stroke="#1A201C" strokeWidth="3" fill="none" />
          <circle cx="0" cy="-38" r="3" fill="#1A201C" />
        </g>
      </g>

      {/* GLOBE (center-left) */}
      <g transform="translate(620 380)">
        <circle cx="0" cy="0" r="42" fill="#F6F4EB" stroke="#1A201C" strokeWidth="4" />
        <ellipse cx="0" cy="0" rx="42" ry="14" fill="none" stroke="#1A201C" strokeWidth="2" />
        <path d="M 0 -42 L 0 42" stroke="#1A201C" strokeWidth="2" />
        {/* continents blobs */}
        <path d="M -20 -8 Q -8 -20 6 -12 Q 14 -2 6 6 Q -8 12 -20 -8 Z" fill="#264635" />
        <path d="M 8 10 Q 22 4 26 14 Q 22 22 12 22 Q 4 18 8 10 Z" fill="#264635" />
        <path d="M -22 18 Q -14 14 -8 20 Q -14 26 -22 18 Z" fill="#264635" />
      </g>

      {/* WHEAT SHEAF */}
      <g transform="translate(940 380) rotate(-6)">
        {Array.from({ length: 7 }).map((_, i) => {
          const x = (i - 3) * 6;
          const y = i % 2 === 0 ? 0 : -4;
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <ellipse cx="0" cy="-20" rx="4" ry="10" fill="#DFA73D" stroke="#1A201C" strokeWidth="2" />
              <ellipse cx="0" cy="-4" rx="4" ry="10" fill="#DFA73D" stroke="#1A201C" strokeWidth="2" />
              <line x1="0" y1="8" x2="0" y2="30" stroke="#B89645" strokeWidth="2" />
            </g>
          );
        })}
      </g>

      {/* GALLOPING HORSE SILHOUETTE — the brand mascot, striding across the mural */}
      <g transform="translate(800 320)">
        {/* body */}
        <path
          d="M -120 0
             C -110 -30 -60 -50 -20 -46
             C 20 -44 60 -52 90 -40
             C 108 -30 118 -20 128 -6
             C 130 -2 128 4 122 4
             C 116 4 116 -4 108 -4
             L 100 8
             L 92 -6
             L 60 -6
             L 60 40
             L 46 40
             L 40 6
             L -14 8
             L -14 40
             L -28 40
             L -32 8
             L -68 8
             L -84 40
             L -100 40
             L -92 6
             C -108 4 -122 -4 -120 0 Z"
          fill="#1A201C"
        />
        {/* head accents */}
        <path d="M 110 -14 L 122 -22 L 126 -12 Z" fill="#DFA73D" />
        {/* mane */}
        <path
          d="M 92 -42 C 100 -60 110 -58 108 -46 C 118 -60 128 -52 122 -36"
          stroke="#DFA73D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* tail */}
        <path
          d="M -118 -4 C -140 -14 -152 4 -140 20 C -134 8 -128 6 -122 8"
          stroke="#DFA73D"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* eye */}
        <circle cx="112" cy="-30" r="2" fill="#F6F4EB" />
      </g>

      {/* SPLATTERS scattered around for graffiti feel */}
      {[
        [70, 90, 6, "#DFA73D"],
        [260, 90, 4, "#264635"],
        [400, 60, 3, "#C45A44"],
        [560, 340, 5, "#B89645"],
        [750, 90, 3, "#C45A44"],
        [1080, 100, 6, "#264635"],
        [1290, 300, 5, "#DFA73D"],
        [1370, 380, 4, "#C45A44"],
        [1520, 240, 5, "#264635"],
        [90, 400, 4, "#C45A44"],
        [500, 30, 3, "#B89645"],
      ].map(([x, y, r, c], i) => (
        <g key={"splat-" + i}>
          <circle cx={x} cy={y} r={r} fill={c} />
          <circle cx={x + r * 2} cy={y - r} r={r * 0.4} fill={c} opacity="0.7" />
          <circle cx={x - r} cy={y + r * 1.4} r={r * 0.3} fill={c} opacity="0.5" />
        </g>
      ))}

      {/* Rough sketchy border framing */}
      <rect
        x="10"
        y="10"
        width="1580"
        height="440"
        fill="none"
        stroke="#1A201C"
        strokeWidth="4"
        strokeDasharray="14 6 4 8 20 5"
        opacity="0.35"
      />
    </svg>
  );
}
