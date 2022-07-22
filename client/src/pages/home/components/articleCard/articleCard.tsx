import { Link } from "react-router-dom";
import { Button } from "../../../../common/components/button/button";
import "./articleCard.css";
import { Article } from "./types/article";

export const ArticleCard = ({
  title,
  description,
  date,
  image_src,
  card_size,
}: Article) => {
  return (
    <div
      className={
        card_size === "large" ? "articleCardLarge" : "articleCardNormal"
      }
    >
      <div
        className="cardImage cardImageNormal"
        style={{ backgroundImage: `url(${image_src})` }}
      ></div>
      <div className="cardContent">
        <h3 className="cardTitle">title</h3>
        <p className="cardDescription">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="otherInfos">
          <p className="cardDate">12/10/22</p>
          <Link to="/article"><Button color="blue" label="Lire la suite" /></Link>
        </div>
      </div>
    </div>
  );
};
