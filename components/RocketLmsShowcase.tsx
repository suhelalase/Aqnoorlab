"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Minimize2, X, ExternalLink, Lock } from "lucide-react";

export interface ProjectShowcaseProps {
  onClose?: () => void;
  title?: string;
  badge?: string;
  description?: string;
  imageSrc?: string;
  liveUrl?: string;
  displayUrl?: string;
  buttonText?: string;
}

export function RocketLmsShowcase({
  onClose,
  title = "Rocket LMS Platform & Mobile Experience",
  badge = "Live Production LMS",
  description = "Course builder, HD live classes with chat, automated certificates, and instructor commission payouts.",
  imageSrc = "/images/rocket-lms.png",
  liveUrl = "https://lms.rocket-soft.org/",
  displayUrl = "https://lms.rocket-soft.org/",
  buttonText = "Open Live LMS Demo",
}: ProjectShowcaseProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div
      className={`${
        isFullScreen
          ? "fixed inset-0 z-[100] bg-slate-950 flex flex-col justify-center items-center p-4"
          : "w-full"
      }`}
    >
      {/* Browser Chrome Panel */}
      <div className={`relative mx-auto w-full ${isFullScreen ? "max-w-[1400px]" : ""}`}>
        {/* Title Bar / Browser Address Bar */}
        <div className="flex items-center gap-2 bg-[#1e293b] border border-slate-700 border-b-0 rounded-t px-3 py-2">
          {/* Tab dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-slate-600 hover:bg-red-500 transition-colors cursor-pointer"
              title="Close"
            />
            <button
              onClick={() => setIsFullScreen(false)}
              className="w-3 h-3 rounded-full bg-slate-600 hover:bg-yellow-400 transition-colors cursor-pointer"
              title="Minimize"
            />
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="w-3 h-3 rounded-full bg-slate-600 hover:bg-emerald-400 transition-colors cursor-pointer"
              title="Full Screen"
            />
          </div>

          {/* Address bar */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 flex-1 px-2.5 py-1 bg-slate-100 border border-slate-300 rounded text-[11px] font-mono text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors truncate group shadow-2xs"
              title="Open Live Site"
            >
              <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate font-semibold">{displayUrl}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 shrink-0 ml-auto" />
            </a>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 ml-1">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded bg-[#0052cc] hover:bg-[#0043a8] text-white transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
            )}
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer"
            >
              {isFullScreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Restore</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Expand</span>
                </>
              )}
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Screen Viewport */}
        <div
          className={`relative w-full bg-slate-900 border border-slate-700 overflow-hidden ${
            isFullScreen ? "h-[calc(100vh-100px)]" : "h-[380px] sm:h-[480px] md:h-[580px]"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-top"
            priority
          />

          {/* Info overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div>
                {badge && (
                  <span className="inline-block mb-1.5 px-2 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider bg-[#0052cc] text-white rounded">
                    {badge}
                  </span>
                )}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{title}</h3>
                <p className="text-xs text-slate-300 mt-0.5 max-w-lg leading-relaxed">{description}</p>
              </div>

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-[#162032] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <span>{buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bezel */}
        <div className="h-3 bg-[#1e293b] border border-t-0 border-slate-700 rounded-b" />
      </div>
    </div>
  );
}

export const ProjectShowcase = RocketLmsShowcase;
export default RocketLmsShowcase;
