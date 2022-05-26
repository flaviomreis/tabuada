import { NumberPadKey } from "./NumberPadKey";

export function NumberPad() {
  return (
    <>
      <div className="flex gap-2 py-2">
        <NumberPadKey value="7" />
        <NumberPadKey value="8" />
        <NumberPadKey value="9" />
      </div>
      <div className="flex gap-2 py-2">
        <NumberPadKey value="4" />
        <NumberPadKey value="5" />
        <NumberPadKey value="6" />
      </div>
      <div className="flex gap-2 py-2">
        <NumberPadKey value="1" />
        <NumberPadKey value="2" />
        <NumberPadKey value="3" />
      </div>
      <div className="flex gap-2 py-2">
        <NumberPadKey value="0" />
      </div>
    </>
  )
}
