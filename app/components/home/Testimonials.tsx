import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/app/data/content/home";
import Image from "next/image";

function Testimonials() {
  return (
    <div>
      <SectionTitle title="What's the skuttlebutt?" />
      <div>
        {testimonials.map((item, index) => {
          return (
            <div
            key={index}
            className=""
            >
              <p className="text-base italic relative testimonialQuote">
               "{item.quote}"
              </p>
              <p>
                <b>{item.name}</b>
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