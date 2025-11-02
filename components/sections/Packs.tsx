import Image from "next/image";

export default function Packs() {
  const packs = [
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
  ];

  return <section className="py-[60px] flex flex-col gap-8 items-center text-[#404042]">
    <h2 className="text-2xl font-semibold leading-tight tracking-[-0.48px] text-center">Experimente nossos pacotes</h2>
    <p className="leading-[130%] tracking-[-0.4px] text-xl text-center">Aproveite as melhores condições pensadas para você</p>
    <div className="flex gap-4">
      {packs.map((pack, index) => (<div key={index} className="bg-[#F1F1F1] rounded-2xl flex flex-col items-center gap-[18px] py-6 px-4 w-[268px]">
        <Image src={pack.image} alt={pack.imageAlt || "pack image"} width={222} height={177} />
        <h3 className="text-[#056939] text-center text-lg font-semibold tracking-[-0.36px] leading-none">{pack.title}</h3>
        <p className="text-center text-sm leading-[161.394%] tracking-[-0.28px]">{pack.description}</p>
        <a href="/" className="cursor-pointer flex gap-2">Saber mais <img src="/images/UI/arrowright.svg" width={6} height={10} alt="seta para a direita" /></a>
      </div>))}
    </div>
  </section>
}