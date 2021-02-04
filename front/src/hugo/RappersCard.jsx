import React from "react";
import atk from "../images/strength.png";
import def from "../images/cross.png";
import micro from "../images/microphone.png";
import "./RappersCard.css";

function RappersCard({
  logo,
  group_name,
  rapper_name,
  rapper_img,
  atk_chiffre,
  def_chiffre,
  micro_chiffre,
  rarity,
  color,
}) {
  function stars(rareté) {
    let étoiles = "";
    for (let i = 0; i < rareté; i++) {
      étoiles = étoiles + "*";
    }
    return étoiles;
  }

  return (
    <div className="RappersCard" style={{ backgroundColor: `#${color}` }}>
      <div className="topPart">
        <div className="fondLogo" style={{ borderColor: `#${color}` }}>
          <img src={logo} alt="logoGroup" className="logoGroup" />
          <p
            className="nomGroup"
            style={
              group_name.length > 12
                ? { fontSize: "10px" }
                : { fontSize: "12px" }
            }
          >
            {group_name}
          </p>
        </div>
        <div className="nomRap">
          <h1 className="nameRap">{rapper_name}</h1>
        </div>
      </div>
      <img src={rapper_img} alt="imgRap" className="imgRap" />
      <div className="bottomPart">
        <div className="statsPart">
          <div className="DefAtk">
            <div className="stat">
              <img src={atk} alt="atk" className="atk" />
              <p className="Chiffre"> {atk_chiffre} </p>
            </div>
            <div className="stat">
              <img src={def} alt="def" className="def" />
              <p className="Chiffre">{def_chiffre}</p>
            </div>
          </div>
          <div className="stat">
            <img src={micro} alt="micro" className="micro" />
            <p className="Chiffre">{micro_chiffre}</p>
          </div>
        </div>
        <p className="rarity">{stars(rarity)}</p>
      </div>
    </div>
  );
}

export default RappersCard;
