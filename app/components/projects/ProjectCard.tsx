import { kebabCase } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
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
          width="1000"
          height="1000"
        />
      </a>
      <div>
        <div>
          <a>
            <h3>{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p></p>
        <ul>
          {project.tags.map((tag: string, index: number) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div>
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;