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
    id: 3,
    title: "Turo - Car Sharing Platform",
    desc: "Fleet car sharing insurance policy management platform.",
    img: "/projects/ci-logo.png",
    link: "https://connectedinsurance.ai/",
    tags: ["AWS", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Terraform"],
  },
  {
    id: 4,
    title: "Giggster - Property Sharing Platform",
    desc: "Property sharing insurance policy management platform.",
    img: "/projects/ci-logo.png",
    link: "https://connectedinsurance.ai/",
    tags: ["AWS", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Terraform"],
  },
  {
    id: 5,
    title: "CI - Claims Management Platform",
    desc: "Insurance claim submission and management platform.",
    img: "/projects/ci-logo.png",
    tags: ["AWS", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Terraform"],
  },
  {
    id: 6,
    title: "Skrizzle",
    desc: "Manage Scrum meetings",
    img: "/projects/skrizzle.png",
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