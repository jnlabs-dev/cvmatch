"use client";

import clsx from "clsx";

import { CheckIcon } from "lucide-react";

import { Progress } from "@/app/components/ui/Progress";
import { ProjectStepId } from "@/app/lib/project/steps";

type ProjectStepProps = {
  id: ProjectStepId;
  index: string;
  label: string;
  active: boolean;
  progress: number;
}
export function ProjectStep({
  index,
  label,
  active,
  progress
}: ProjectStepProps) {
  const completed = progress === 100;
  return (
    <div className="flex flex-1 flex-col  gap-1">
      <div className="self-start flex items-center gap-2">
        <span
          className={clsx(
            "flex items-center justify-center text-xl font-bold",
            active || completed ? "text-[var(--color-secondary)]" : "text-gray-400"
          )}
        >
          {index}
        </span>
        <span
          className={clsx(
            "text-[0.625rem]/[0.625rem] font-medium whitespace-pre-line",
            active || completed ? "text-[var(--color-secondary)]" : "text-gray-400"
          )}
        >
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "flex items-center justify-center rounded-full border-2 size-3 mx-1.5",
            active ? "border-[var(--color-secondary)]" : "border-gray-300",
            completed ? "bg-[var(--color-secondary)]" : "bg-white"
          )}>
          {completed ? <CheckIcon className="shrink-0 size-2 text-white" strokeWidth={5} /> : null}
        </span>
        <Progress className="flex-1" size="small" value={progress} />
      </div>
    </div>
  );
}
