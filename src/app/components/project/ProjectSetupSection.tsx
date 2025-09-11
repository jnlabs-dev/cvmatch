"use client";

import { JobDetails } from "@/app/lib/job/jobDetails";
import { JobDetailsForm } from "@/app/components/job/JobDetailsForm";

type ProjectSetupSectionProps = {
  jobDetails: JobDetails | null;
  onJobDetailsChange: (jobDetails: JobDetails) => void;
};

export function ProjectSetupSection({
  jobDetails,
  onJobDetailsChange
}: ProjectSetupSectionProps) {
  return (
    <div className="p-4">
      <JobDetailsForm
        jobDetails={jobDetails}
        onJobDetailsChange={onJobDetailsChange}
      />
    </div>
  )
}
