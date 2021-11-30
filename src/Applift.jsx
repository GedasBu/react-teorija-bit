import { useState } from "react";
import MinusButon from "./components/lift/MinusButton";
import PlusButton from "./components/lift/PlusButton";

function App() {
  const [plusButtonCount, setPlusButtonCount] = useState(55);
  const plus = () => {
    setPlusButtonCount(plusButtonCount + 1);
  };
  const [minusButtonCount, setMinusButtonCount] = useState(40);

  const minus = () => {
    setMinusButtonCount(minusButtonCount - 1);
  };

  return (
    <div className="App col">
      <div>Labas rytas</div>
      <PlusButton plusButtonCount={plusButtonCount} plus={minus} />
      <MinusButon minusButtonCount={minusButtonCount} minus={plus}/>
    </div>
  );
}

export default App;
