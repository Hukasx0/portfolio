import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


const ContactForm = () => {
  return (
    <section className="relative flex lg:flex-row flex-col">
        <div className="flex-1 min-w-[50%] flex flex-col items-center">
            <h1 className="lg:text-[80px] sm:text-[65px] xs:text-[80px] text-[50px] lg:leading-[80px]">Let's talk</h1>
            <form
            className="w-full flex flex-col gap-7 mt-14">
                <Label htmlFor="email">Name</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label htmlFor="email">Topic</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label htmlFor="email">Message</Label>
                <Textarea placeholder="Type your message here." />
                <Button>Message me</Button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm