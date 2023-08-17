import { designs } from "@/app/data/content/designs";
import Image from "next/image";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full"
          >
            <a href={item.link} target="_blank" className="w-full">
              <Image
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
                alt=""
                width={48}
                height={48}
                unoptimized
              />
            </a>
          </div>
        );
      })}
    </div>
  )
};

export default Designs;