import "../stylesheets/CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CharacterCard = (props) => {
  const [color, setColor] = useState("");

  return (
    <article className="card">
      <Link
        to={`/character-detail/${props.id}`}
        title="Ver los detalles de este personaje"
      >
        <img className="image" src={props.imageUrl} alt={props.name}></img>
        <div className="title">
          <h2 className="titleCard">{props.name}</h2>
          <p className="subtitle">{props.species}</p>
        </div>
      </Link>

      <button
        className="btn-fav"
        style={{ background: color }}
        onClick={() => setColor(color === "" ? "deeppink" : "")}
        value={props.id}
      >
        <FontAwesomeIcon icon={faHeart} className="iconFav" />
      </button>
    </article>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};
export default CharacterCard;
