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
    for (let value2 = 2; value2 <= 10; value2++) {
      itensTabuada.push({ value1, value2, result: value1 * value2 });
    }
  }

  const [tabuada, setTabuada] = useState(itensTabuada);
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * tabuada.length + 1));
  const [lastQuestion, setLastQuestion] = useState<ItemTabuada | null>(null);

  function verifyAnswer(answer: number) {
    if (answer === tabuada[questionNumber].result) {
      const _lastQuestion:ItemTabuada = { 
        value1: tabuada[questionNumber].value1,
        value2: tabuada[questionNumber].value2,
        result: tabuada[questionNumber].result,
      };
      // setLastQuestion(tabuada[questionNumber]);
      setLastQuestion(_lastQuestion);

      //setTabuada(tabuada.splice(questionNumber, 1));
      //console.log(tabuada);
      setQuestionNumber(Math.floor(Math.random() * tabuada.length + 1))
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Title />
      <Question question={tabuada[questionNumber]} mainQuestion={true}/>
      <NumberPad verifyAnswer={verifyAnswer}/>
      { lastQuestion !== null && <Question question={lastQuestion}  mainQuestion={false}/> }
    </div>
  );
}
