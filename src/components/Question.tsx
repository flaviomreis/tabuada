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

  return <div>{itensTabuada.length}</div>;
}

export default Question;
