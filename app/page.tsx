import About from "@/components/About";
import Atmosphere from "@/components/Atmosphere";
import BookSection from "@/components/BookSection";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import MessengerButton from "@/components/MessengerButton";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Atmosphere />
        <Events />
        <Reviews />
        <BookSection />
      </main>
      <SiteFooter />
      <MessengerButton />
    </>
  );
}
