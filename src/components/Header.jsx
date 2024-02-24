import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "./Navbar";

const ModeToggle = dynamic(() => import("./ui/ModeToggle"), {
  ssr: true
});

const Header = () => {
  return (
    <header className="pt-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center tiny-center">
          <div className="font-black italic tiny"><Link href="/">Portfolio</Link></div>
          <div className="flex items-center gap-x-7">
              <Navbar
                containerStyles="flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                linkUnderlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
              <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
