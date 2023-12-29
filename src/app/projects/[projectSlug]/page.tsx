export function generateStaticParams() {
    return [
        { projectSlug: 'character-factory' },
        { projectSlug: 'ai-companion' },
        { projectSlug: 'rogger' }
    ]
  }

interface PageProps {
    params: {
        projectSlug: string
    }
}

export default function ProjectDetails({ params }: PageProps) {
    const { projectSlug } = params;

    return (
      <main>
        Project {projectSlug}
      </main>
    )
  }
  