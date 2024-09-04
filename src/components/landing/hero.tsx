"use client";

import { FaGithub, FaTwitter, FaProductHunt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactModal } from "../contact-modal";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
    const { toast } = useToast();
    const [email] = useState("hubertkasp13@gmail.com");

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast({
                title: "Email copied!",
                description: "The email address has been copied to your clipboard.",
            });
        });
    };

    return (
        <Card className={cn("w-full", "mt-0")}>
            <CardContent className="p-6 my-3">
                <Balancer>
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/portfolio/avatar.webp"
                            alt="Hubert"
                            width={120}
                            height={120}
                            className="rounded-full mb-6 border-4 border-primary hover:scale-105 transition-transform duration-300"
                        />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Hi, I&apos;m <span className="text-primary">Hubert</span>{" "}
                            <span className="wave inline-block animate-wave">👋</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
                            Fullstack developer from Poland 🇵🇱 passionate about creating innovative solutions
                        </h2>
                        <div className="flex gap-4 mb-8">
                            <Link href="#projects"><Button variant="default" size="lg">My Projects</Button></Link>
                            <ContactModal />
                        </div>
                        <div className="flex space-x-6">
                            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaTwitter className="w-6 h-6" />
                            </Link>
                            <button onClick={handleCopyEmail} className="text-muted-foreground hover:text-foreground transition-colors">
                                <MdEmail className="w-6 h-6" />
                            </button>
                            <Link href="https://www.producthunt.com/@Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaProductHunt className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </Balancer>
            </CardContent>
        </Card>
    );
}
