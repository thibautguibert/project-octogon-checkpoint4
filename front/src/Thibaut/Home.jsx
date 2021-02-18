import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./home.css";
import LogoORF from "../images/ORFlogo-redandgray.png";
import Maes from "../images/carte-maes.png";
import Jeanjass from "../images/carte-jeanjass.png";
import Squeezie from "../images/carte-squeezie.png";

export const Home = () => {
  return (
    <main className="page">
      <header>
        <Navbar />
        <img src={LogoORF} alt="logo octogone rap fighters" />
        <div className="fading"></div>
      </header>
      <section className="homeBody">
        <Link to="/admin">
          <button type="button" className="buttonPlay">
            Entrez dans l'arène
          </button>
        </Link>
        <div className="cardDisplay">
          <img src={Maes} alt="carte de Maes" id="Maes" />
          <img src={Squeezie} alt="carte de Squeezie" id="Squeezie" />
          <img src={Jeanjass} alt="carte de Jeanjass" id="Jeanjass" />
        </div>
      </section>
    </main>
  );
};
