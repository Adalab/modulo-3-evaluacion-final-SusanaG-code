import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import api from "../services/api";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Loading from "./Loading";
import Header from "./Header";

const App = () => {
  //guardamos datos del api en el state.
  const [characters, setCharacters] = useState([]);
  //guardamos los datos del search en el state.
  const [filterText, setFilterText] = useState("");
  //guardamos el dato de si está loading o no y empieza en booleano false
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

  //filtramos el listado del api con el nombre del personaje y que incluya las minúsculas.
  let filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterText.toLowerCase());
    })
    /*toma como argumento una comparación y te devuelve el resultado ordenado. Aquí comparo cada nombre y los rdena alfabéticamente..*/
    .sort((charac1, charac2) => (charac1.name > charac2.name ? 1 : -1));

  //Buscamos cada personaje por su id para que se renderice cuando hagamos click en el link.
  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((eachCharacter) => {
      return routeCharacterId === eachCharacter.id;
    });
    //si lo he encontrado
    if (foundCharacter) {
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
      return (
        <div className="not-found">
          <p>Not found</p>
        </div>
      );
    }
  };

  return (
    <main className="main main2">
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

export default App;
