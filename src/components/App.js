import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import api from "../services/api";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Loading from "./Loading";
import Header from "./Header";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [valueSelect, setIsValueSelect] = useState("Male");

  useEffect(() => {
    setIsLoading(true);
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  const handleChange = (filterText) => {
    setFilterText(filterText);
  };

  const handleSelect = (selectValue) => {
    setIsValueSelect(selectValue);
    console.log("He llegado", selectValue);
  };

  let filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterText.toLowerCase());
    })
    .filter((eachCharacter) =>
      eachCharacter.gender === valueSelect ? true : false
    )
    .sort((charac1, charac2) => (charac1.name > charac2.name ? 1 : -1));
  console.log(characters);

  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);

    const foundCharacter = characters.find((eachCharacter) => {
      return routeCharacterId === eachCharacter.id;
    });

    if (foundCharacter !== undefined) {
      return (
        <CharacterDetail
          titledetail="Name: "
          namedetail={foundCharacter.name}
          statusdetail={foundCharacter.status}
          imagedetail={foundCharacter.image}
          origindetail={foundCharacter.origin}
          speciesdetail={foundCharacter.species}
          episodesdetail={foundCharacter.episode.length}
        />
      );
    } else {
      return <p>No hay personaje</p>;
    }
  };

  return (
    <div className="body">
      <main className="main">
        <Header />
        <Switch>
          {isLoading === true ? <Loading /> : null}
          <Route exact path="/">
            <CharacterList
              className="card"
              characters={filteredCharacters}
              handleChange={handleChange}
              filterText={filterText}
              handleSelect={handleSelect}
            />
          </Route>
          <Route path="/character-detail/:id" component={renderDetail}></Route>
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {};
export default App;
