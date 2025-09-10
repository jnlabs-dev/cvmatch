"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

import { ResumeDropzone } from "@/app/components/resume/ResumeDropzone";
import { ResumePreview } from "@/app/components/resume/ResumePreview";

import { ProjectHeader } from "@/app/components/project/ProjectHeader";
import { ProjectStepper, ProjectStepId } from "@/app/components/project/ProjectStepper";

import { toggleSidebarMinified } from "@/app/utils/hsOverlayHelpers";

type ProjectPageParams = {
  projectId: string
}

export default function ProjectPage() {
  const { projectId } = useParams<ProjectPageParams>();
  const router = useRouter();

  const initialProjectName = projectId === "new" ? "Untitled Project" : "";
  const [currentStep, setCurrentStep] = useState<ProjectStepId>(ProjectStepId.Setup);
  const [projectName, setProjectName] = useState(initialProjectName);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const onCancel = () => {
    // TODO: show a confirmation dialog
    router.push("/projects");
  };

  const onFileAccepted = (acceptedFile: File) => {
    toggleSidebarMinified(true);
    setResumeFile(acceptedFile);
  }

  const hasUnsavedChanges = projectName.trim() !== initialProjectName || !!resumeFile;
  const onSave = () => {
    // TODO: handle save
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
        <ProjectHeader
          className="border-b border-gray-200"
          projectName={projectName}
          hasUnsavedChanges={hasUnsavedChanges}
          setProjectName={setProjectName}
          onCancel={onCancel}
          onSave={onSave}
        />
        <ProjectStepper
          className="border-b border-gray-200"
          activeStep={currentStep}
        />
      </div>
    </div>
  )
}
