"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

import { SaveIcon } from "lucide-react";

import { TextInput } from "@/app/components/ui/TextInput";
import { Button } from "@/app/components/ui/Button";
import { ResumeDropzone } from "@/app/components/resume/ResumeDropzone";
import { ResumePreview } from "@/app/components/resume/ResumePreview";

import { toggleSidebarMinified } from "@/app/utils/hsOverlayHelpers";

type ProjectPageParams = {
  projectId: string
}

export default function ProjectPage() {
  const { projectId } = useParams<ProjectPageParams>();
  const router = useRouter();

  const [projectName, setProjectName] = useState(projectId === "new" ? "Untitled Project" : "");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const onCancel = () => {
    // TODO: show a confirmation dialog
    router.push("/projects");
  };

  const onFileAccepted = (acceptedFile: File) => {
    toggleSidebarMinified(true);
    setResumeFile(acceptedFile);
  }

  return (
    <div className="h-full flex flex-col md:grid md:grid-cols-2 overflow-y-auto md:overflow-hidden">
      <div className="flex flex-col p-3 xs:p-4 xl:px-6 xl:py-8 gap-8 md:overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center">
          {resumeFile ? (
            <ResumePreview
              file={resumeFile}
              onFileClose={() => setResumeFile(null)}
            />
          ) : (
            <ResumeDropzone
              className="mb-8"
              onFileAccepted={onFileAccepted}
            />
          )}
        </div>
      </div>
      <div className="bg-white border-l border-gray-200">
        <div className="flex items-center justify-between p-3 xs:p-4 xl:p-6 border-b border-gray-200">
          <TextInput
            name="projectName"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <div className="flex gap-2">
            <Button
              size="small"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              size="small"
              disabled
              StartIcon={SaveIcon}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
