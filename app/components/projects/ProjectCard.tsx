import Image from "next/image";

function ProjectCard({project}) {
  return(
    <div
      className="flex flex-col mx-auto max-w-sm md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <Image
          className="w-full rounded-md" 
          src={project.img}
          alt=""
          width="600"
          height="400"
        />
      </a>
    </div>
  )
}

export default ProjectCard;