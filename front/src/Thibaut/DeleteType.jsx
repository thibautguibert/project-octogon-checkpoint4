import axios from "axios";
import React, { useEffect, useState } from "react";
import { TypesList } from "./TypesList";
const API_URL = process.env.REACT_APP_API_URL;

export const DeleteType = () => {
  const [allTypes, setAllTypes] = useState([]);
  const [chosenType, setChosenType] = useState({
    name: "",
    logo: "",
    color: "",
    id: 0,
  });
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    axios
      .get(`${API_URL}/api/types`)
      .then((res) => setAllTypes(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleClickType = (type) => {
    setChosenType(type);
  };
  const deleteType = () => {
    axios
      .delete(`${API_URL}/api/types/${chosenType.id}`, { data: chosenType })
      .then(() =>
        setFeedback("Le type a bien été supprimé de la base de données")
      )
      .catch((err) => {
        console.error(err);
        setFeedback(
          "Un problème avec le serveur a eu lieu lors de la suppression."
        );
      });
  };
  return (
    <main className="page">
      <h1 className="deleteTitle">Choisir le type à supprimer</h1>
      <TypesList handleClickType={handleClickType} types={allTypes} />
      {chosenType.name.length > 0 && (
        <section className="pageFormulaire">
          <section className="previewTypeCreation">
            <div
              className="typeCard"
              style={{ backgroundColor: `#${chosenType.color}` }}
            >
              <div className="logoBackground">
                <img
                  src={`${API_URL}/icons/${chosenType.logo}`}
                  alt={chosenType.name}
                />
                <p>{chosenType.name}</p>
              </div>
            </div>
          </section>
          <section className="deleteValidation">
            <h2>Voulez-vous vraiment supprimer ce type ?</h2>
            <button type="button" className="buttonCreate" onClick={deleteType}>
              Oui
            </button>
            <p>{feedback}</p>
          </section>
        </section>
      )}
    </main>
  );
};
