"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Minimize2, X, ExternalLink, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className={`transition-all duration-300 ${
        isFullScreen
          ? "fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl p-3 sm:p-6 flex flex-col justify-center items-center overflow-hidden"
          : "w-full max-w-[1280px] mx-auto px-2 sm:px-4 py-4"
      }`}
    >
      {/* Laptop / Desktop Screen Frame Container */}
      <div className={`relative mx-auto transition-all duration-300 w-full ${isFullScreen ? "max-w-[1500px]" : ""}`}>
        {/* Laptop Display Top Lid */}
        <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#12141c] p-2.5 sm:p-4 border-t border-x border-white/15 shadow-2xl shadow-primary/20">
          {/* Webcam & Sensor Dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            <div className="w-2 h-2 rounded-full bg-[#1e2330] border border-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse" />
          </div>

          {/* Browser Top Navigation Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#1a1d28] rounded-t-xl border-b border-white/10 mb-1">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2">
              {/* Red - Close */}
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-inner hover:opacity-80 cursor-pointer"
                title="Close"
              />
              {/* Yellow - Minimize */}
              <button
                onClick={() => setIsFullScreen(false)}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-inner hover:opacity-80 cursor-pointer"
                title="Minimize"
              />
              {/* Green - Full Screen Toggle */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-inner hover:opacity-80 cursor-pointer"
                title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
              />
            </div>

            {/* Clickable Browser Address Bar */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 bg-[#0d0f17] hover:bg-[#151926] rounded-full border border-white/10 text-[11px] text-white/80 font-mono max-w-[260px] sm:max-w-xs truncate transition-colors group cursor-pointer"
                title="Open Live Site in New Tab"
              >
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{displayUrl}</span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white transition-colors shrink-0 ml-1" />
              </a>
            )}

            {/* Window Action Buttons (Full Screen & Close) */}
            <div className="flex items-center gap-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-colors cursor-pointer"
                title={isFullScreen ? "Minimize Screen" : "Full Screen"}
              >
                {isFullScreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Minimize</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Full Screen</span>
                  </>
                )}
              </button>

              {onClose && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors cursor-pointer"
                  title="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Screen Content Viewport */}
          <div
            className={`relative w-full bg-[#0d0f17] rounded-b-lg overflow-hidden shadow-inner transition-all duration-300 group ${
              isFullScreen ? "h-[calc(100vh-140px)]" : "h-[400px] sm:h-[500px] md:h-[620px]"
            }`}
          >
            {/* High Quality Platform Preview Image */}
            <div className="relative w-full h-full overflow-hidden bg-slate-900">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover object-center"
                priority
              />

              {/* Floating Action Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-8 opacity-95 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 max-w-4xl">
                  <div>
                    {badge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/80 backdrop-blur-md text-white text-xs font-semibold mb-2">
                        <Sparkles className="w-3 h-3" />
                        <span>{badge}</span>
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
                      {description}
                    </p>
                  </div>

                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        size="default"
                        className="rounded-full gap-2 px-5 font-semibold bg-white text-slate-900 hover:bg-white/90 shadow-lg cursor-pointer"
                      >
                        <span>{buttonText}</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Aluminum Hinge & Base */}
        {!isFullScreen && (
          <>
            <div className="relative mx-auto w-[102%] -ml-[1%] h-4 sm:h-5 bg-gradient-to-b from-[#2a2e3d] via-[#1e212b] to-[#12141c] rounded-b-xl border-t border-white/20 shadow-xl flex items-center justify-center">
              <div className="w-20 sm:w-28 h-1.5 bg-[#12141c] rounded-full border border-white/10" />
            </div>
            <div className="h-6 w-4/5 mx-auto bg-primary/20 blur-xl rounded-full -mt-2" />
          </>
        )}
      </div>
    </div>
  );
}

export const ProjectShowcase = RocketLmsShowcase;
export default RocketLmsShowcase;
