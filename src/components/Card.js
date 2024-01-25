import Img from "./Img";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <Img />
      <div className="card__content">
        <h2 className="card__title">Voyage</h2>
        <p className="card__subtitle">that you should buy</p>
        <p className="card__description">
          Velit odit veniam eaque itaque in molestias quos ab deleniti
          voluptatem quo magni sunt id harum unde inventore, quisquam amet
          doloribus voluptate.
        </p>
        <p className="card__price">1299.99$</p>
        <a className="card__button" href="https://www.clubmed.us/">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Card;
