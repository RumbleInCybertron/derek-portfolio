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
      </div>
    </>
  )
}

export default Hero;