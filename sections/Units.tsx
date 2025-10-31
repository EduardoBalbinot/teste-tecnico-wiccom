import Image from "next/image";

interface Unit {
  image: string;
  imageAlt?: string;
  title: string;
  address: string;
  phone: string;
  openingHours: string[];
  whatsapp: string;
  open: boolean;
}

interface Props {
  units?: Unit[];
}

export default function Units({ units = [] }: Props) {
  return <section className="pt-5 pb-[58px] bg-[#F1F1F1] text-[#404042] flex flex-col gap-4 items-center">
    <h2 className="text-center text-2xl font-semibold leading-[166.667%] tracking-[-0.48px]">Conheça nossas unidades</h2>
    <p className="text-xl tracking-[-0.4px] leading-[130%] max-w-[776px] text-center">
      Temos unidades prontas para atender você com conforto e qualidade. Encontre a mais próxima e conte com nossos serviços de saúde.
    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      {units.map((unit, index) => (<div key={index} className="border-[#D9D9D9] border-[0.782px] text-xs rounded-xl bg-white w-[295px] flex flex-col gap-[12.51px] py-[30.7px] px-[18.77px]">
        <div className="overflow-hidden rounded-xl relative">
          <Image src={unit.image} alt={unit.imageAlt || "unide de " + unit.title} width={253} height={156} className="hover:scale-125 transition-transform"/>
          <p className="text-white absolute bottom-0 left-0 rounded-tr-xl rounded-br-xl p-2 text-xs font-black bg-[#BE202E]">{unit.title}</p>
        </div>
        <p>Endereço: {unit.address}</p>
        <div className="flex gap-2">
          <img src="/images/UI/clock-icon.svg" alt="icone de relogio" className="self-start mt-1"/>
          <div className="flex flex-col ">
            <p>Horários de atendimento: {unit.open ? <span className="text-[#056939]">Aberto</span> : <span className="text-[#BE202E]">Fechado</span>}</p>
            {unit.openingHours.map((opening, index) => <p key={index}>{opening}</p>)}
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/images/UI/phone-icon.svg" alt="icone de telefone" className="self-start mt-1"/>
          <p>Telefone: ${unit.phone}</p>
        </div>
        <div className="flex gap-2">
          <img src="/images/UI/whatsapp-icon.svg" alt="icone do whatsapp" className="self-start mt-1"/>
          <p>Whatsapp: ${unit.whatsapp}</p>
        </div>
        <div className="flex gap-2">
          <img src="/images/UI/maps-point-icon.svg" alt="icone de localização" className="self-start"/>
          <a href="/">Como chegar</a>
        </div>
      </div>))}
    </div>
  </section>
}