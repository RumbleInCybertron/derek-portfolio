"use client"

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

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
          <Image
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/icons/old-pc.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/icons/kitsune-1.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[150px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/icons/old-pc.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/icons/old-pc.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/icons/old-pc.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/icons/floppy-disk-bebe.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD right-[-60px] sm:right-0 lg:[5%]"
            src="/static/icons/floppy-disk.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/icons/kitsune-1.png"
            alt=""
            width="80"
            height="80"
          />
          <Image
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/icons/docu-binary.png"
            alt=""
            width="80"
            height="80"
          />
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