"use client";

import clsx from "clsx";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { IconButton } from "@/app/components/ui/IconButton";

import { formatFileName } from "@/app/utils/formatFileName";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export type ResumePreviewProps = {
  className?: string;
  file: File;
  renderAnnotationLayer?: boolean;
  renderTextLayer?: boolean;
  onFileClose?: () => void
};

export function ResumePreviewImpl({
  className,
  file,
  renderAnnotationLayer = true,
  renderTextLayer = true,
  onFileClose
}: ResumePreviewProps) {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const baseClassNames = "flex flex-col items-center justify-center gap-2";
  return (
    <div className={clsx(className, baseClassNames)}>
      <Document
        className={"flex flex-col max-w-full"}
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <div className="flex items-center py-2 text-sm gap-1">
          {formatFileName(file.name)}
          <IconButton type="button" aria-label="Close" onClick={onFileClose}>
            <XIcon className="shrink-0 size-3" />
          </IconButton>
        </div>
        <Page
          className="shrink-0 border border-gray-200 rounded overflow-hidden max-w-full"
          width={210 * 2}
          scale={1}
          pageNumber={currentPage}
          renderAnnotationLayer={renderAnnotationLayer}
          renderTextLayer={renderTextLayer}
        />
      </Document>
      {numPages ? (
        <div className="flex items-center justify-center gap-x-1 p-4" aria-label="Pagination">
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ChevronLeftIcon className="shrink-0 size-3.5" />
            <span className="sr-only">Previous</span>
          </button>
          <div className="flex items-center gap-x-1">
            <span className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-white border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              {currentPage}
            </span>
            <span className="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
              of
            </span>
            <span className="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
              {numPages}
            </span>
          </div>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next"
            disabled={currentPage === numPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="shrink-0 size-3.5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
