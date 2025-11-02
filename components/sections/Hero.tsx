import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[50px] pb-[43px] flex justify-center relative">
      <div className="flex justify-center gap-[107px]">
        <div className="relative self-start mt-3">
          <input
            type="text"
            placeholder="Digite o que deseja buscar"
            className="rounded-full py-3 px-4 border border-[#CACACA] text-xs w-md placeholder-[#404042] bg-white">
          </input>
          <div className="absolute h-full right-[15px] top-0 flex items-center"><img src="/images/UI/magnifying-glass.svg" alt="Ícone de busca" /></div>
        </div>

        <div>
          <h1 className="text-4xl text-[#404042] font-normal leading-10 tracking-[-0.72px]">
            <span className="text-[#BE202E] font-semibold">Tudo em um só lugar:</span><br />
            Consultas, Exames,<br />
            Cirurgias e muito mais!
          </h1>

          <button
            className="color-[#404042] rounded-full border-[1.111px] border-[rgba(64, 64, 66, 0.70)] py-[17px] px-[18.06px] mt-8 cursor-pointer tracking-[-0.32px] flex gap-[5.55px] items-center leading-0">
            Marque com especialista
            <img src="/images/UI/arrowright.svg" alt="Ícone de seta para direita" />
          </button>
        </div>
      </div>

      <Image
        src="/images/background-hero.png"
        alt="Imagem de fundo"
        width={1280}
        height={284}
        className="absolute top-0 left-0 -z-10 w-full h-full object-fill" />
    </section>
  );
}