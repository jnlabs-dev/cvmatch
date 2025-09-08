"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

async function loadPreline() {
  return import("preline/dist/index.js");
}

export function PrelineScriptImpl() {
  const path = usePathname();

  // load once
  useEffect(() => {
    loadPreline();
  }, []);

  // re-init on route change
  useEffect(() => {
    const t = setTimeout(() => {
      if (window.HSStaticMethods?.autoInit) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
    return () => clearTimeout(t);
  }, [path]);

  return null;
}
