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
          className="hover:text-white hover:bg-[#404042] transition-colors rounded-full border-[1.111px] border-[rgba(64, 64, 66, 0.70)] py-[17px] px-[18.06px] cursor-pointer tracking-[-0.32px] flex gap-[5.55px] items-center leading-0">
          Agendar
          <svg width="7" height="11" viewBox="0 0 7 11" className="fill-current" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_13029_24)">
                <path d="M3.96846 5.05066L0.451142 1.53335C0.285797 1.368 0.203126 1.15757 0.203126 0.902034C0.203126 0.646503 0.285797 0.436065 0.451142 0.270721C0.616486 0.105377 0.826921 0.0227051 1.08245 0.0227051C1.33799 0.0227051 1.54842 0.105377 1.71377 0.270721L5.8624 4.41935C6.04277 4.59973 6.13296 4.81017 6.13296 5.05066C6.13296 5.29116 6.04277 5.5016 5.8624 5.68198L1.71377 9.83061C1.54842 9.99597 1.33799 10.0787 1.08245 10.0787C0.826921 10.0787 0.616485 9.99597 0.451141 9.83061C0.285797 9.66524 0.203125 9.45485 0.203125 9.19929C0.203125 8.94374 0.285797 8.73335 0.451141 8.56798L3.96846 5.05066Z" />
              </g>
              <defs>
                <clipPath id="clip0_13029_24">
                  <rect width="6.49351" height="10.101" fill="white" />
                </clipPath>
              </defs>
            </svg>
        </button>
      </div>))}
    </div>
  </section>);
}