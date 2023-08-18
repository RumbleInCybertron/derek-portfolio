import { kebabCase } from "@/app/utils/utils";
import { Project } from "@/app/components/projects/Project";

const projects: Project[] = [
  {
    id: 0,
    title: "KitsuneCom",
    desc: " Website for a company which provides web and mobile application solutions.",
    img: "/projects/kitsunecom.png",
    link: "https://google.com/",
    github: "https://github.com/KitsuneCom-LLC/kitsunecom",
    tags: ["Gatsby.js", "React.js", "TypeScript", "Tailwind"],
  },
  {
    id: 1,
    title: "PREZP",
    desc: "Website and software that trains users to give better live presentations.",
    img: "/projects/prezp-1.png",
    link: "https://prezp.com/en/",
    github: "https://gitlab.com/vr-111/comt-web/-/tree/master",
    tags: ["Azure",".NET 5.0", "C#", "Vue.js"],
  },
  {
    id: 2,
    title: "SAPV",
    desc: "Utilizes patient data in order to create a variety of fully-customizable data-charts via PowerBI. ",
    img: "/projects/sapv-1.png",
    github: "https://gitlab.com/sapv/sapv_server",
    tags: ["Django", "PowerBI", "GraphQL", "React.js", "Tailwind"],
  },
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

export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
));

export default projects;