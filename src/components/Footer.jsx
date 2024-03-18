import { socials } from "@/const"
import Link from "next/link"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <hr />
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0">
          <span className="text-sm text-center">© {new Date().getFullYear()} <b>Hubert Kasperek </b></span>
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.link}>
                <Image src={social.iconUrl} className="dark:invert" alt={social.name} width={30} height={30} />
              </Link>
            ))}
          </div>
        </div>
    </footer>
  )
}


export default Footer