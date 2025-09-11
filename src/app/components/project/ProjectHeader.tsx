"use client";

import clsx from "clsx";

import { SaveIcon } from "lucide-react";

import { TextInput } from "@/app/components/ui/TextInput";
import { Button } from "@/app/components/ui/Button";

type ProjectHeaderProps = {
  className?: string;
  projectName: string;
  hasUnsavedChanges: boolean;
  setProjectName: (name: string) => void;
  onCancel: () => void;
  onSave: () => void;
}

export function ProjectHeader({
  className,
  projectName,
  hasUnsavedChanges,
  setProjectName,
  onCancel,
  onSave
}: ProjectHeaderProps) {
  return (
    <div className={clsx("flex items-center justify-between p-3 xs:p-4 xl:px-6", className)}>
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
          variant="secondary"
          disabled={!hasUnsavedChanges}
          StartIcon={SaveIcon}
          onClick={onSave}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
