import React, { useState } from 'react';
import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL;

export const UploadImage = ({ setFileName, setError }) => {
    const [label, setLabel] = useState("Choisir une Image")
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (file.type !== "image/png" && file.type !== "image/svg" && file.type !== "image/gif") {
            setError("Seules les images à fond transparent sont acceptées (png, svg ou gif")
        }
        else {
            const data = new FormData();
            data.append("file", file);
            axios.post(`${API_URL}/api/upload/type`, data)
                .then((res) => {
                    setFileName(res.data.filename);
                    setLabel("L'image a bien été uploadée")
                    setError("")

                })
                .catch(err => alert(err))
        }
    }
    return (
        <div>
            <label htmlFor="upload" className="labelFile">{label}</label>
            <input id="upload" type="file" accept="image/*" onChange={handleChangeFile} className="inputFile" />
        </div>
    )
}
