import Page from "@/app/components/utility/Page";
// import CTA from "@/app/components/home/CTA";
import Hero from "@/app/components/home/Hero";
import Projects from "@/app/components/home/Projects";
import Skills from "@/app/components/home/Skills";
// import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Dedicated to the design and development of elegant websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        {/*<Testimonials /> */}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/* <CTA /> */}
    </Page>
  );
}
