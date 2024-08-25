"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [email] = useState("hubertkasp13@gmail.com");

    const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            toast({
                title: "Email copied!",
                description: "The email address has been copied to your clipboard.",
            });
        });
    };

    return (
        <Card id="contact" className="w-full">
            <CardContent className="p-6 text-center my-4">
                <Balancer>
                    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                    <p className="text-muted-foreground mb-6">
                        Feel free to reach out to me through any of the following platforms:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="outline" className="flex items-center gap-2">
                            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-5 h-5" />
                                GitHub
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex items-center gap-2">
                            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="w-5 h-5" />
                                Twitter
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex items-center gap-2">
                            <Link href="https://www.producthunt.com/@hukasx0" target="_blank" rel="noopener noreferrer">
                                <FaProductHunt className="w-5 h-5" />
                                Product Hunt
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex items-center gap-2">
                            <Link href="#" onClick={handleCopyEmail}>
                                <MdEmail className="w-5 h-5" />
                                Email
                            </Link>
                        </Button>
                    </div>
                </Balancer>
            </CardContent>
        </Card>
    )
}
