import Link from "next/link";

const CallToAction = () => {
    return (
      <section>
        <p>abc <br className="sm:block hidden"/>
            xyz
        </p>
        <Link href="/contact">Contact me</Link>
      </section>
    )
  }
  
  export default CallToAction;
  