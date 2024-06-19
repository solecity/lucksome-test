import { useEffect, useState } from "react";

import SlotMachine from "./components/slotMachine";
import UI from "./components/ui";
import { getRandomId, nest_array } from "./services/general";
import { STATE, RESULT_LENGTH, SLOT_MASK } from "./constants/constants";

import "./App.css";

function App() {
  const [state, setState] = useState(STATE.OFF);
  const [result, setResult] = useState([[]]);

  const getResult = () => {
    let arr = [];

    for (let i = 0; i < RESULT_LENGTH; i++) {
      arr.push(getRandomId(1, 6));
    }

    return arr;
  };

  const getGrid = () => {
    console.log("grid");
    setResult(nest_array(getResult(), SLOT_MASK, 3));
  };

  useEffect(() => {
    getGrid();
  }, []);

  useEffect(() => {
    if (state === STATE.STOPPING) {
      getGrid();
      setState(STATE.OFF);
    }
  }, [state]);

  return (
    <div className="container">
      <h1>Slot Machine</h1>

      <section>
        <SlotMachine result={result} state={state} setState={setState} />

        <UI state={state} setState={setState} />
      </section>
    </div>
  );
}

export default App;
