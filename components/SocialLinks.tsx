import Image from "next/image";

export default function SocialLinks() {
  return <>
    <p className="text-sm font-bold tracking-[-0.28px] mt-10">Acompanhe nossas redes</p>
    <div className="flex gap-3 mt-4">
      <a href="/" className="cursor-pointer"><Image src="/images/UI/instagram-icon.svg" alt="Logo" width={28} height={28} /></a>
      <a href="/" className="cursor-pointer"><Image src="/images/UI/facebook-icon.svg" alt="Logo" width={28} height={28} /></a>
      <a href="/" className="cursor-pointer"><Image src="/images/UI/linkedin-icon.svg" alt="Logo" width={28} height={28} /></a>
      <a href="/" className="cursor-pointer"><Image src="/images/UI/youtube-icon.svg" alt="Logo" width={28} height={28} /></a>
    </div>
  </>
}