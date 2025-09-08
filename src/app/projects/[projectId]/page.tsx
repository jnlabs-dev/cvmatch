"use client";

import { useParams } from "next/navigation";

import { useState } from "react";

import { TextInput } from "@/app/components/ui/TextInput";
import { ResumeDropzone } from "@/app/components/resume/ResumeDropzone";
import { ResumePreview } from "@/app/components/resume/ResumePreview";

type ProjectPageParams = {
  projectId: string
}

export default function ProjectPage() {
  const { projectId } = useParams<ProjectPageParams>();
  const [projectName, setProjectName] = useState(projectId === "new" ? "Untitled Project" : "");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  return (
    <div className="h-full flex flex-col md:grid md:grid-cols-2 gap-4 overflow-y-auto md:overflow-hidden">
      <div className="flex flex-col p-3 xs:p-4 xl:px-6 xl:py-8 gap-8 md:overflow-hidden">
        <div className="flex-1">
          {resumeFile ? (
            <ResumePreview
              file={resumeFile}
              onFileClose={() => setResumeFile(null)}
            />
          ) : (
            <ResumeDropzone
              onFileAccepted={setResumeFile}
            />
          )}
        </div>
      </div>
      <div className="p-3 xs:p-4 lg:px-6 lg:py-8 bg-white min-h-[300px]">
        <TextInput
          name="projectName"
          className="self-start"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
    </div>
  )
}
