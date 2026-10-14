import HeroContact from "../components/contactPageComponent/herocontact";
import ContactForm from "../components/contactPageComponent/contactform";
import ContactInfo from "../components/contactPageComponent/contactinfo";

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <section className="max-w-6xl mx-auto px-5 py-14 grid gap-12 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </section>
    </>
  );
}
