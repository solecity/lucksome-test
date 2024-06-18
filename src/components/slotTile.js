import "./slotTile.css";

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

const SlotTile = ({ id }) => {
  return (
    <div className="tile">
      <img src={images[`${id}.png`]} alt={id} />
    </div>
  );
};

export default SlotTile;
