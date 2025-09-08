"use client";

import dynamic from "next/dynamic";
const PrelineScriptImpl = dynamic(() => import("./PrelineScriptImpl").then((mod) => mod.PrelineScriptImpl), { ssr: false });

export function PrelineScript() {
  return <PrelineScriptImpl />;
}
