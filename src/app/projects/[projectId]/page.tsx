"use client";

import { useParams } from "next/navigation";

import { useState } from "react";

import { TextInput } from "@/app/components/ui/TextInput";

import { ResumeDropzone } from "@/app/components/resume/ResumeDropzone";

type ProjectPageParams = {
  projectId: string
}

export default function ProjectPage() {
  const { projectId } = useParams<ProjectPageParams>();
  const [projectName, setProjectName] = useState(projectId === "new" ? "Untitled Project" : "");
  return (
    <div className="h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      <div className="flex-1 flex flex-col p-3 xs:p-4 lg:px-6 lg:py-8 gap-8">
        <TextInput
          name="projectName"
          className="self-start"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <ResumeDropzone className="self-center aspect-[210/297] flex-1 max-w-full" />
      </div>
      <div className="flex-1 p-3 xs:p-4 lg:px-6 lg:py-8 bg-white">
        Job details
      </div>
    </div>
  )
}
