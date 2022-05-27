import { NumberPad } from "./components/NumberPad";
import { Question } from "./components/Question";
import { Title } from "./components/Title";

export function App() {
  return (
    <div>
      <Title />
      <Question />
      <NumberPad />
    </div>
  );
}
