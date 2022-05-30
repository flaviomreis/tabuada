import { ArrowElbowDownRight, Backspace, CheckCircle } from 'phosphor-react';
import { useState } from 'react';

interface NumberPadProps {
  verifyAnswer: (answer: number) => void;
}

export function NumberPad( { verifyAnswer }: NumberPadProps) {
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

  return (
    <div className="bg-zinc-300 w-60">
      <div className=" flex justify-end p-2 bg-zinc-800 text-white">
          <span className="text-3xl">{ result === '' ? '??' : result }</span>
      </div>

      <div className="flex p-2">
        <button onClick={() => addResultNumber('7')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          7
        </button>
        <button  onClick={() => addResultNumber('8')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          8
        </button>
        <button  onClick={() => addResultNumber('9')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          9
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button  onClick={() => addResultNumber('4')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          4
        </button>
        <button  onClick={() => addResultNumber('5')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          5
        </button>
        <button  onClick={() => addResultNumber('6')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          6
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button  onClick={() => addResultNumber('1')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          1
        </button>
        <button  onClick={() => addResultNumber('2')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          2
        </button>
        <button  onClick={() => addResultNumber('3')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          3
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button  onClick={() => addResultNumber('0')} className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          0
        </button>
        <button onClick={backspaceResultNumber} className="bg-zinc-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-2/3 flex justify-center items-center">
          <Backspace size={20} />
        </button>
      </div>
      <button onClick={onSendAnswer} className="bg-amber-500 w-60 h-10 rounded-full hover:bg-amber-600 transition-colors flex justify-center items-center gap-4">
        <ArrowElbowDownRight />
        Enviar Resposta
      </button>
    </div>
  );
}
