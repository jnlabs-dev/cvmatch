export enum ProjectStepId {
  Setup = "setup",
  Analysis = "analysis",
  Apply = "apply",
  Export = "export",
}

export type ProjectStepProgressMap = Record<ProjectStepId, number>;

type GetStepProgressMapParams = {
  resumeProvided: boolean;
  jobProvided: boolean;
}
export const getStepProgressMap = ({
  resumeProvided,
  jobProvided,
}: GetStepProgressMapParams) => {
  const progressMap: ProjectStepProgressMap = {
    [ProjectStepId.Setup]: 0,
    [ProjectStepId.Analysis]: 0,
    [ProjectStepId.Apply]: 0,
    [ProjectStepId.Export]: 0,
  };
  if (resumeProvided) {
    progressMap[ProjectStepId.Setup] += 100;
  }
  if (jobProvided) {
    progressMap[ProjectStepId.Setup] += 50;
  }

  return progressMap;
}