import { useEffect, useState } from "react";

import SlotMachine from "./components/slotMachine";

import "./App.css";

function App() {
  const [result, setResult] = useState([[]]);

  const getGrid = () => {
    setResult([
      [1, 2, 3],
      [1, 4, 2],
      [3, 5, 6],
    ]);
  };

  useEffect(() => {
    getGrid();
  }, []);

  return (
    <div className="container">
      <h1>Slot Machine</h1>

      <section>
        <SlotMachine result={result} />

        <button>Spin</button>
      </section>
    </div>
  );
}

export default App;
