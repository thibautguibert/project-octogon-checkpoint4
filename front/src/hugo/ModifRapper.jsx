import React, { useState, useEffect } from "react";
import axios from "axios";
import RappersCard from "./RappersCard";
import { CreateRapper } from "../Thibaut/CreateRapper";

const API_URL = process.env.REACT_APP_API_URL;

function ModifRapper() {
  const [searchFile, setSearchFile] = useState("");
  const [rapper, setRapper] = useState({
    name: "",
    id: 0,
    rarity: 0,
    lifepoints: 0,
    power: 0,
    cost: 0,
    image: "",
    id_type: 0,
    name_type: "",
    logo_type: "",
    color_type: "",
  });
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/types`)
      .then((result) => result.data)
      .then((data) => {
        setTypes(data);
      });
  }, []);

  const searchClick = () => {
    if (searchFile.length === 0) {
      alert("entrer un nom");
    } else {
      axios
        .get(`${API_URL}/api/rappers?name=${searchFile}`)
        .then((result) => result.data)
        .then((data) => {
          setRapper(data[0]);
          console.log(data);
        });
    }
  };

  const changeType = (event) => {
    const id = event.target.value;
    setRapper({ ...rapper, id_type: id });
  };

  const rapperSearch = (event) => {
    setSearchFile(event.target.value);
  };
  return (
    <div className="rappersList">
      <div className="searchBar">
        <input
          type="text"
          value={searchFile}
          onChange={rapperSearch}
          className="searchText"
          placeholder="entrer le nom d'un rappeur"
        />
        <button type="button" onClick={searchClick} className="rechercheBnt">
          rechercher
        </button>
      </div>
      <div className="modifRappers">
        <div className="CreateRapper">
          <section className="create-form">
            <h1>Modifier un rappeur</h1>
            <form action="submit">
              <label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="Nom"
                  value={rapper.name}
                />
              </label>
              <label>
                <select
                  name="type"
                  id="type"
                  onChange={changeType}
                  value={rapper.id_type}
                >
                  <option value="0" disabled selected hidden>
                    Type
                  </option>
                  {types.map((type) => (
                    <option value={type.id}>{type.name}</option>
                  ))}
                </select>
              </label>
              <label>
                <select name="rareté" id="rareté" value={rapper.rarity}>
                  <option value="0" disabled selected hidden>
                    Rareté
                  </option>
                  <option value="1">Commune</option>
                  <option value="2">Peu-commune</option>
                  <option value="3">Rare</option>
                  <option value="4">Super-rare</option>
                  <option value="5">Ultra-rare</option>
                </select>
              </label>
              <label>
                <input
                  type="number"
                  name="puissance"
                  id="puissance"
                  placeholder="Puissance"
                  value={rapper.power}
                />
              </label>
              <label>
                <input
                  type="number"
                  name="points-de-vie"
                  id="points-de-vie"
                  placeholder="Points de vie"
                  value={rapper.lifepoints}
                />
              </label>
              <label>
                <input
                  type="number"
                  name="cout"
                  id="cout"
                  placeholder="Coût pour attaquer"
                  value={rapper.cost}
                />
              </label>
              <button type="submit" className="buttonCreate">
                Créer
              </button>
            </form>
          </section>
        </div>
        <div className="RappersCardM">
          <RappersCard
            group_name={rapper.name_type}
            logo={`${API_URL}/icons/${rapper.logo_type}`}
            rapper_name={rapper.name}
            rapper_img={`${API_URL}/rappers/${rapper.image}`}
            atk_chiffre={rapper.power}
            def_chiffre={rapper.lifepoints}
            micro_chiffre={rapper.cost}
            rarity={rapper.rarity}
            color={rapper.color_type}
          />
        </div>
      </div>
    </div>
  );
}

export default ModifRapper;
