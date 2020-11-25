import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import Filter from "../components/Filter";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  const charactersList = props.characters.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        imageUrl={character.image}
        name={character.name}
        species={character.species}
        id={character.id}
      />
    );
  });

  if (charactersList.length !== 0) {
    return (
      <section>
        <Filter
          handleChange={props.handleChange}
          filterText={props.filterText}
        />

        <ul className="cardList">{charactersList}</ul>
      </section>
    );
  } else {
    return (
      <div className="error">
        <p>{`No matches found with the query ${props.filterText}`}</p>
      </div>
    );
  }
};
CharacterList.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  id: PropTypes.number,
};
export default CharacterList;
