import SlotTile from "./slotTile";

import "./slotMachine.css";

const SlotMachine = ({ result }) => {
  return (
    <div className="box">
      {result.map((col) => (
        <div className="col">
          {col.map((tile) => (
            <SlotTile id={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotMachine;
