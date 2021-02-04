import axios from 'axios';
import React, { useState } from 'react'
import "./admin-forms.css"
import { UploadImage } from './UploadImage'
const API_URL = process.env.REACT_APP_API_URL;

export const CreateType = () => {
    const [newType, setNewType] = useState({
        name: "",
        logo: "",
        color: ""
    })
    const [fileName, setFileName] = useState("")
    const [error, setError] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewType({ ...newType, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToPost = {
            name: newType.name,
            logo: fileName,
            color: newType.color
        }
        axios.post(`${API_URL}/api/types`, dataToPost)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }
    return (
        <main className="page pageFormulaire">
            <section className="create-form">
                <h1>Créer un type</h1>
                <form action="submit" onSubmit={handleSubmit}>
                    <label>
                        <input type="text" name="name" value={newType.name} placeholder="Nom" onChange={handleChange} maxlength="14" />
                    </label>
                    <label>
                        <input type="text" name="color" maxlength="6" value={newType.color} placeholder="Couleur (hexadecimal)" onChange={handleChange} />
                    </label>
                    <UploadImage setFileName={setFileName} setError={setError} />
                    <p>{error}</p>
                    <button type="submit" className="buttonCreate">Créer</button>
                </form>
            </section>
            <section className="previewTypeCreation" >
                <div className="typeCard" style={newType.color.length === 6 ? { backgroundColor: `#${newType.color}` } : { backgroundColor: "#E6ECF2" }}>
                    <div className="logoBackground">
                        <img src={`${API_URL}/icons/${fileName}`} />
                        <p>{newType.name}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
