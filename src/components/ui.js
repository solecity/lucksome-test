import { STATE } from "../constants/constants";

import "./ui.css";

const UI = ({ setState }) => {
  const spin = () => {
    setState(STATE.ON);
  };

  return (
    <div className="ui">
      <button onClick={spin}>Spin</button>
    </div>
  );
};

export default UI;
