import { kebabCase } from "@/app/utils/utils";
import { Project } from "@/app/types/page";

const projects: Project[] = [
  {
    id: 0,
    title: "Project 1",
    desc: "Sample Description for Project 1",
    img: "/projects/skrizzle.png",
    link: "https://google.com/",
    github: "https://github.com/RumbleInCybertron/Skrizzle",
    tags: ["Swift"],
  },
  {
    id: 1,
    title: "Project 2",
    desc: "Sample Description for Project 2",
    img: "/projects/skrizzle.png",
    link: "https://google.com/",
    github: "https://github.com/RumbleInCybertron/Skrizzle",
    tags: ["Swift"],
  },
  {
    id: 2,
    title: "Project 3",
    desc: "Sample Description for Project 3",
    img: "/projects/skrizzle.png",
    link: "https://google.com/",
    github: "https://github.com/RumbleInCybertron/Skrizzle",
    tags: ["Swift"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
));

export default projects;