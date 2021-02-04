import React, { useState } from 'react'
import "./admin-forms.css"

export const CreateType = () => {
    const [newType, setNewType] = useState({
        name: "",
        logo: "",
        color: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewType({ ...newType, [name]: value })
    }
    return (
        <main className="page pageFormulaire">
            <section className="create-form">
                <h1>Créer un type</h1>
                <form action="submit">
                    <label>
                        <input type="text" name="name" value={newType.name} placeholder="Nom" onChange={handleChange} maxlength="14" />
                    </label>
                    <label>
                        <input type="text" name="color" maxlength="6" value={newType.color} placeholder="Couleur (hexadecimal)" onChange={handleChange} />
                    </label>
                    <button type="submit" className="buttonCreate">Créer</button>
                </form>
            </section>
            <section className="previewTypeCreation" >
                <div className="typeCard" style={newType.color.length === 6 ? { backgroundColor: `#${newType.color}` } : { backgroundColor: "#E6ECF2" }}>
                    <div className="logoBackground">
                        <p>{newType.name}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
