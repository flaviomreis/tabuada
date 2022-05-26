interface NumberPadKeyProps {
  value: string;
}

export function NumberPadKey({ value }: NumberPadKeyProps) {
  return (
    <button className="bg-sky-800 text-sky-100 px-4 h-10 rounded hover:bg-sky-900 transition-colors">{value}</button>
  )
}
