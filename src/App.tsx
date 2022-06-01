import { ArrowElbowDownRight, Backspace } from 'phosphor-react';
import { useState } from 'react';
import { Question } from './components/Question';
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
      //questions.splice(questionNumber, 1);
      //setQuestions(questions);

      const random = Math.floor(Math.random() * questions.length + 1);
      setQuestionNumber(random);
      console.log(questions.length);
      setQuestionFlag(QuestionFlag.Waiting);
      setWrongsCount(0);
      setHits(hits + 1);
    } else {
      setQuestionFlag(QuestionFlag.Wrong);
      setWrongsCount(wrongsCount + 1);
    }
  }

  const [result, setResult] = useState('');

  function addResultNumber(value: string) {
    if (result.length < 2) {
      if (value !== '0' || result.length > 0) {
        setResult(result + value);
      }
    }
  }

  function backspaceResultNumber() {
    if (result.length > 0) {
      setResult(result.substring(0, result.length - 1));
    }
  }

  function onSendAnswer() {
    if (result.length > 0) {
      verifyAnswer(parseInt(result));
      setResult('');
    }
  }

  const [questionFlag, setQuestionFlag] = useState(QuestionFlag.Waiting);

  return (
    <div className="flex flex-col items-center">
      <Title />
      <Question question={questions[questionNumber]} flag={questionFlag} wrongsCount={wrongsCount}/>

      <div className="bg-zinc-300 w-60">
        <div className=" flex justify-end p-2 bg-zinc-800 text-white">
          <span className="text-3xl">{result}{'_'}</span>
        </div>

        <div className="flex p-2">
          <button
            onClick={() => addResultNumber('7')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            7
          </button>
          <button
            onClick={() => addResultNumber('8')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            8
          </button>
          <button
            onClick={() => addResultNumber('9')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            9
          </button>
        </div>
        <div className="flex w-60 p-2">
          <button
            onClick={() => addResultNumber('4')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            4
          </button>
          <button
            onClick={() => addResultNumber('5')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            5
          </button>
          <button
            onClick={() => addResultNumber('6')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            6
          </button>
        </div>
        <div className="flex w-60 p-2">
          <button
            onClick={() => addResultNumber('1')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            1
          </button>
          <button
            onClick={() => addResultNumber('2')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            2
          </button>
          <button
            onClick={() => addResultNumber('3')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            3
          </button>
        </div>
        <div className="flex w-60 p-2">
          <button
            onClick={() => addResultNumber('0')}
            className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3"
          >
            0
          </button>
          <button
            onClick={backspaceResultNumber}
            className="bg-zinc-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-2/3 flex justify-center items-center"
          >
            <Backspace size={20} />
          </button>
        </div>
        <button
          onClick={onSendAnswer}
          className="bg-amber-500 w-60 h-10 rounded-full hover:bg-amber-600 transition-colors flex justify-center items-center gap-4"
        >
          <ArrowElbowDownRight />
          Enviar Resposta
        </button>
      </div>
      <div className="w-60 mt-2">
      <div className="text-gray-600 text-2xl">Acertos: {hits}</div>
      </div>

    </div>
  );
}
