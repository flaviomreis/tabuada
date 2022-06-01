import { Check } from "phosphor-react";

interface ShowHitsProps {
  hits: number;
}

export function ShowHits({ hits }: ShowHitsProps) {
  return (
    <div className="w-60 mt-2">
      {hits > 0 && (
        <div className="text-gray-600 text-1xl flex">Acertos: {hits}<Check /></div>
      )}
    </div>
  );
}
