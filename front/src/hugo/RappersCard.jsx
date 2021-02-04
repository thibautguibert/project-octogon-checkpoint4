import React from "react";
import PropTypes from "prop-types";
import atk from "../images/strength.png";
import def from "../images/cross.png";
import micro from "../images/microphone.png";
import logo from "../images/eiffel-tower.png";
import "./RappersCard.css";

function RappersCard({ existingRappers }) {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <div className="RappersCard">
      <div className="topPart">
        <div className="fondLogo">
          <img
            src={logo}
            // src={existingRappers.logo_type}
            alt="logoGroup"
            className="logoGroup"
          />
          <p className="nomGroup">paname</p>
        </div>
        <div className="nomRap">
          <h1 className="nameRap">{/* {existingRappers.name} */}test</h1>
        </div>
      </div>
      <img
        // src={existingRappers.image}
        alt="imgRap"
        className="imgRap"
      />
      <div className="bottomPart">
        <div className="statsPart">
          <div className="DefAtk">
            <div className="stat">
              <img src={atk} alt="atk" className="atk" />
              <p className="Chiffre">8</p>
            </div>
            <div className="stat">
              <img src={def} alt="def" className="def" />
              <p className="Chiffre">5</p>
            </div>
          </div>
          <div className="stat">
            <img src={micro} alt="micro" className="micro" />
            <p className="Chiffre">2</p>
          </div>
        </div>
        <p className="rarity">{/*existingRappers.rarity*"*"*/} ****</p>
      </div>
    </div>
  );
}

export default RappersCard;

// className="RappersCard"
// style={{ backgroundColor: `#${existingRappers.color_type}` }}
