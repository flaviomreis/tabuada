import { useState } from 'react';

interface ItemTabuada {
  value1: number;
  value2: number;
  result: number;
}

function Question() {
  const itensTabuada: ItemTabuada[] = [];
  for (let value1 = 2; value1 <= 9; value1++) {
    for (let value2 = 1; value2 <= 10; value2++) {
      itensTabuada.push({ value1, value2, result: value1 * value2 });
    }
  }
  console.log(itensTabuada);

  const [tabuada, setTabuada] = useState(itensTabuada);

  return (
    <div className="flex gap-2">
      <span className="px-2 h-10 rounded bg-cyan-700 text-slate-300">
        {itensTabuada[15].value1}
      </span>
      <span className="px-2 h-10 rounded text-cyan-700">x</span>
      <span className="px-2 h-10 rounded bg-cyan-700 text-slate-300">
        {itensTabuada[15].value2}
      </span>
      <span className="px-2 h-10 text-cyan-700">=</span>
      <span className="px-2 h-10 bg-cyan-700 text-slate-300">
        {itensTabuada[15].result}
      </span>
    </div>
  );
}

export default Question;
