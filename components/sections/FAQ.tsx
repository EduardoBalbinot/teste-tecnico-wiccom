import Question from "../Question";

export default function FAQ() {
  const questions = [
        {
          question: "É necessário agendar previamente ou há atendimento por ordem de chegada?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "Quais são os endereços e horários de funcionamento das unidades da clínica?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "Quais formas de pagamento são aceitas? A clínica atende convênios?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          question: "A clínica realiza cirurgias? Quais procedimentos estão disponíveis?", 
          answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ];

  return <section className="py-[52px] bg-[#05693966] text-[#404042]">
    <h2 className="text-2xl font-semibold tracking-[-0.48px] leading-none text-center mb-[42px]">Perguntas Frequentes</h2>
    <div className="max-w-7xl mx-auto flex gap-4 flex-wrap justify-center">
      {questions.map((question, index) => <Question key={index} {...question}/>)}
    </div>
  </section>
}