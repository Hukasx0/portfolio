const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="text-xs sm:text-sm uppercase font-semibold mt-2 text-primary tracking-[4px] text-center">Fullstack Developer</div>
        <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[50px] tiny-hero-text lg:leading-[98px] mt-2">Hi there!
          <span className="wave lg:text-[65px] sm:text-[65px] xs:text-[65px] text-[50px] lg:leading-[80px] pl-5">👋</span>
        </h1>
        <div className="text-muted-foreground my-4 font-medium lg:text-[40px] sm:text-[40px] xs:text-[40px] text-[20px] lg:leading-[40px] tiny-hero-subtext">
          <span className="font-semibold drop-shadow">My name is <span className="font-bold">Hubert Kasperek</span></span>
        </div>
        <p className="text-muted-foreground my-4 text-center font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">I create fast, efficient and cheap to maintain backends, along with a clean, intuitive and easy to navigate frontends</p>
    </section>
  )
}

export default Hero;
