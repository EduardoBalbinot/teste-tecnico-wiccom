import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import PaymentFeatures from "@/sections/PaymentFeatures";
import Specialties from "@/sections/Specialties";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specialties specialties={["Cardiologia", "Endocrinologia", "Obstetrícia", "Gastroenterologia", "Cirurgia Geral", "Neurologia", "Ortopedia", "Dermatologia"]}/>
      <PaymentFeatures features={[
        {icon: "/images/UI/pix-icon.svg", title: "5% OFF NO PIX", description: "Desconto no pagamento antecipado"},
        {icon: "/images/UI/card-icon.svg", title: "10x sem juros", description: "Para compras a partir de R$500,00"},
        {icon: "/images/UI/percent-icon.svg", title: "DESCONTOS ESPECIAIS", description: "Planos e pacotes promocionais"},
        {icon: "/images/UI/fast-clock-icon.svg", title: "10x sem juros", description: "Para compras a partir de R$500,00"},
      ]}/>
    </>
  );
}
