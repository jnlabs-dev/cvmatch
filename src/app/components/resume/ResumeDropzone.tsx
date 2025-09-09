"use client";

import clsx from "clsx";

import { useCallback, useState } from "react";
import { useDropzone, type DropzoneOptions, type FileRejection } from 'react-dropzone';
import { FileUpIcon, HardDriveUploadIcon, CloudDownloadIcon, FileWarningIcon, CloudUploadIcon, OctagonAlertIcon } from "lucide-react";

import { Button } from "@/app/components/ui/Button";

const maxFileSizeInMB = 2;
const defaultDropzoneOptions: DropzoneOptions = {
  accept: {
    "application/pdf": [".pdf"],
  },
  multiple: false,
  maxFiles: 1,
  maxSize: maxFileSizeInMB * 1024 * 1024,
};

export type ResumeDropzoneProps = {
  className?: string;
  onFileAccepted: (acceptedFile: File) => void;
};

export function ResumeDropzone({
  className,
  onFileAccepted
}: ResumeDropzoneProps) {
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    setRejectedFiles([]);
    onFileAccepted(acceptedFiles[0]);
  }, [setRejectedFiles, onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...defaultDropzoneOptions,
    onDropAccepted,
    onDropRejected: setRejectedFiles
  });

  const baseClassNames = "aspect-[210/297] p-12 flex flex-col gap-12 items-center justify-center bg-white border-2 border-dashed rounded-sm";
  const { onClick, ...rest } = getRootProps();
  return (
    <div
      {...rest}
      className={clsx(baseClassNames, isDragActive ? "border-[var(--color-primary)]" : "border-gray-300", className)}
      style={{ width: 210 * 2 }}
    >
      <input {...getInputProps()} />
      <FileUpIcon className="inline-block shrink-0 size-16 text-gray-300" strokeWidth={0.6} />
      <div className="flex flex-col items-center gap-4">
        <div className="font-medium text-gray-700 text-lg">
          Drag & drop your resume here
        </div>

        <div className="text-sm text-gray-400">
          OR
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="small"
            StartIcon={HardDriveUploadIcon} 
            onClick={onClick}
          >
            Upload
          </Button>
          <span className="font-medium text-gray-600">from your device</span>
        </div>

        <div className="text-sm text-gray-400">
          OR
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="neutral"
            size="small"
            StartIcon={CloudDownloadIcon}
          >
            Choose
          </Button>
          <span className="font-medium text-gray-600">from previously uploaded</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <FileWarningIcon className="inline-block shrink-0 size-4" />
          <span className="">PDF files only</span>
        </div>

        <div className="flex items-center gap-1">
          <CloudUploadIcon className="inline-block shrink-0 size-4" />
          <span className="">Up to {maxFileSizeInMB}MB</span>
        </div>
      </div>

      {rejectedFiles.length > 0 ? (
        <ul className="flex flex-col gap-1 pt-4">
          {rejectedFiles[0].errors.map((error) => (
            <li key={error.code} className="flex items-center gap-2 text-sm text-red-600">
              <OctagonAlertIcon className="inline-block shrink-0 size-4" />
              {error.message}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
