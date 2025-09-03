"use client";

import dynamic from "next/dynamic";
const PrelineScript = dynamic(() => import("./PrelineScript"), { ssr: false });

export function PrelineScriptWrapper() {
  return <PrelineScript />;
}
