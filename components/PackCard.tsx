import Image from "next/image";

interface Pack {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
}

export default function PackCard(pack: Pack) {
  return <>

    <div className="overflow-hidden rounded-2xl"><Image className="hover:scale-110 transition-all" src={pack.image} alt={pack.imageAlt || "pack image"} width={222} height={177} /></div>
    <h3 className="text-[#056939] text-center text-lg font-semibold tracking-[-0.36px] leading-none">{pack.title}</h3>
    <p className="text-center text-sm leading-[161.394%] tracking-[-0.28px]">{pack.description}</p>
    <a href="/" className="cursor-pointer flex gap-2">Saber mais <img src="/images/UI/arrowright.svg" width={6} height={10} alt="seta para a direita" /></a>

  </>
}