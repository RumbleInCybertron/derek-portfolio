type Skill = {
  title: string,
  icon: string,
  style?: object
};

type Testimonial = {
  quote: string,
  name: string,
  job: string
};

export const skills: Skill[] = [
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(100%)" },
  },
  {
    title: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Rails",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
  },
  // {
  //   title: "C++",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  // },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    title: "Dotnet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
  },
  {
    title: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    title: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  },
  {
    title: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
  },
  // {
  //   title: "Unity",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  // },
  // {
  //   title: "Unreal Engine",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
  // },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    title: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  },
  {
    title: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
  },
  // {
  //   title: "PostgreSQL",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  // },
  {
    title: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We were able to add functionality to our platform while overall cutting costs.",
    name: "Yoo Minho",
    job: "Owner of ProgX",
  },
  {
    quote:
      "Our vision was executed perfectly. The quality of the work was outstanding.",
    name: "Lee Sungho",
    job: "Manager at Mapdesign Co.",
  },
  {
    quote:
      "The communication throughout the project was excellent and the designs were carried out well.",
    name: "Koo Jiun",
    job: "Art Director of Jiun Koo Makeup",
  },
];