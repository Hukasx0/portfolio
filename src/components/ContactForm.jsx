"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: ''});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Hubert",
        email: form.email,
        topic: form.topic,
        message: form.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setSending(false);
        setForm({ name: '', email: '', topic: '', message: ''});
        toast({
          title: "Message was sent successfully", 
          description: "I should receive it soon. if I don't respond within a few days, please try to contact me another way"
        },
      (error) => {
        setSending(false);
        setForm({ name: '', email: '', topic: '', message: ''});
        toast({
          title: "Error sending message",
          variant: "destructive",
          description: "Please try again later or contact me in another way. (Full error message is printed in the browser console)"
        });
        console.error(error);
      });
    }).catch((error) => {
      setSending(false);
      setForm({ name: '', email: '', topic: '', message: ''});
      toast({
        title: "Error sending message",
        variant: "destructive",
        description: "Please try again later or contact me in another way. (Full error message is printed in the browser console)"
      });
      console.error(error);
    });
  }

  return (
    <section className="relative flex lg:flex-row flex-col">
        <div className="flex-1 min-w-[50%] flex flex-col items-center">
            <h1 className="lg:text-[70px] sm:text-[65px] xs:text-[70px] text-[50px] lg:leading-[70px] text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">Let&apos;s talk</h1>
            <form
              className="w-full flex flex-col gap-5 sm:gap-7 sm:mt-14 mt-7"
              onSubmit={handleSubmit}
            >
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="bg-background"
                />
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your e-mail address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-background"
                />
                <Label htmlFor="topic">Topic</Label>
                <Input 
                  type="text"
                  id="topic"
                  name="topic"
                  placeholder="Topic"
                  required
                  value={form.topic}
                  onChange={handleChange}
                  className="bg-background"
                />
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  placeholder="Type your message here."
                  onChange={handleChange}
                  className="bg-background"
                />
                <Button
                  type="submit"
                  disabled={sending}
                  className="font-medium animate-shimmer transition-color bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:bg-[linear-gradient(110deg,#FFFFFF,45%,#D1D1D1,55%,#FFFFFF)] bg-[length:200%_100%] rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-5 text-center"
                >
                  {sending ? 'Sending...' : 'Message me'}
                </Button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm