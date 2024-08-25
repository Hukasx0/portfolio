import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { ContactModal } from "../contact-modal";

export default function CTA() {
    return (
        <Card className="w-full">
            <CardContent className="p-6 text-center my-6">
                <Balancer>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to start a project?</h2>
                        <p className="text-xl text-muted-foreground mb-6">Let&apos;s work together to bring your ideas to life!</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ContactModal />
                        </div>
                    </div>
                </Balancer>
            </CardContent>
        </Card>
    );
}
