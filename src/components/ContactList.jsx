import Image from 'next/image';
import { contactTypes } from "@/const"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';

const ContactList = () => {
  return (
    <section className="sm:mt-5 flex flex-wrap gap-12 justify-center">
              {contactTypes.map((contact) => (
                <TooltipProvider key={contact.name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={contact.link}>
                        <div className="block-container w-20 h-20">
                          <div className="btn-front rounded-xl flex justify-center items-center">
                            <Image
                              src={contact.iconUrl.src} 
                              alt={contact.name} 
                              width={contact.iconUrl.width}
                              height={contact.iconUrl.height}
                              className="w-1/2 h-1/2 object-contain"
                              />
                          </div>
                        </div>
                      </Link>
                  </TooltipTrigger>
                <TooltipContent>
                <p>{contact.name}</p>
                </TooltipContent>
               </Tooltip>
              </TooltipProvider>
              )) }
    </section>
  )
}

export default ContactList