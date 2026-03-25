"use client";
import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const d = { size: 24, sw: 1.5 };

export function IconHammer({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" /><path d="M17.64 15L22 10.64" /><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5l-3.5-3.5H13.6c-.85 0-1.65.33-2.25.93l-1.25 1.25" /><path d="M13 11l4 4" /></svg>);
}

export function IconBlueprint({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M7 3v18" /><path d="M7 8h10" /><path d="M7 13h6" /><circle cx="15" cy="15" r="2" /></svg>);
}

export function IconCalculator({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><rect x="7" y="5" width="10" height="4" rx="1" /><circle cx="8.5" cy="13" r="0.8" fill="currentColor" /><circle cx="12" cy="13" r="0.8" fill="currentColor" /><circle cx="15.5" cy="13" r="0.8" fill="currentColor" /><circle cx="8.5" cy="16.5" r="0.8" fill="currentColor" /><circle cx="12" cy="16.5" r="0.8" fill="currentColor" /><circle cx="15.5" cy="16.5" r="0.8" fill="currentColor" /></svg>);
}

export function IconRuler({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 010 3.4l-2.6 2.6a2.4 2.4 0 01-3.4 0L2.7 8.7a2.4 2.4 0 010-3.4l2.6-2.6a2.4 2.4 0 013.4 0z" /><path d="M14.5 12.5l2-2" /><path d="M11.5 9.5l1-1" /><path d="M8.5 6.5l2-2" /></svg>);
}

export function IconHouse({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" /><path d="M10 21v-6h4v6" /></svg>);
}

export function IconWall({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v6M15 3v6M6 9v6M12 9v6M18 9v6M9 15v6M15 15v6" /></svg>);
}

export function IconExtension({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="10" height="13" rx="1" /><path d="M13 8h6a2 2 0 012 2v9a2 2 0 01-2 2h-6" /><path d="M13 14h8" /><line x1="16" y1="11" x2="16" y2="18" strokeDasharray="2 2" /></svg>);
}

export function IconKitchen({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 10h18M3 15h18" /><circle cx="7" cy="6.5" r="1" /><circle cx="12" cy="6.5" r="1" /><circle cx="17" cy="6.5" r="1" /></svg>);
}

export function IconBathroom({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16a1 1 0 011 1v1a4 4 0 01-4 4H7a4 4 0 01-4-4v-1a1 1 0 011-1z" /><path d="M6 12V5a2 2 0 012-2h1" /><circle cx="10" cy="4.5" r="1.5" /><path d="M8 18v3M16 18v3" /></svg>);
}

export function IconGarage({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V10l10-7 10 7v10" /><path d="M6 20v-8h12v8M6 15h12M6 18h12" /></svg>);
}

export function IconCabin({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12h3v9h14v-9h3L12 2z" /><path d="M10 21v-5h4v5" /></svg>);
}

export function IconFlipping({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>);
}

export function IconRenovation({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>);
}

export function IconBudget({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 8v8M14.5 9.5c0-1.1-1.12-2-2.5-2s-2.5.9-2.5 2 1.12 2 2.5 2 2.5.9 2.5 2-1.12 2-2.5 2-2.5-.9-2.5-2" /></svg>);
}

export function IconTrend({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 7l-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></svg>);
}

export function IconSavings({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" /><circle cx="16" cy="10" r="1" fill="currentColor" /></svg>);
}

export function IconCompare({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="9" rx="1" /><path d="M10 7h4M3 16h18M7 16v5M12 16v5M17 16v5" /></svg>);
}

export function IconSquareMeter({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M9 3v18" /><text x="14.5" y="17" fontSize="6" fill="currentColor" fontFamily="sans-serif" fontWeight="600">m²</text></svg>);
}

export function IconContractor({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>);
}

export function IconLocation({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>);
}

export function IconTimeline({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
}

export function IconRisk({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>);
}

export function IconMaterials({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="22" height="5" rx="1" /><rect x="3" y="11" width="18" height="5" rx="1" /><rect x="5" y="16" width="14" height="5" rx="1" /></svg>);
}

export function IconChevronRight({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>);
}

export function IconArrowRight({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>);
}

export function IconCheck({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>);
}

export function IconMenu({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg>);
}

export function IconClose({ size = d.size, className = "", strokeWidth = d.sw }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
}
