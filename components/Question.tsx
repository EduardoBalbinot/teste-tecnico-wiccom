'use client'

import { useState, useRef, useEffect } from 'react'

export interface IQuestion {
  question: string
  answer: string
}

export default function Question({ question, answer }: IQuestion) {
  const [showAnswer, setShowAnswer] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')

  function handleClick() {
    setShowAnswer(!showAnswer)
  }

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showAnswer ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [showAnswer])

  return (
    <div
      className="rounded-[18px] border border-[#CACACA] bg-white py-[22px] px-8 w-[580px] cursor-pointer self-start"
      onClick={handleClick}
    >
      <h3 className="flex justify-between items-center">
        <p className="tracking-[-0.32px] max-w-[440px]">{question}</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all ${showAnswer ? 'rotate-180' : 'rotate-0'}`}>
          <path d="M12 5.25V18.75" stroke="#BE202E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.75 12H5.25" stroke="#BE202E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </h3>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all ease-in-out"
      >
        <p className="text-sm mt-2">{answer}</p>
      </div>
    </div>
  )
}