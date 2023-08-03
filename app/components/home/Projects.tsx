import projects from "@/app/data/content/projects";
import ProjectCard from '@/app/components/projects/ProjectCard';
import Link from "next/link";

function Projects() {
  return (
    <div className="flex flex-col">
      <div>
        {projects.slice(0, 3).map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          )
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Projects;