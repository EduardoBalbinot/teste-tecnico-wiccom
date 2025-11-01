export default function FooterLinks() {
  return <div className="w-[850px] flex justify-between gap-[84px] relative">
    <div className="flex flex-col">
      <h3 className="mb-4 text-sm font-bold tracking-[0.28px]">Serviços</h3>
      <a href="/" className="text-xs mb-[18px] hover:underline">Agendar consulta</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Agendar exame</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Cirurgias</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Emitir NFs</a>
    </div>
    <div className="flex flex-col">
      <h3 className="mb-4 text-sm font-bold tracking-[0.28px]">Pacientes</h3>
      <a href="/" className="text-xs mb-[18px] hover:underline">Login</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Resultado de exame</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Preparo de exames</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Ouvidoria</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Solicitação de prontuário</a>
    </div>
    <div className="flex flex-col">
      <h3 className="mb-4 text-sm font-bold tracking-[0.28px]">Clínica Fares</h3>
      <a href="/" className="text-xs mb-[18px] hover:underline">Unidades</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Especialidades</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Convênios</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Sobre nós</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Portal de Privacidade</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Trabalhe conosco</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Canal de Denúncia</a>
      <a href="/" className="text-xs hover:underline">Canal do Titular</a>
    </div>
    <div className="flex flex-col">
      <h3 className="mb-4 text-sm font-bold tracking-[0.28px]">Fale Conosco</h3>
      <a href="/" className="text-xs mb-[18px] hover:underline">E-mail: contato@clinicafares.com</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Whatsapp: (11) 3851-4000</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Segunda a Sexta das 8h às 19h</a>
      <a href="/" className="text-xs mb-[18px] hover:underline">Sábado até 12h</a>
    </div>
    <div className="absolute bottom-0 left-0">
      <h3 className="text-[9.311px] font-bold tracking-[0.186px] mb-2.5">Responsáveis Técnicos</h3>
      <div className="flex fle gap-[18px]">
        <div>
          <h4 className="text-[7.981px] font-bold tracking-[0.16px]">Unidade Osasco: </h4>
          <p className="text-[7.981px] tracking-[0.16px]">Dr. Diogo de Freitas</p>
          <p className="text-[7.981px] tracking-[0.16px]">CRM SP 112026</p>
        </div>
        <div>
          <h4 className="text-[7.981px] font-bold tracking-[0.16px]">Unidade Penha: </h4>
          <p className="text-[7.981px] tracking-[0.16px]">Dr. Vinícius Cruz</p>
          <p className="text-[7.981px] tracking-[0.16px]">CRM SP 176567</p>
        </div>
        <div>
          <h4 className="text-[7.981px] font-bold tracking-[0.16px]">Unidade Santo Amaro:  </h4>
          <p className="text-[7.981px] tracking-[0.16px]">Dr. Alfredo Rangel</p>
          <p className="text-[7.981px] tracking-[0.16px]">CRM SP 63058</p>
        </div>
        <div>
          <h4 className="text-[7.981px] font-bold tracking-[0.16px]">Unidade Vila Nova Cachoerinha: </h4>
          <p className="text-[7.981px] tracking-[0.16px]">Dr. Júlio Gonçalves</p>
          <p className="text-[7.981px] tracking-[0.16px]">CRM SP 83774</p>
        </div>
      </div>
    </div>
  </div>
}