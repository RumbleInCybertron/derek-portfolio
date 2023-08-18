import projects from "@/app/data/content/projects";
import ProjectCard from '@/app/components/projects/ProjectCard';
import  { Project }  from "@/app/components/projects/Project";

type ProjectProps = {
  overwriteProjects?: Project[];
}

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} {...item} />;
      })}
    </div>
  )
}

export default Projects;