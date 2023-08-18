import Image from "next/image";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Designs
        <Image
          className="sqD w-12 -top-6 -right-10 absolute"
          src="/static/icons/floppy-disk.png"
          alt=""
          width={48}
          height={48}
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl">
        A picture is worth a thousand words. Let{`'`}s see what these have to say.
      </p>
    </div>
  );
}

export default Heading;