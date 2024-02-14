import Link from "next/link";
import { Button } from "@/components/ui/button"

const CallToAction = () => {
    return (
      <section className="sm:flex flex-row justify-between items-center mt-10">
        <p className="text-2xl mb-5 sm:mb-0 font-bold">Head full of project ideas? <br className="sm:block hidden"/>
            Bring them to life!
        </p>
        <Link href="/contact">
          <Button className="font-medium animate-shimmer transition-color border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Contact me
          </Button>
        </Link>
      </section>
    )
  }
  
  export default CallToAction;
  