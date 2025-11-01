import Image from "next/image";

export default function PaymentMethods() {
  return <div className="flex items-center">
    <p className="text-sm font-bold tracking-[-0.28px] mr-4">Formas de Pagamento</p>
    <div className="flex gap-[9px] mr-[178px]">
      <img src="/images/pay-met-1.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-2.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-3.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-4.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-5.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-6.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-7.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-8.svg" alt="icone de metodo de pagamento"/>
      <img src="/images/pay-met-9.svg" alt="icone de metodo de pagamento"/>
    </div>
    <p className="text-sm font-bold tracking-[-0.28px] mr-4">Site Seguro</p>
    <Image src="/images/reclameaqui.png" alt="ponutação no reclame aqui" width={80} height={40}/>
  </div>
}