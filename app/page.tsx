import Page from "@/app/components/utility/Page";
// import CTA from "@/components/home/CTA";
// import Hero from "@/components/home/Hero";
// import Projects from "@/components/home/Projects";
// import Skills from "@/components/home/Skills";
// import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Bending over backwards to design and develop elegant websites and apps." }}>
      {/* <Hero /> */}
      <div className="mt-20 space-y-32">
        {/* <Projects />
        <Skills />
        <Testimonials /> */}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/* <CTA /> */}
    </Page>
  );
}
