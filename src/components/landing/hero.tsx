"use client";

import { FaGithub, FaTwitter, FaProductHunt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactModal } from "../contact-modal";
import OrbitingItems from "../ui/animata/list/orbiting-items";
import { SiDrizzle, SiNextdotjs, SiReact, SiTailwindcss, SiTurso, SiTypescript } from "react-icons/si";
import SwipeButton from "../ui/animata/button/swipe-button";
import { MoveDown } from "lucide-react";

import { motion } from "framer-motion"

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

    const [isJsEnabled, setIsJsEnabled] = useState(false);

    useEffect(() => {
        setIsJsEnabled(true);
    }, []);

    return (
        <Card className={cn("w-full", "mt-16")}>
            <CardContent className="p-6 my-3">
                    <div className="flex flex-col items-center text-center">
                        <OrbitingItems
                            items={[
                                <SiNextdotjs key="nextjs" className="h-6 w-6" />,
                                <SiReact key="react" className="h-6 w-6" />,
                                <SiTypescript key="typescript" className="h-6 w-6" />,
                                <SiTailwindcss key="tailwind" className="h-6 w-6" />,
                                <SiTurso key="turso" className="h-6 w-6" />,
                                <SiDrizzle key="drizzle" className="h-6 w-6" />,
                            ]}
                            radius={50}
                        />
                        {isJsEnabled ? 
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        >
                            <Balancer>
                            Hi, I&apos;m <span className="text-primary">Hubert</span>{" "}
                            <span className="wave inline-block animate-wave">👋</span>
                            </Balancer>
                            </motion.h1>
                            :
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <Balancer>
                                    Hi, I&apos;m <span className="text-primary">Hubert</span>{" "}
                                    <span className="wave inline-block animate-wave">👋</span>
                                </Balancer>
                            </h1>
                        }

                        {isJsEnabled ?
                        <motion.h2 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75 }}
                            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8"
                        >
                            <Balancer>
                                Fullstack web developer from Poland 🇵🇱 passionate about creating innovative solutions
                            </Balancer>
                        </motion.h2>
                        :
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
                            <Balancer>
                                Fullstack developer from Poland 🇵🇱 passionate about creating innovative solutions
                            </Balancer>
                        </h2>
                        }

                        <div className="flex gap-4 mb-8">
                            <Link href="#projects">
                            <SwipeButton
                                className=""
                                firstClass="bg-primary text-primary-foreground"
                                firstText="My projects"
                                secondClass="bg-secondary text-secondary-foreground flex flex-row justify-center"
                                secondText=<MoveDown className="w-5 h-5 pt-1" />
                            />
                            </Link>
                            <ContactModal />
                        </div>
                        <div className="flex space-x-6">
                            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My GitHub account">
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My Twitter/X account">
                                <FaTwitter className="w-6 h-6" />
                            </Link>
                            <button onClick={handleCopyEmail} className="text-muted-foreground hover:text-foreground transition-colors" value={"copy e-mail address to clipboard"} aria-label="Copy my e-mail address to clipboard">
                                <MdEmail className="w-6 h-6" />
                            </button>
                            <Link href="https://www.producthunt.com/@Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My Product Hunt account">
                                <FaProductHunt className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
            </CardContent>
        </Card>
    );
}
