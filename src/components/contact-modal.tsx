"use client"

import React from "react"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
} from "@/components/ui/credenza"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactModal() {
  const [open, setOpen] = React.useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSending(true);
    setSendStatus('idle');
  
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
            from_name: data.name,
            to_name: "Hubert",
            email: data.email,
            topic: "Portfolio message",
            message: data.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSendStatus('success');
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll answer as fast as possible.",
      })
      setOpen(false)
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Contact Me</CredenzaTitle>
          <CredenzaDescription>
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </CredenzaDescription>
        </CredenzaHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CredenzaBody>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  placeholder="Your email"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                )}
              </div>
            </div>
          </CredenzaBody>
          <CredenzaFooter className="!justify-center">
            <div className="flex flex-col gap-3 text-center mt-2">
                <Button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </Button>
                {sendStatus === 'success' && (
                    <p className="text-sm text-green-500">Message sent successfully!</p>
                )}
                {sendStatus === 'error' && (
                    <p className="text-sm text-red-500">Failed to send message. Please try again.</p>
                )}
            </div>
        </CredenzaFooter>
        </form>
      </CredenzaContent>
    </Credenza>
  )
}
