import { CheckCircle } from 'phosphor-react';
import { useState } from 'react';

interface ItemTabuada {
  value1: number;
  value2: number;
  result: number;
}

export function Question() {
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
      <span className="px-4 h-10 bg-zinc-600 text-zinc-100">
        {itensTabuada[63].value1}
      </span>
      <span className="px-4 h-10 text-zinc-600">x</span>
      <span className="px-4 h-10 bg-zinc-600 text-zinc-100">
        {itensTabuada[63].value2}
      </span>
      <span className="px-4 h-10 text-zinc-600">=</span>
      <span className="px-4 h-10 bg-zinc-800 text-zinc-100 flex">
        <CheckCircle />
        {itensTabuada[63].result}
      </span>
    </div>
  );
}
