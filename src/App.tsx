import { Button } from "./components/Button";
import { NumberPad } from "./components/NumberPad";
import { Question } from "./components/Question";

export function App() {
  return (
    <div>
      <h1>Tabuada da Flavinha!</h1>
      <Question />
      <NumberPad />
      <Button value="Responder" />
    </div>
  );
}
