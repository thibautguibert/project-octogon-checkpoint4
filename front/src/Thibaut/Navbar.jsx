import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [xcross, setXcross] = useState(false);
    const handleBurgerClick = () => {
        setXcross(!xcross);
    }
    useEffect(() => {
        scrollLock()
    }, [xcross])
    const scrollLock = () => {
        const scrollPos = document.body;
        const screenW = window.screen.width;
        if (xcross === true && screenW < 600) {
            scrollPos.style.overflowY = "hidden";
        } else {
            scrollPos.style.overflowY = "initial";
        }
    };
    return (
        <div className="navBar">
            <Link to="/rules">
                <button type="button" className="desktop">Règles du jeu</button>
            </Link>
            <div>
                <Link to="/rappers">
                    <button type="button" className="desktop">Les Rappeurs</button>
                </Link>
                <Link to="/types">
                    <button type="button" className="desktop">Table des types</button>
                </Link>
            </div>
            <div className={xcross ? "ul-mobile active" : "ul-mobile"}>
                <Link to="/rules">
                    <button type="button">Règles du jeu</button>
                </Link>
                <Link to="/rappers">
                    <button type="button">Les Rappeurs</button>
                </Link>
                <Link to="/types">
                    <button type="button">Table des types</button>
                </Link>
            </div>
            <button
                className={xcross ? "Burger xcross" : "Burger"}
                onClick={handleBurgerClick}
            >
                <div className="bar" id="first-bar"></div>
                <div className="bar" id="second-bar"></div>
                <div className="bar" id="third-bar"></div>
            </button>
        </div>
    )
}
