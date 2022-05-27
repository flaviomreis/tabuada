import { useState } from "react";
import { NumberPad } from "./components/NumberPad";
import { Question } from "./components/Question";
import { Title } from "./components/Title";

export interface ItemTabuada {
  value1: number;
  value2: number;
  result: number;
}

export function App() {
  const itensTabuada: ItemTabuada[] = [];

  for (let value1 = 2; value1 <= 9; value1++) {
    for (let value2 = 1; value2 <= 10; value2++) {
      itensTabuada.push({ value1, value2, result: value1 * value2 });
    }
  }

  const [tabuada, setTabuada] = useState(itensTabuada);
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * itensTabuada.length + 1));

  function verifyAnswer(answer: number) {
    console.log(answer)
    if (answer === itensTabuada[questionNumber].result) {
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Title />
      <Question question={itensTabuada[questionNumber]} />
      <NumberPad verifyAnswer={verifyAnswer}/>
    </div>
  );
}
