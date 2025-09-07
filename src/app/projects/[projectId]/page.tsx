type ProjectPageParams = {
  projectId: string
}

type ProjectPageProps = {
  params: Promise<ProjectPageParams>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  return (
    <div className="p-3 xs:p-4 lg:px-6 lg:py-8">
      <h1 className="text-xl font-semibold">Project {projectId} Page</h1>
    </div>
  )
}
