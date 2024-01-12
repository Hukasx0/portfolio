import Link from "next/link";
import { Button } from "@/components/ui/button"

const CallToAction = () => {
    return (
      <section className="sm:flex flex-row justify-between items-center mt-10">
        <p className="text-2xl mb-5 sm:mb-0">Head full of project ideas? <br className="sm:block hidden"/>
            Bring them to life!
        </p>
        <Link href="/contact"><Button className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Contact me</Button></Link>
      </section>
    )
  }
  
  export default CallToAction;
  