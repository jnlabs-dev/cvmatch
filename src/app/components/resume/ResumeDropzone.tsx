"use client";

import clsx from "clsx";

import { useCallback } from "react";

import { useDropzone, type DropzoneOptions, type FileRejection } from 'react-dropzone';

const defaultDropzoneOptions: DropzoneOptions = {
  accept: {
    "application/pdf": [".pdf"],
  },
  multiple: false,
  maxFiles: 1,
  maxSize: 1000000, // 1mb
};

export type ResumeDropzoneProps = {
  className?: string;
  onFileAccepted: (acceptedFile: File) => void;
};

export function ResumeDropzone({
  className,
  onFileAccepted
}: ResumeDropzoneProps) {
  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    onFileAccepted(acceptedFiles[0]);
    // acceptedFiles.forEach((file) => {
    //   const reader = new FileReader()

    //   reader.onabort = () => console.log('file reading was aborted')
    //   reader.onerror = () => console.log('file reading has failed')
    //   reader.onload = () => {
    //   // Do whatever you want with the file contents
    //     const binaryStr = reader.result
    //     console.log("🚀 ~ ResumeDropzone ~ binaryStr:", binaryStr)
    //   }
    //   reader.readAsArrayBuffer(file)
    // })
  }, [onFileAccepted]);

  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    console.log("🚀 ~ ResumeDropzone ~ rejectedFiles:", rejectedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    ...defaultDropzoneOptions,
    onDropAccepted,
    onDropRejected
  });

  const baseClassNames = "";
  return (
    <div
      {...getRootProps()}
      className={clsx(baseClassNames, className)}
    >
      <input {...getInputProps()} />
      <div className="cursor-pointer p-12 flex w-full h-full items-center justify-center bg-white border border-dashed border-gray-300 rounded-sm">
        <div className="text-center">
          <div className="mt-4 flex flex-wrap justify-center text-sm/6 text-gray-600">
            <span className="pe-1 font-medium text-gray-800">
              Drop your file here or
            </span>
            <span className="bg-white font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] rounded-lg decoration-2 hover:underline">browse</span>
          </div>

          <p className="mt-1 text-xs text-gray-400">
            Pick a photo up to {defaultDropzoneOptions.maxSize ? defaultDropzoneOptions.maxSize / 1000000 : "1"}MB.
          </p>
        </div>
      </div>
    </div>
  );
}
