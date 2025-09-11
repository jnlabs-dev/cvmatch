"use client";

import clsx from "clsx";

import { TextInput } from "@/app/components/ui/TextInput";
import { JobDetails } from "@/app/lib/job/jobDetails";

type JobDetailsFormProps = {
  className?: string;
  jobDetails: JobDetails | null;
  onJobDetailsChange: (jobDetails: JobDetails) => void;
};


export function JobDetailsForm({
  className,
  jobDetails,
  // onJobDetailsChange
}: JobDetailsFormProps) {
  
  return (
    <div className={clsx("p-4", className)}>
      <TextInput
        placeholder="Job Title"
        value={jobDetails?.title || ""}
        // onChange={(e) => onJobDetailsChange({ ...jobDetails, title: e.target.value })}
      />
    </div>
  )
}
