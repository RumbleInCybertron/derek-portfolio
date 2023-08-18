import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/app/data/content/home";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full m-auto">
      <SectionTitle title="What{`'`}s the skuttlebutt?" />
      <div className="max-w-5xl m-auto md:max-h-[200] grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
            key={index}
            className="flex flex-col justify-between relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full"
            >
              <p className="text-base italic relative testimonialQuote">
               "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials;