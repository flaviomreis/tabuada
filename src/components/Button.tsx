import { ArrowElbowDownRight } from 'phosphor-react';

interface ButtonProps {
  value: string;
}

export function Button({ value }: ButtonProps) {
  return (
    <button className="flex bg-amber-500 text-amber-100 px-2 h-20 rounded hover:bg-amber-600 transition-colors"><ArrowElbowDownRight />{value}</button>
  )
}
