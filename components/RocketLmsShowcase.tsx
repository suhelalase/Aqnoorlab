"use client";

import { useState } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";

interface RocketLmsShowcaseProps {
  onClose?: () => void;
}

export function RocketLmsShowcase({ onClose }: RocketLmsShowcaseProps) {
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

            {/* Minimalist address bar pill */}
            <div className="w-48 sm:w-64 h-2.5 bg-[#0d0f17] rounded-full border border-white/10 opacity-70" />

            {/* Window Action Buttons (Full Screen & Close) */}
            <div className="flex items-center gap-2">
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
            className={`relative w-full bg-white rounded-b-lg overflow-hidden shadow-inner transition-all duration-300 ${
              isFullScreen ? "h-[calc(100vh-140px)]" : "h-[520px] sm:h-[600px] md:h-[680px]"
            }`}
          >
            {/* iframe loads rocket-lms.html */}
            <iframe
              src="/rocket-lms.html"
              title="Rocket LMS Desktop Preview"
              className="w-full h-full border-0 select-none"
              loading="eager"
              style={{ display: "block" }}
            />
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
