import Image from "next/image";
import PaymentMethods from "../PaymentMethods";
import FooterLinks from "../FooterLinks";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  return <footer className="pt-10 pb-8 bg-[#F1F1F1] text-[#404042]">
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="w-[216px]">
          <Image src="/images/logo.svg" alt="Logo" width={147} height={40} />
          <SocialLinks />
          <p className="text-sm font-bold tracking-[-0.28px] mt-10">Descubra os benefícios do Cartão Saúde de Todos</p>
          <button
            className="color-[#404042] rounded-full border-[1.111px] border-[rgba(64, 64, 66, 0.70)] py-[17px] px-[17px] mt-4 cursor-pointer tracking-[-0.32px] flex gap-[5.55px] items-center leading-0">
            Cartão Saúde de Todos
            <img src="/images/UI/arrowright.svg" alt="Ícone de seta para direita" />
          </button>
        </div>
        <FooterLinks />
      </div>
      <PaymentMethods />
      <div className="px-[78px]">
        <div className="border-t border-[#CACACA]" />
        <div className="flex justify-center mt-8">
          <p className="text-xs mr-[93px]">© 2025 Copyright 2024 Clínica Fares</p>
          <img src="/images/wicomm-logo.svg" alt="logo da wicomm" className="mr-6" />
          <img src="/images/wake-logo.svg" alt="logo da wake" />
        </div>
      </div>
    </div>
  </footer>
}