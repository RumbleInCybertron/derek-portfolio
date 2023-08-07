import type { Metadata } from "next";
import Heading from "@/app/components/projects/Heading";
import Page from "@/app/components/utility/Page";
import Projects from "@/app/components/projects/Projects";
import More from "@/app/components/projects/More";

export const metadata: Metadata = {
  title: "Projects",
  description: "I code using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
};

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I code using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  )
}

export default projects;