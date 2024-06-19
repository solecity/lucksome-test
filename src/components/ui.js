import { STATE } from "../constants/constants";

import styles from "./ui.module.css";

const UI = ({ state, setState }) => {
  const spin = () => setState(STATE.ON);

  return (
    <div className={styles.container}>
      <button onClick={spin} disabled={state !== STATE.OFF}>
        {state !== STATE.OFF ? "Stop" : "Spin"}
      </button>
    </div>
  );
};

export default UI;
