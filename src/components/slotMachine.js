import { useEffect, useState } from "react";

import SlotTile from "./slotTile";
import { getRandomId } from "../services/general";
import { STATE } from "../constants/constants";

import styles from "./slotMachine.module.css";

const SlotMachine = ({ result, state, setState }) => {
  const [isSpinning, setIsSpinning] = useState(state === STATE.OFF);

  useEffect(() => {
    if (state === STATE.ON) {
      setIsSpinning(true);

      setTimeout(() => {
        setIsSpinning(false);
        setState(STATE.STOPPING);
      }, 1000);
    }
  }, [state]);

  return (
    <div className={styles.box}>
      {result.map((reel, i) => (
        <div
          key={i}
          className={`${styles.reel} ${isSpinning ? "spinning" : ""}`}
        >
          {reel.map((tile, i) => (
            <SlotTile key={i} id={tile} state="visible" />
          ))}

          {/* <SlotTile id={getRandomId(1, 6)} state="hidden" />
          <SlotTile id={getRandomId(1, 6)} state="hidden" />
          <SlotTile id={getRandomId(1, 6)} state="hidden" /> */}
        </div>
      ))}
    </div>
  );
};

export default SlotMachine;
