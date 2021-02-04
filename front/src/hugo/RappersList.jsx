import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RappersCard from "./RappersCard";
import ORF from "../images/ORFlogo-redandgray.png";

const API_URL = process.env.REACT_APP_API_URL;

function ListRappers() {
  const [rappers, setRappers] = useState([]);
  const [searchFile, setSearchFile] = useState("");
  useEffect(() => {
    axios
      .get(`${API_URL}/api/rappers`)
      .then((result) => result.data)
      .then((data) => {
        setRappers(data);
      });
  }, []);
  const rapperSearch = (event) => {
    setSearchFile(event.target.value);
  };
  const searchClick = () => {
    axios
      .get(`${API_URL}/api/rappers?name=${searchFile}`)
      .then((result) => result.data)
      .then((data) => {
        setRappers(data);
        console.log(data);
      });
  };
  return (
    <div className="rappersList">
      <div className="rapperHeader">
        <Link to="/">
          <img src={ORF} alt="logo" className="ORFlogo" />
        </Link>
        <h1 className="rappeursTitre">Les rappeurs</h1>
        <div className="vide"></div>
      </div>
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
      <div className="rappeurs">
        {rappers.map((rapper) => (
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
        ))}
      </div>
    </div>
  );
}

export default ListRappers;
