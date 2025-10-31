import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import PaymentFeatures from "@/sections/PaymentFeatures";
import Services from "@/sections/Services";
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
        {icon: "/images/UI/card-icon.svg", title: "10X sem juros", description: "Para compras a partir de R$500,00"},
        {icon: "/images/UI/percent-icon.svg", title: "DESCONTOS ESPECIAIS", description: "Planos e pacotes promocionais"},
        {icon: "/images/UI/fast-clock-icon.svg", title: "ATENDIMENTO PERSONALIZADO", description: "Agendamento sem burocracia"},
      ]}/>
      <Services services={[
        {icon: "/images/UI/consultas-icon.svg", title: "Consultas", description: "a partir de R$99,99", iconAlt: "icone de consultas"},
        {icon: "/images/UI/exames-icon.svg", title: "Exames", description: "a partir de R$18,00", iconAlt: "icone de exames"},
        {icon: "/images/UI/cirurgias-icon.svg", title: "Cirurgias", description: "a partir 10x de R$199,00", iconAlt: "icone de cirurgias"},
        {icon: "/images/UI/procedimentos-icon.svg", title: "Procedimentos", description: "a partir de R$99,99", iconAlt: "icone de procedimentos"},
        {icon: "/images/UI/ultrassom-icon.svg", title: "Ultrassom", description: "a partir de R$99,99", iconAlt: "icone de ultrassom"},
      ]}/>
    </>
  );
}
