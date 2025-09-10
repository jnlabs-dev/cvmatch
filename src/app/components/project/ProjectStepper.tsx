"use client";

import clsx from "clsx";

import { Progress } from "@/app/components/ui/Progress";

export enum ProjectStepId {
  Setup = "setup",
  Analysis = "analysis",
  Apply = "cover-letter",
  Export = "Export",
}

type ProjectStepProps = {
  id: ProjectStepId;
  index: string;
  label: string;
  progress: number;
}
function ProjectStep({
  index,
  label,
  progress
}: ProjectStepProps) {
  return (
    <div className="flex flex-1 flex-col  gap-1">
      <div className="self-start flex items-center gap-2">
        <span className="flex items-center justify-center text-gray-400 text-xl font-bold">
          {index}
        </span>
        <span className="text-[0.625rem]/[0.625rem] text-gray-400 font-medium whitespace-pre-line">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center rounded-full border-2 border-gray-300 size-3 mx-1.5">
          {/* Add the checkmark icon */}
        </span>
        <Progress className="flex-1" size="small" value={progress} />
      </div>
    </div>
  );
}

type ProjectStepperProps = {
  className?: string;
  activeStep: ProjectStepId;
  // completedSteps: ProjectStep[];
}

export function ProjectStepper({
  className,
}: ProjectStepperProps) {
  return (
    <div className={clsx("flex p-3 xs:p-4 xl:px-6 gap-3", className)}>
      <ProjectStep
        id={ProjectStepId.Setup}
        index="01"
        label={`Add Resume \n & Job`}
        progress={25}
      />
      <ProjectStep
        id={ProjectStepId.Analysis}
        index="02"
        label={`Run \n Analysis`}
        progress={0}
      />
      <ProjectStep
        id={ProjectStepId.Apply}
        index="03"
        label={`Apply \n Changes`}
        progress={0}
      />
      <ProjectStep
        id={ProjectStepId.Export}
        index="04"
        label={`Export \n CV`}
        progress={0}
      />
    </div>
  )
}
