import dynamic from "next/dynamic"

const AnimatedTooltip = dynamic(() => import('./ui/animated-tooltip'), {
  ssr: true
})

const Skills = () => {
  return (
    <section className="mt-16 flex flex-wrap gap-12 justify-center">
      <AnimatedTooltip />
    </section>
  )
}

export default Skills;
