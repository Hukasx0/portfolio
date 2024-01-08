'use client';

import Navi from "./Navi";
import MobileNavi from "./MobileNavi";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">Portfolio</div>
          <div className="flex items-center gap-x-6">
              <Navi 
                containerStyles="hidden xl:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                linkUnderlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
          </div>
          <div className="xl:hidden">
            <MobileNavi />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header