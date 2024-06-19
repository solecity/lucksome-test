import styles from "./slotTile.module.css";

const importAll = (r) => {
  let images = {};

  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
};

const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const SlotTile = ({ id, state }) => {
  return (
    <div className={`${styles.tile} ${styles[state]}`}>
      <img src={images[`${id}.png`]} alt={id} />
    </div>
  );
};

export default SlotTile;
