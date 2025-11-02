export default function Services() {
  const services = [
    { icon: "/images/UI/consultas-icon.svg", title: "Consultas", description: "a partir de R$99,99", iconAlt: "icone de consultas" },
    { icon: "/images/UI/exames-icon.svg", title: "Exames", description: "a partir de R$18,00", iconAlt: "icone de exames" },
    { icon: "/images/UI/cirurgias-icon.svg", title: "Cirurgias", description: "a partir 10x de R$199,00", iconAlt: "icone de cirurgias" },
    { icon: "/images/UI/procedimentos-icon.svg", title: "Procedimentos", description: "a partir de R$99,99", iconAlt: "icone de procedimentos" },
    { icon: "/images/UI/ultrassom-icon.svg", title: "Ultrassom", description: "a partir de R$99,99", iconAlt: "icone de ultrassom" },
  ];

  return (<section className="pt-[67.5px] pb-[49.5px] text-[#404042]">
    <h2 className="text-2xl font-semibold leading-tight tracking-[-0.48px] text-center">Como podemos te ajudar hoje?</h2>
    <div className="mt-8 flex gap-4 justify-center">
      {services.map((service, index) => (<div key={index} className="py-[43px] px-2 flex flex-col gap-6 items-center rounded-2xl bg-[#F1F1F1] w-[213px]">
        <img src={service.icon} alt={service.iconAlt} />
        <h3 className="text-xl text-[#056939] leading-[80%] font-semibold tracking-[-0.4px]">{service.title}</h3>
        <p className="leading-[112.5%] tracking-[-0.32px]">{service.description}</p>
        <button
          className="color-[#404042] rounded-full border-[1.111px] border-[rgba(64, 64, 66, 0.70)] py-[17px] px-[18.06px] cursor-pointer tracking-[-0.32px] flex gap-[5.55px] items-center leading-0">
          Agendar
          <img src="/images/UI/arrowright.svg" alt="Ícone de seta para direita" />
        </button>
      </div>))}
    </div>
  </section>);
}