import "../stylesheets/CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link
        to={`/character-detail/${props.id}`}
        // target="_blank"
        title="Ver los detalles de este personaje"
      >
        <img className="image" src={props.imageUrl} alt={props.name}></img>
        <h2 className="titleCard">{props.name}</h2>
        <p className="subtitle">{props.species}</p>
      </Link>
    </article>
  );
};
CharacterCard.propTypes = {};
export default CharacterCard;
