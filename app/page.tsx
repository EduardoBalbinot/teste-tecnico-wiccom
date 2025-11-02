import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Packs from "@/components/sections/Packs";
import PaymentFeatures from "@/components/sections/PaymentFeatures";
import Services from "@/components/sections/Services";
import Specialties from "@/components/sections/Specialties";
import Units from "@/components/sections/Units";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specialties />
      <PaymentFeatures />
      <Services />
      <Units />
      <Packs />
      <Footer />
    </>
  );
}
