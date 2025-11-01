import Question, { IQuestion } from "@/components/Question";

interface Props {
  questions: IQuestion[];
}

export default function FAQ({ questions }: Props) {
  return <section className="py-[52px] bg-[#05693966] text-[#404042]">
    <h2 className="text-2xl font-semibold tracking-[-0.48px] leading-none text-center mb-[42px]">Perguntas Frequentes</h2>
    <div className="max-w-7xl mx-auto flex gap-4 flex-wrap justify-center">
      {questions.map((question, index) => <Question key={index} {...question}/>)}
    </div>
  </section>
}