interface Props{
  specialties: string[];
}

export default function Specialties({specialties}: Props) {
  return (
    <section className="py-[60px] px-8 flex flex-col gap-8 text-[#404042] text-center ">
      <h2 className=" text-2xl font-semibold leading-[125%] tracking-[-0.48px]">
        Especialidades <span className="text-[#BE202E]">mais procuradas</span>
      </h2>

      <p className="">
        Conheça nossas especialidades prontas para oferecer atendimento personalizado com excelência.
      </p>

      <div className="flex flex-wrap gap-[9px] justify-center">
        {specialties.map((specialty, index) => (
          <span 
            key={index}
            className="border border-[#CACACA] rounded-full py-[17px] px-[18.06px] text-base tracking-[-0.24px] leading-1">
            {specialty}
          </span>
        ))}
      </div>

      <a href="/" className="text-sm font-medium underline">
        Ver todas as especialidades
      </a>
    </section>
  );
}