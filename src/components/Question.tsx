import { CheckCircle, CircleDashed, CircleWavyQuestion, ClockClockwise, EyeClosed, HeartBreak, SmileyNervous, SmileySad } from 'phosphor-react';
import { ItemTabuada, QuestionFlag } from '../App';

interface QuestionPropos {
  question: ItemTabuada
  flag: QuestionFlag
  wrongsCount: number
}

export function Question({
  question,
  flag,
  wrongsCount
}: QuestionPropos) {

  return (
    <div className="flex h-10 gap-6 justify-center items-center my-4">
      <div className="text-black text-4xl">{question.value1}</div>
      <div className="text-red-600">x</div>
      <div className="text-black text-4xl">{question.value2}</div>
      <div className="text-blue-600">=</div>
      <div className="text-black text-4xl">
        { flag === QuestionFlag.Waiting ?
            <CircleWavyQuestion className="text-4xl text-black" />
          :
            wrongsCount <= 2 ?
            <SmileySad className="text-4xl text-red-600" />
            :
            <SmileyNervous weight='fill' className="text-4xl text-red-600" />
        }
      </div>
    </div>
  );
}
