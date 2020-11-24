import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import Filter from "../components/Filter";

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
  return (
    <section>
      <Filter handleChange={props.handleChange} filterText={props.filterText} />

      <ul className="cardList">{charactersList}</ul>
    </section>
  );
};
CharacterList.propTypes = {};
export default CharacterList;
