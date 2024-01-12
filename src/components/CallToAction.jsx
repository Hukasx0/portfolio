import Link from "next/link";
import { Button } from "@/components/ui/button"

const CallToAction = () => {
    return (
      <section>
        <p>abc <br className="sm:block hidden"/>
            xyz
            <Link href="/contact"><Button className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7">Contact me</Button></Link>
        </p>
      </section>
    )
  }
  
  export default CallToAction;
  