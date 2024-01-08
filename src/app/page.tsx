"use client"


export default function Home() {
  return (
    <>
      <main className="flex flex-col text-center">
          <div className="text-primary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            <h1>Hello there!</h1>
          </div>
          <div className="text-muted-foreground font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            my name is Hubert Kasperek
          </div>
      </main>
    </>
  )
}
