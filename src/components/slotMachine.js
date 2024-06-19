import SlotTile from "./slotTile";

import "./slotMachine.css";

const SlotMachine = ({ result }) => {
  return (
    <div className="box">
      {result.map((col, i) => (
        <div key={i} className="col">
          {col.map((tile, i) => (
            <SlotTile key={i} id={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotMachine;
