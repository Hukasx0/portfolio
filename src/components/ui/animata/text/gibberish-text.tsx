import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GibberishTextProps {
  text: string;
  className?: string;
}

const Letter = ({ letter, className }: { letter: string; className?: string }) => {
  const [code, setCode] = useState(letter.charCodeAt(0));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let count = Math.floor(Math.random() * 10) + 5;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 65);
      count--;
      if (count === 0) {
        setCode(letter.charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);
    return () => clearInterval(interval);
  }, [letter]);

  if (!isClient) {
    return <span className={cn("whitespace-pre text-foreground", className)}>{letter}</span>;
  }

  return (
    <span className={cn("whitespace-pre text-foreground", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};

export default function GibberishText({ text, className }: GibberishTextProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      {text.split("").map((letter, index) => (
        <Letter className={className} letter={letter} key={`${index}-${letter}`} />
      ))}
    </>
  );
}
