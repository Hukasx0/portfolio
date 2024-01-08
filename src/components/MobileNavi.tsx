import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import Navi from "./Navi";

const MobileNavi = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
        </SheetTrigger>
        <SheetContent>
            <div className="flex flex-col items-center gap-y-36">
                <div className="logo text-3xl">Portfolio</div>
                <SheetClose asChild>
                <Navi 
                    containerStyles="flex flex-col items-center gap-y-6"
                    linkStyles="text-2xl"
                    linkUnderlineStyles="" />
                </SheetClose>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavi