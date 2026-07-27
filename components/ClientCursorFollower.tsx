"use client";

import dynamic from "next/dynamic";

// CursorFollower is client-side only (uses canvas/mouse events)
const CursorFollower = dynamic(() => import("@/components/CursorFollower"), {
  ssr: false,
});

export default function ClientCursorFollower() {
  return <CursorFollower />;
}
