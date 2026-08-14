'use client';

import React, { useId } from 'react';

interface FolderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  startColor?: string;
  endColor?: string;
}

export default function Folder({ children, className = '', startColor = '#FFD97D', endColor = '#F1AD08', ...props }: FolderProps) {
  // useId() menghasilkan ID unik per instance, mencegah konflik filter SVG
  const uid = useId().replace(/:/g, '');
  const gradientId = `folderGrad-${uid}`;
  const filterId = `folderInner-${uid}`;
  const pathId = `folderPath-${uid}`;
  const clipId = `folderClip-${uid}`;

  return (
    <div
      /* Rasio ikut ukuran frame Figma, kalau nggak SVG-nya ke-letterbox dan konten jadi meleset */
      className={`relative w-full max-w-2xl aspect-[458.37/337.36] ${className}`}
      {...props}
    >
      {/* 
        Wrapper untuk CSS drop-shadow.
        CSS filter: drop-shadow() membaca pixel visual dari SVG path,
        jadi shadow-nya pasti mengikuti bentuk lengkung folder.
        Kita kasih margin negatif + padding agar shadow tidak terpotong.
      */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-30px',
          left: '-20px',
          right: '-20px',
          bottom: '-20px',
          padding: '30px 20px 20px 20px',
          filter: 'drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.12))',
        }}
      >
        <svg
          // viewBox pakai koordinat mentah dari Figma biar path-nya nggak perlu digeser
          viewBox="30 20 458.37 337.36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Bentuk folder persis dari Figma (node 1079:2181, boolean "Subtract") */}
            <path
              id={pathId}
              d="M262.778 59.3363C268.255 62.0129 274.272 63.402 280.368 63.3975L448.341 63.2736C470.444 63.2574 488.37 81.1707 488.37 103.274V317.36C488.37 339.452 470.462 357.36 448.37 357.36H70C47.9086 357.36 30 339.452 30 317.36L30 60C30 37.9086 47.9086 20 70 20H173.026C179.113 20 185.119 21.389 190.587 24.0611L262.778 59.3363Z"
            />
            <clipPath id={clipId}>
              <use href={`#${pathId}`} />
            </clipPath>

            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              {/* Figma (node 1079:2199): gradient spans the whole folder body */}
              <stop offset="0%" stopColor={startColor} />
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>

            {/* Inner shadow filter only */}
            <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
              <feComponentTransfer in="SourceAlpha" result="alpha" />
              <feOffset dx="0" dy="4" in="alpha" result="offset-alpha" />
              <feGaussianBlur stdDeviation="5" in="offset-alpha" result="blur-alpha" />
              <feComposite operator="out" in="alpha" in2="blur-alpha" result="inner-shadow-alpha" />
              
              <feFlood floodColor="#FFFFFF" floodOpacity="0.4" result="white" />
              <feComposite operator="in" in="white" in2="inner-shadow-alpha" result="inner-shadow" />
              
              <feComposite operator="over" in="inner-shadow" in2="SourceGraphic" />
            </filter>
          </defs>

          <use href={`#${pathId}`} fill={`url(#${gradientId})`} filter={`url(#${filterId})`} />
          {/* Figma: inner stroke putih 3px, 50%. SVG cuma punya stroke di tengah,
              jadi digambar 6px lalu dipotong pakai clip biar sisa yang di dalam. */}
          <use
            href={`#${pathId}`}
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.5"
            strokeWidth="6"
            clipPath={`url(#${clipId})`}
          />
        </svg>
      </div>
      
      {/* Kontainer untuk Konten / Children */}
      {/* pt-[15%] agar konten turun melewati bagian tab (telinga folder) */}
      <div className="relative z-10 w-full h-full pt-[15%] px-[8%] pb-[8%] flex flex-col">
        {children}
      </div>
    </div>
  );
}
