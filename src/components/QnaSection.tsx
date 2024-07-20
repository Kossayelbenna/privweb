import React from "react";
import Qna from "./Qna";
import { useTranslator } from "@/lib/use-translator";

const qna = [
  {
    q: "What is the best thing about Switzerland?",
    a: "I don't know, but the flag is a big plus.",
  },
  {
    q: "Why do we tell actors to 'break a leg'?",
    a: "Because every play has a cast.",
  },
  {
    q: "Why don't scientists trust atoms?",
    a: "Because they make up everything.",
  },
  {
    q: "Why did the scarecrow win an award?",
    a: "Because he was outstanding in his field.",
  },
  {
    q: "Why did the math book look sad?",
    a: "Because it had too many problems.",
  },
  {
    q: "What do you call cheese that isn't yours?",
    a: "Nacho cheese.",
  },
];

function QnaSection() {
  const tr = useTranslator();
  return (
    <div
      className="flex flex-col items-stretch justify-center gap-4 max-w-[1200px] mx-auto px-5 md:px-2 lg:px-0"
      id="faqs"
    >
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-3xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("qnaTitle")}
        </h3>
      </div>
      {qna.map(({ q, a }, i) => (
        <Qna key={i} q={q} a={a} className="mb-4" delay={i * 200} />
      ))}
    </div>
  );
}

export default QnaSection;
