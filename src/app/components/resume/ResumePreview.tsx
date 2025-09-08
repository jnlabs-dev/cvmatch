"use client";

import dynamic from "next/dynamic";
import type { ResumePreviewProps } from "./ResumePreviewImpl";
const ResumePreviewImpl = dynamic(() => import("./ResumePreviewImpl").then((mod) => mod.ResumePreviewImpl), { ssr: false });

export function ResumePreview(props: ResumePreviewProps) {
  return <ResumePreviewImpl {...props} />;
}
