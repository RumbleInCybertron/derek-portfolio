"use client"

import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="z-1 relative w-full pt-20 pb-40 m-auto flex flex-col items-center justify-center text-center heroElem"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, This is D-Roc.</p>
        <h1 className="relative inline-block font-bold text-5xl max-w-2xl lg:max-w-4xl lg:text-7xl md:text-6xl tracking-tighter mb-10 w-auto heroTitle">
          <span className="text-fun-pink">Innovating</span> and <span className="text-fun-pink">designing</span> for the <span className="text-fun-pink">web</span> and for <span className="text-fun-pink">your business</span>.
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg cursor-pointer hover:bg-fun-pink hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  )
}

export default Hero;