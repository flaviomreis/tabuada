import { CheckCircle, CircleDashed } from 'phosphor-react';
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
    <div className="flex w-60 h-10 gap-4 justify-center items-center my-4">
      <div className="text-black text-3xl">{itensTabuada[63].value1}</div>
      <div className="text-red-600">x</div>
      <div className="text-black text-3xl">{itensTabuada[63].value2}</div>
      <div className="text-blue-600">=</div>
    </div>
  );
}
