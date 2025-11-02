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

export default function UnitCard(unit: Unit) {
  return <>
    <div className="overflow-hidden rounded-xl relative">
      <Image src={unit.image} alt={unit.imageAlt || "unide de " + unit.title} width={253} height={156} className="hover:scale-125 transition-transform" />
      <p className="text-white absolute bottom-0 left-0 rounded-tr-xl rounded-br-xl p-2 text-xs font-black bg-[#BE202E]">{unit.title}</p>
    </div>
    <p>Endereço: {unit.address}</p>
    <div className="flex gap-2">
      <img src="/images/UI/clock-icon.svg" alt="icone de relogio" className="self-start mt-1" />
      <div className="flex flex-col ">
        <p>Horários de atendimento: {unit.open ? <span className="text-[#056939]">Aberto</span> : <span className="text-[#BE202E]">Fechado</span>}</p>
        {unit.openingHours.map((opening, index) => <p key={index}>{opening}</p>)}
      </div>
    </div>
    <div className="flex gap-2">
      <img src="/images/UI/phone-icon.svg" alt="icone de telefone" className="self-start mt-1" />
      <p>Telefone: ${unit.phone}</p>
    </div>
    <div className="flex gap-2">
      <img src="/images/UI/whatsapp-icon.svg" alt="icone do whatsapp" className="self-start mt-1" />
      <p>Whatsapp: ${unit.whatsapp}</p>
    </div>
    <div className="flex gap-2">
      <img src="/images/UI/maps-point-icon.svg" alt="icone de localização" className="self-start" />
      <a href="/">Como chegar</a>
    </div>
  </>
}