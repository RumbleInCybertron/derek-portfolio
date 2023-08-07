import Image from "next/image";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}>
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
            <Image 
              className="sqD w-10 -top-8 -right-8 absolute"
              src="/static/icons/kitsune-1.png"
              alt=""
              width={24}
              height={24}
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects
          <Image 
              className="sqD -top-14 -right-12 absolute w-[80px]"
              src="/static/icons/kitsune-1.png"
              alt=""
              width={100}
              height={100}
            />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I have designed, built and deployed a plethora of applications and websites
          using the power of HTML, CSS and various frameworks, as well as created
          multiple games using both the Unity Engine and Unreal Engine 4/5.
        </p>
      )}
    </div>
  )
};

export default Heading;