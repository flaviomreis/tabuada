import { useState } from 'react';
import { NumberPad } from './components/NumberPad';
import { Question } from './components/Question';
import { ShowHits } from './components/ShowHits';
import { Title } from './components/Title';

export interface ItemTabuada {
  value1: number;
  value2: number;
  result: number;
}

export enum QuestionFlag {
  Waiting,
  Wrong,
  Nervous
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
  const [wrongsCount, setWrongsCount] = useState(0);
  const [hits, setHits] = useState(0);

  function verifyAnswer(answer: number) {
    if (answer === questions[questionNumber].result) {
      questions.splice(questionNumber, 1);
      setQuestions(questions);

      const random = Math.floor(Math.random() * questions.length);
      setQuestionNumber(random);
      setQuestionFlag(QuestionFlag.Waiting);
      setWrongsCount(0);
      setHits(hits + 1);
    } else {
      setQuestionFlag(QuestionFlag.Wrong);
      setWrongsCount(wrongsCount + 1);
    }
  }

  const [questionFlag, setQuestionFlag] = useState(QuestionFlag.Waiting);

  return (
    <div className="flex flex-col items-center">
      <Title />
      <Question question={questions[questionNumber]} flag={questionFlag} wrongsCount={wrongsCount}/>
      <NumberPad verifyAnswer={verifyAnswer} />
      <ShowHits hits={hits} />
    </div>
  );
}
