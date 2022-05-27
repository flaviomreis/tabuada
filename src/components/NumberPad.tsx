import { ArrowElbowDownRight, Backspace, CheckCircle } from 'phosphor-react';

export function NumberPad() {
  return (
    <div className="bg-zinc-300 w-60">
      <div className=" flex justify-end p-2 bg-zinc-800 text-white">
          <span className="text-3xl">??</span>
      </div>

      <div className="flex p-2">
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          7
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          8
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          9
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          4
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          5
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          6
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          1
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          2
        </button>
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          3
        </button>
      </div>
      <div className="flex w-60 p-2">
        <button className="bg-sky-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-1/3">
          0
        </button>
        <button className="bg-zinc-800 text-white h-10 rounded-full hover:bg-sky-900 transition-colors w-2/3 flex justify-center items-center">
          <Backspace size={20} />
        </button>
      </div>
      <button className="bg-amber-500 w-60 h-10 rounded-full hover:bg-amber-600 transition-colors flex justify-center items-center gap-4">
        <ArrowElbowDownRight />
        Enviar Resposta
      </button>
    </div>
  );
}
