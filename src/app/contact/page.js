import dynamic from 'next/dynamic'

import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import Footer from "@/components/Footer";
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
});

export const metadata = {
  title: 'Contact | Hubert Kasperek\'s portfolio website',
  description: 'Hubert \'Hukasx0\' Kasperek\'s portfolio website (contact form)',
  keywords: ["portfolio", "Hubert Kasperek", "projects", "projects list", "skills", "contact", "Hukasx0", "fullstack developer", "backend developer", "frontend developer", "discord contact", "mail contact", "matrix contact"]
};

export default function Contact() {
    return (
      <main>
        <div className='inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
          <Header />
          <div className="max-container">
            <ContactForm />
            <div className="sm:py-15 py-10">
              <h3 className="lg:text-[35px] sm:text-[32px] xs:text-[35px] text-[25px] lg:leading-[35px] text-center">Or</h3>
              <h3 className="lg:text-[25px] sm:text-[22px] xs:text-[25px] text-[15px] lg:leading-[25px] text-center sm:mt-5 mt-2">Reach me out here</h3>
              <ContactList />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }
  