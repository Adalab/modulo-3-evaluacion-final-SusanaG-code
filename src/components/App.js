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

  let filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterText.toLowerCase());
    })
    .sort((charac1, charac2) => (charac1 > charac2 ? 1 : -1));

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
          />
        </Route>
        <Route path="/character-detail/:id" component={renderDetail}></Route>
      </Switch>
    </main>
  );
};

App.propTypes = {};
export default App;
