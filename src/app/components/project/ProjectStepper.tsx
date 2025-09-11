"use client";

import clsx from "clsx";

import { ProjectStepId, ProjectStepProgressMap } from "@/app/lib/project/steps";
import { ProjectStep } from "@/app/components/project/ProjectStep";

type ProjectStepperProps = {
  className?: string;
  activeStep: ProjectStepId;
  stepProgressMap: ProjectStepProgressMap;
}

export function ProjectStepper({
  className,
  activeStep,
  stepProgressMap
}: ProjectStepperProps) {
  const steps = [
    {
      id: ProjectStepId.Setup,
      index: "01",
      label: `Add Resume \n & Job`,
    },
    {
      id: ProjectStepId.Analysis,
      index: "02",
      label: `Get \n Analysis`,
    },
    {
      id: ProjectStepId.Apply,
      index: "03",
      label: `Apply \n Changes`,
    },
    {
      id: ProjectStepId.Export,
      index: "04",
      label: `Export \n CV`,
    },
  ]

  return (
    <div className={clsx("flex p-3 xs:p-4 xl:px-6 gap-3", className)}>
      {steps.map((step) => (
        <ProjectStep
          key={step.id}
          id={step.id}
          active={activeStep === step.id}
          index={step.index}
          label={step.label}
          progress={stepProgressMap[step.id]}
        />
      ))}
    </div>
  )
}
