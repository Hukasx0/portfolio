const Hero = () => {
  return (
    <section>
      <div className="text-sm uppercase font-semibold mv-4 text-primary tracking-[4px]">Fullstack Developer</div>
        <h1 className="lg:text-[80px] sm:text-[65px] xs:text-[80px] text-[50px] lg:leading-[80px]">Hi there!
          <span className="wave lg:text-[65px] sm:text-[65px] xs:text-[65px] text-[50px] lg:leading-[80px] pl-5">👋</span>
        </h1>
        <div className="text-muted-foreground font-medium lg:text-[40px] sm:text-[40px] xs:text-[40px] text-[32px] lg:leading-[40px]">
          <span className="font-semibold drop-shadow">my name is Hubert Kasperek</span>
        </div>
        <p className="font-semibold lg:text-[20px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[20px]">I create fast, efficient and cheap to maintain backends, along with a clean, intuitive and easy to navigate frontends</p>
    </section>
  )
}

export default Hero;
