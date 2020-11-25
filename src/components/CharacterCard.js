import "../stylesheets/CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link
        to={`/character-detail/${props.id}`}
        title="Ver los detalles de este personaje"
      >
        <img className="image" src={props.imageUrl} alt={props.name}></img>
        <h2 className="titleCard">{props.name}</h2>
        <p className="subtitle">{props.species}</p>
      </Link>
    </article>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};
export default CharacterCard;
