import { skills } from "@/app/data/content/home";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row jusitfy-between relative">
      <h2 className="text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 relative">
        All the experience in the world
        <br />
        rendered useless
        <br />
        without the right tools.
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              title={item.title}
              className="flex flex-col w-10 mx-auto justify-center items-center"
            >
              <Image
                src={item.icon}
                style={item.style}
                alt=""
                width="1000"
                height="1000"
              />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;