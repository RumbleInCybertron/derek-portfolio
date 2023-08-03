import { Project } from '@/app/types/page';
import projects from "@/app/data/content/projects";
import ProjectCard from '@/app/components/projects/ProjectCard';

type ProjectProps = {
  overwriteProjects?: Project[];
}

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  )
}

export default Projects;