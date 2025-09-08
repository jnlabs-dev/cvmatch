"use client";

import clsx from "clsx";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export type ResumePreviewProps = {
  className?: string;
  file: File;
  renderAnnotationLayer?: boolean;
  renderTextLayer?: boolean;
};

export function ResumePreviewImpl({
  className,
  file,
  renderAnnotationLayer = true,
  renderTextLayer = true
}: ResumePreviewProps) {
const [numPages, setNumPages] = useState<number>();
  const baseClassNames = "";
  return (
    <div className={clsx(className, baseClassNames)}>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            renderAnnotationLayer={renderAnnotationLayer}
            renderTextLayer={renderTextLayer}
          />
        ))}
      </Document>
    </div>
  );
}
