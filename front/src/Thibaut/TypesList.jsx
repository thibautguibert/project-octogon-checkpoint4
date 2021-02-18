import React from "react";
const API_URL = process.env.REACT_APP_API_URL;

export const TypesList = ({ types, handleClickType }) => {
  return (
    <section className="typesList">
      {types.map((type) => (
        <div
          className="typeCard"
          style={
            type.color.length === 6
              ? { backgroundColor: `#${type.color}` }
              : { backgroundColor: "#E6ECF2" }
          }
          onClick={() => handleClickType(type)}
        >
          <div className="logoBackground">
            <img src={`${API_URL}/icons/${type.logo}`} alt={type.name} />
            <p>{type.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
