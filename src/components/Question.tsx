import { CheckCircle, CircleDashed, ClockClockwise } from 'phosphor-react';
import { useState } from 'react';
import { ItemTabuada } from '../App';

interface QuestionPropos {
  question: ItemTabuada;
  mainQuestion: boolean;
}

export function Question({ question, mainQuestion }: QuestionPropos) {
  return (
    <div className="flex h-10 gap-6 justify-center items-center my-4">
      {mainQuestion ? (
        <>
          <div className="text-black text-4xl">{question.value1}</div>
          <div className="text-red-600">x</div>
          <div className="text-black text-4xl">{question.value2}</div>
          <div className="text-blue-600">=</div>
          <div className="text-black text-4xl">
            <ClockClockwise className="text-4xl text-pink-800" />
          </div>
        </>
      ) : (
        <>
          <div className="text-gray-500 text-4xl">{question.value1}</div>
          <div className="text-gray-500">x</div>
          <div className="text-gray-500 text-4xl">{question.value2}</div>
          <div className="text-gray-500">=</div>
          <div className="text-gray-500 text-4xl flex justify-center">{question.result}<CheckCircle /></div>
        </>
      )}
    </div>
  );
}
