import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
    return (
      <main>
        <Header />
        <div className="max-container">
          <ContactForm />
        </div>
        <Footer />
      </main>
    )
  }
  