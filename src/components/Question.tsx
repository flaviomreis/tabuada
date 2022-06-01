import { CheckCircle, CircleDashed, ClockClockwise } from 'phosphor-react';
import { ItemTabuada } from '../App';

interface QuestionPropos {
  question: ItemTabuada,
}

export function Question({
  question,
}: QuestionPropos) {
  if (question === undefined) {
    question = { value1: 1, value2: 1, result: 1};
  }

  console.log(question);

  return (
    <div className="flex h-10 gap-6 justify-center items-center my-4">
      <div className="text-black text-4xl">{question.value1}</div>
      <div className="text-red-600">x</div>
      <div className="text-black text-4xl">{question.value2}</div>
      <div className="text-blue-600">=</div>
      <div className="text-black text-4xl">
        <ClockClockwise className="text-4xl text-pink-800" />
      </div>
    </div>
  );
}
