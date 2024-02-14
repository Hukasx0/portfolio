const Hero = () => {
  return (
    <section className="flex flex-col items-center border border-black/[0.2] dark:border-white/[0.2] p-3 sm:p-5 lg:p-20 relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <div className="text-xs sm:text-sm uppercase font-semibold mt-2 text-primary tracking-[4px] text-center">Fullstack Developer</div>
        <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[50px] tiny-hero-text lg:leading-[98px] mt-2">Hi there!
          <span className="wave lg:text-[65px] sm:text-[65px] xs:text-[65px] text-[50px] lg:leading-[80px] pl-5">👋</span>
        </h1>
        <div className="text-muted-foreground my-4 font-medium lg:text-[40px] sm:text-[30px] xs:text-[40px] text-[20px] lg:leading-[40px] tiny-hero-subtext">
          <span className="font-semibold drop-shadow">My name is <span className="font-bold bg-gradient-to-r from-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text">Hubert Kasperek</span></span>
        </div>
        <p className="text-muted-foreground my-4 text-center font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">I create fast, efficient and cheap to maintain backends, along with a clean, intuitive and easy to navigate frontends</p>
    </section>
  )
}

const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Hero;
