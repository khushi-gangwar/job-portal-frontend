import React from "react";
import "./devspotillustration.css"; // Assuming you have a CSS file for animations
const DevSpotIllustration: React.FC = () => {
  return (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Background elements */}
      <circle cx="250" cy="200" r="150" fill="#f3f4f6" className="animate-pulse-slow" />
      <circle cx="250" cy="200" r="120" fill="#e5e7eb" className="animate-pulse-slow delayed-1" />

      {/* Building/Office */}
      <rect x="150" y="100" width="200" height="200" rx="5" fill="#4f46e5" className="path-animation" />
      <rect x="170" y="120" width="160" height="160" rx="3" fill="#ffffff" className="path-animation delayed-1" />

      {/* Windows */}
      {[140, 185, 230].map((y) =>
        [190, 235, 280].map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="30" height="30" rx="2" fill="#d1d5db" className="path-animation delayed-2" />
        ))
      )}

      {/* Door */}
      <rect x="225" y="270" width="50" height="30" rx="2" fill="#3730a3" className="path-animation delayed-2" />

      {/* Floating icon 1 */}
      <g className="animate-float">
        <circle cx="320" cy="285" r="15" fill="#6366f1" />
        <rect x="315" y="300" width="10" height="25" fill="#6366f1" />
        <rect x="305" y="315" width="10" height="20" transform="rotate(20 305 315)" fill="#6366f1" />
        <rect x="325" y="315" width="10" height="20" transform="rotate(-20 325 315)" fill="#6366f1" />
        <rect x="305" y="305" width="30" height="10" fill="#6366f1" />
      </g>

      {/* Floating icon 2 */}
      <g className="animate-float delayed-1">
        <rect x="350" y="310" width="30" height="25" rx="3" fill="#7c3aed" />
        <rect x="358" y="305" width="14" height="5" rx="2" fill="#7c3aed" />
      </g>

      {/* Floating mailbox */}
      <g className="animate-float delayed-2">
        <rect x="150" y="290" width="40" height="50" rx="3" fill="#f3f4f6" stroke="#4f46e5" strokeWidth="2" />
        <line x1="160" y1="305" x2="180" y2="305" stroke="#4f46e5" strokeWidth="2" />
        <line x1="160" y1="315" x2="180" y2="315" stroke="#4f46e5" strokeWidth="2" />
        <line x1="160" y1="325" x2="180" y2="325" stroke="#4f46e5" strokeWidth="2" />
      </g>

      {/* Pulse radar */}
      <g className="animate-pulse-slow delayed-3">
        <circle cx="400" cy="150" r="25" fill="none" stroke="#7c3aed" strokeWidth="6" />
        <line x1="418" y1="168" x2="435" y2="185" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Dotted lines */}
      <path d="M320 285 L400 150" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5" className="path-animation" />
      <path d="M320 285 L170 290" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5" className="path-animation delayed-1" />
      <path d="M250 200 L400 150" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5" className="path-animation delayed-2" />

      {/* Stars */}
      <g className="animate-pulse-slow">
        <polygon points="100,150 105,160 115,160 107,167 110,177 100,172 90,177 93,167 85,160 95,160" fill="#fcd34d" />
        <polygon points="400,250 405,260 415,260 407,267 410,277 400,272 390,277 393,267 385,260 395,260" fill="#fcd34d" />
        <polygon points="200,80 205,90 215,90 207,97 210,107 200,102 190,107 193,97 185,90 195,90" fill="#fcd34d" />
      </g>
    </svg>
  );
};

export default DevSpotIllustration;
