import React, { useState, useEffect } from "react";
import axios from "axios";
import { UploadImage } from "./UploadImage";
import { TypesList } from "./TypesList";
const API_URL = process.env.REACT_APP_API_URL;

export const ModifyType = () => {
  const [modifiedType, setModifiedType] = useState({
    id: 0,
    name: "",
    logo: "",
    color: "",
  });
  const [allTypes, setAllTypes] = useState([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  // get all types on first render
  useEffect(() => {
    axios
      .get(`${API_URL}/api/types`)
      .then((res) => setAllTypes(res.data))
      .catch((err) => console.error(err));
  }, []);
  // handle the inputs of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModifiedType({ ...modifiedType, [name]: value });
  };
  // handle clicks on which type a user wants to modify
  const handleClickType = (type) => {
    setModifiedType(type);
    setFileName(type.logo);
  };
  // handle form submit (PUT request)
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToPost = {
      name: modifiedType.name,
      logo: fileName,
      color: modifiedType.color,
    };
    axios
      .put(`${API_URL}/api/types/${modifiedType.id}`, dataToPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  return (
    <main className="page">
      <TypesList handleClickType={handleClickType} types={allTypes} />
      <section className="pageFormulaire">
        <section className="create-form">
          <h1>Modifier un type</h1>
          <form action="submit" onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                value={modifiedType.name}
                placeholder="Nom"
                onChange={handleChange}
                maxlength="14"
              />
            </label>
            <label>
              <input
                type="text"
                name="color"
                maxlength="6"
                value={modifiedType.color}
                placeholder="Couleur (hexadecimal)"
                onChange={handleChange}
              />
            </label>
            <UploadImage setFileName={setFileName} setError={setError} />
            <p>{error}</p>
            <button type="submit" className="buttonCreate">
              Modifier
            </button>
          </form>
        </section>
        <section className="previewTypeCreation">
          <div
            className="typeCard"
            style={
              modifiedType.color.length === 6
                ? { backgroundColor: `#${modifiedType.color}` }
                : { backgroundColor: "#E6ECF2" }
            }
          >
            <div className="logoBackground">
              <img
                src={`${API_URL}/icons/${fileName}`}
                alt={modifiedType.name}
              />
              <p>{modifiedType.name}</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
