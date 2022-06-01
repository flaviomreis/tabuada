import { useState } from 'react';
import { NumberPad } from './components/NumberPad';
import { Question } from './components/Question';
import { Title } from './components/Title';

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

  const [questionNumber, setQuestionNumber] = useState(
    Math.floor(Math.random() * itensTabuada.length + 1)
  );
  const [questions, setQuestions] = useState<ItemTabuada[]>(itensTabuada);

  function verifyAnswer(answer: number) {
    if (questions[questionNumber] === undefined || answer === questions[questionNumber].result) {
      questions.splice(questionNumber, 1)
      setQuestions(questions);

      const random = Math.floor(Math.random() * questions.length + 1);
      setQuestionNumber(random);
      console.log(questions.length);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Title />
      <Question question={questions[questionNumber]} />
      <NumberPad verifyAnswer={verifyAnswer} />
    </div>
  );
}
