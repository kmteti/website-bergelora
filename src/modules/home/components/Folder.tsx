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

  return (
    <div
      className={`relative w-full max-w-2xl aspect-[5/3.5] ${className}`}
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
          viewBox="0 0 500 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
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

          <path
            d="M0 40 C0 17.9086 17.9086 0 40 0 L160 0 C180 0 190 40 220 40 L460 40 C482.091 40 500 57.9086 500 80 L500 310 C500 332.091 482.091 350 460 350 L40 350 C17.9086 350 0 332.091 0 310 L0 40 Z"
            fill={`url(#${gradientId})`}
            filter={`url(#${filterId})`}
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
