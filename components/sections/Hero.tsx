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
            className="hover:text-white hover:bg-[#404042] transition-colors rounded-full border-[1.111px] border-[rgba(64, 64, 66, 0.70)] py-[17px] px-[18.06px] mt-8 cursor-pointer tracking-[-0.32px] flex gap-[5.55px] items-center leading-0">
            Marque com especialista
            <svg width="7" height="11" viewBox="0 0 7 11" className="fill-current" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_13029_24)">
                <path d="M3.96846 5.05066L0.451142 1.53335C0.285797 1.368 0.203126 1.15757 0.203126 0.902034C0.203126 0.646503 0.285797 0.436065 0.451142 0.270721C0.616486 0.105377 0.826921 0.0227051 1.08245 0.0227051C1.33799 0.0227051 1.54842 0.105377 1.71377 0.270721L5.8624 4.41935C6.04277 4.59973 6.13296 4.81017 6.13296 5.05066C6.13296 5.29116 6.04277 5.5016 5.8624 5.68198L1.71377 9.83061C1.54842 9.99597 1.33799 10.0787 1.08245 10.0787C0.826921 10.0787 0.616485 9.99597 0.451141 9.83061C0.285797 9.66524 0.203125 9.45485 0.203125 9.19929C0.203125 8.94374 0.285797 8.73335 0.451141 8.56798L3.96846 5.05066Z" />
              </g>
              <defs>
                <clipPath id="clip0_13029_24">
                  <rect width="6.49351" height="10.101" fill="white" />
                </clipPath>
              </defs>
            </svg>
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