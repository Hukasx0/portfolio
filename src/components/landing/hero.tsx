"use client";

import { FaGithub, FaTwitter, FaProductHunt } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "../ui/card";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactModal } from "../contact-modal";
import OrbitingItems from "../ui/animata/list/orbiting-items";
import { SiDrizzle, SiNextdotjs, SiReact, SiTailwindcss, SiTurso, SiTypescript } from "react-icons/si";
import { MoveDown } from "lucide-react";

import { motion } from "framer-motion"
import SwipeButton from "../ui/animata/button/swipe-button";

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

    const handleDownloadResume = () => {
        const resumeUrl = '/resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Hubert_Kasperek_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
            title: "Resume downloaded!",
            description: "Resume has been downloaded successfully.",
        });
    };

    const [isJsEnabled, setIsJsEnabled] = useState(false);

    useEffect(() => {
        setIsJsEnabled(true);
    }, []);

    return (
        <Card className="w-full mt-16 glass-card">
            <CardContent className="p-8 md:p-12 my-3">
                <div className="flex flex-col items-center text-center">
                    {isJsEnabled ? (
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 w-full max-w-[280px] md:max-w-[320px]"
                        >
                            <OrbitingItems
                                items={[
                                    <SiNextdotjs key="nextjs" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                    <SiReact key="react" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                    <SiTypescript key="typescript" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                    <SiTailwindcss key="tailwind" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                    <SiTurso key="turso" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                    <SiDrizzle key="drizzle" className="h-6 w-6 md:h-7 md:w-7 text-foreground/90" />,
                                ]}
                                radius={50}
                                containerClassName="!py-0"
                                className="h-[220px] md:h-[260px] w-[220px] md:w-[260px]"
                            />
                        </motion.div>
                    ) : (
                        <div className="mb-12 w-full max-w-[280px] md:max-w-[320px]">
                            <OrbitingItems
                                items={[
                                    <SiNextdotjs key="nextjs" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                    <SiReact key="react" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                    <SiTypescript key="typescript" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                    <SiTailwindcss key="tailwind" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                    <SiTurso key="turso" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                    <SiDrizzle key="drizzle" className="h-6 w-6 md:h-7 md:w-7 text-foreground/80" />,
                                ]}
                                radius={50}
                                containerClassName="!py-0"
                                className="h-[220px] md:h-[260px] w-[220px] md:w-[260px]"
                            />
                        </div>
                    )}

                    {isJsEnabled ? (
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                        >
                            <Balancer>
                                Hi, I&apos;m <span className="text-primary">Hubert</span>{" "}
                                <span className="wave inline-block">👋</span>
                            </Balancer>
                        </motion.h1>
                    ) : (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            <Balancer>
                                Hi, I&apos;m <span className="text-primary">Hubert</span>{" "}
                                <span className="wave inline-block">👋</span>
                            </Balancer>
                        </h1>
                    )}

                    {isJsEnabled ? (
                        <motion.h2 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.4 }}
                            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 tracking-tight"
                        >
                            <Balancer>
                                Fullstack web developer from Poland 🇵🇱 passionate about creating innovative solutions
                            </Balancer>
                        </motion.h2>
                    ) : (
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 tracking-tight">
                            <Balancer>
                                Fullstack web developer from Poland 🇵🇱 passionate about creating innovative solutions
                            </Balancer>
                        </h2>
                    )}

                    {isJsEnabled ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col space-y-4 mb-12 w-full max-w-xs"
                        >
                            <Link href="#projects">
                                <SwipeButton
                                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                                    firstClass="bg-foreground text-background font-medium"
                                    firstText="My projects"
                                    secondClass="bg-primary/10 text-primary flex flex-row justify-center font-medium"
                                    secondText=<MoveDown className="w-5 h-5 pt-1" />
                                />
                            </Link>
                            <ContactModal />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col space-y-4 mb-12 w-full max-w-xs">
                            <Link href="#projects">
                                <SwipeButton
                                    className="shadow-lg hover:shadow-xl transition-all duration-300"
                                    firstClass="bg-foreground text-background font-medium"
                                    firstText="My projects"
                                    secondClass="bg-primary/10 text-primary flex flex-row justify-center font-medium"
                                    secondText=<MoveDown className="w-5 h-5 pt-1" />
                                />
                            </Link>
                            <ContactModal />
                        </div>
                    )}

                    {isJsEnabled ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex space-x-8"
                        >
                            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My GitHub account"
                            >
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My Twitter/X account"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </Link>
                            <button onClick={handleCopyEmail} 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="Copy my e-mail address to clipboard"
                            >
                                <MdEmail className="w-6 h-6" />
                            </button>
                            <Link href="https://www.producthunt.com/@Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My Product Hunt account"
                            >
                                <FaProductHunt className="w-6 h-6" />
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="flex space-x-8">
                            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My GitHub account"
                            >
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My Twitter/X account"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </Link>
                            <button onClick={handleCopyEmail} 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="Copy my e-mail address to clipboard"
                            >
                                <MdEmail className="w-6 h-6" />
                            </button>
                            <Link href="https://www.producthunt.com/@Hukasx0" target="_blank" rel="noopener noreferrer" 
                                className="text-muted-foreground hover:text-foreground transition-all duration-300" 
                                aria-label="My Product Hunt account"
                            >
                                <FaProductHunt className="w-6 h-6" />
                            </Link>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
