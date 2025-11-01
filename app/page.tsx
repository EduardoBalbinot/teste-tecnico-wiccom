import FAQ from "@/components/sections/FAQ";
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
      <Specialties specialties={["Cardiologia", "Endocrinologia", "Obstetrícia", "Gastroenterologia", "Cirurgia Geral", "Neurologia", "Ortopedia", "Dermatologia"]} />
      <PaymentFeatures features={[
        { icon: "/images/UI/pix-icon.svg", title: "5% OFF NO PIX", description: "Desconto no pagamento antecipado" },
        { icon: "/images/UI/card-icon.svg", title: "10X sem juros", description: "Para compras a partir de R$500,00" },
        { icon: "/images/UI/percent-icon.svg", title: "DESCONTOS ESPECIAIS", description: "Planos e pacotes promocionais" },
        { icon: "/images/UI/fast-clock-icon.svg", title: "ATENDIMENTO PERSONALIZADO", description: "Agendamento sem burocracia" },
      ]} />
      <Services services={[
        { icon: "/images/UI/consultas-icon.svg", title: "Consultas", description: "a partir de R$99,99", iconAlt: "icone de consultas" },
        { icon: "/images/UI/exames-icon.svg", title: "Exames", description: "a partir de R$18,00", iconAlt: "icone de exames" },
        { icon: "/images/UI/cirurgias-icon.svg", title: "Cirurgias", description: "a partir 10x de R$199,00", iconAlt: "icone de cirurgias" },
        { icon: "/images/UI/procedimentos-icon.svg", title: "Procedimentos", description: "a partir de R$99,99", iconAlt: "icone de procedimentos" },
        { icon: "/images/UI/ultrassom-icon.svg", title: "Ultrassom", description: "a partir de R$99,99", iconAlt: "icone de ultrassom" },
      ]} />
      <Units units={[
        {
          image: "/images/osasco-unit.jpg",
          imageAlt: "unidade de osasco",
          title: "OSASCO", 
          address: "R. Antônio Agú, 630 - Centro, Osasco - SP, 06013-006",
          openingHours: ["2ª a 6ª feira, das 07h às 19h.", "Sábados, das 08h às 12h00."],
          phone: "(xx) xxxx - xxxx",
          whatsapp: "(xx) xxxx - xxxx",
          open: true
        },
        {
          image: "/images/santo-amaro-unit.jpg",
          imageAlt: "unidade de santo amaro",
          title: "SANTO AMARO", 
          address: "R. Barão do Rio Branco, 303 - Santo Amaro, São Paulo - SP, 04753-000",
          openingHours: ["2ª a 6ª feira, das 07h às 19h.", "Sábados, das 08h às 12h00."],
          phone: "(xx) xxxx - xxxx",
          whatsapp: "(xx) xxxx - xxxx",
          open: true
        },
        {
          image: "/images/vila-nova-unit.jpg",
          imageAlt: "unidade de vila nova cachoeirinha",
          title: "VILA NOVA CACHOEIRINHA", 
          address: "Av. Parada Pinto, 99 - Vila Nova Cachoeirinha, São Paulo - SP, 02612-120",
          openingHours: ["2ª a 6ª feira, das 07h às 19h.", "Sábados, das 08h às 12h00."],
          phone: "(xx) xxxx - xxxx",
          whatsapp: "(xx) xxxx - xxxx",
          open: true
        },
        {
          image: "/images/penha-unit.jpg",
          imageAlt: "unidade da penha",
          title: "Penha", 
          address: "Av. Parada Pinto, 99 - Vila Nova Cachoeirinha, São Paulo - SP, 02612-120",
          openingHours: ["2ª a 6ª feira, das 07h às 19h.", "Sábados, das 08h às 12h00."],
          phone: "(xx) xxxx - xxxx",
          whatsapp: "(xx) xxxx - xxxx",
          open: true
        }
      ]} />
      <Packs packs={[
        {
          title: "Check-up da mulher 40+",
          description: "Cuidado voltado para necessidade de mulheres mais maduras",
          image: "/images/mulher.png",
          imageAlt: "mulher 40+"
        },
        {
          title: "Check-up de rotina",
          description: "Cuidado para quem busca praticidade, exames e consultas.",
          image: "/images/homem.png",
          imageAlt: "homem"
        },
        {
          title: "Check-up do coração",
          description: "Cuidado cardiovascular com exames e acompanhamento especializado.",
          image: "/images/familia.png",
          imageAlt: "homem idoso com familia"
        }
      ]}/>
      <FAQ questions={[
        {
          question: "É necessário agendar previamente ou há atendimento por ordem de chegada?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "Quais são os endereços e horários de funcionamento das unidades da clínica?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "Quais formas de pagamento são aceitas? A clínica atende convênios?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "A clínica realiza cirurgias? Quais procedimentos estão disponíveis?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ]} />
    </>
  );
}
