import { kebabCase } from "@/app/utils/utils";
import { Project } from "@/app/components/projects/Project";

const projects: Project[] = [
  {
    id: 0,
    title: "KitsuneCom",
    desc: "Web service company's website",
    img: "/projects/kitsunecom.png",
    link: "https://google.com/",
    github: "https://github.com/KitsuneCom-LLC/kitsunecom",
    tags: ["Gatsby.js", "React.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: 1,
    title: "PREZP",
    desc: "Website and software that trains a users to communicate well and teaches the user how to give more powerful, more professional, and more succinct presentations. Speech analytics and text analytics are used to rationalize data in 5-different areas, i.e. speech sentiment, words per minute, pitch, volume of speech, and pauses per minute.",
    img: "/projects/prezp-1.png",
    link: "https://google.com/",
    github: "https://gitlab.com/vr-111/comt-web/-/tree/master",
    tags: ["Azure",".NET 5.0", "C#", "Vue.js"],
  },
  {
    id: 2,
    title: "SAPV",
    desc: "Utilizes anonymous patient data drawn from spreadsheets in order to create a variety of fully-customizable data-charts via PowerBI. ",
    img: "/projects/sapv-1.png",
    link: "https://google.com/",
    github: "https://gitlab.com/sapv/sapv_server",
    tags: ["Django", "Python", "PowerBI", "Azure", "GraphQL", "React.js", "TailwindCSS"],
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