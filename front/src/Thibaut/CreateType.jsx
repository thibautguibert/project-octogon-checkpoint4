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
        <main className="page">
            <section className="create-form">
                <h1>Créer un type</h1>
                <form action="submit">
                    <label>
                        <input type="text" name="name" value={newType.name} placeholder="Nom" onChange={handleChange} />
                    </label>
                    <label>
                        <input type="text" name="color" maxlength="6" value={newType.color} placeholder="Couleur (hexadecimal)" onChange={handleChange} />
                    </label>
                    <button type="submit" className="buttonCreate">Créer</button>
                </form>
            </section>
        </main>
    )
}
