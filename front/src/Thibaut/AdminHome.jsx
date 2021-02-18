import React, { useState } from "react";
import "./adminHome.css";
import { Link } from "react-router-dom";
import Kendrick from "../images/kendrick-lamar.png";

const menuList = [
  [
    {
      link_to: "/admin/create-rapper",
      text: "Créer un rappeur",
    },
    {
      link_to: "/admin/modify-rapper",
      text: "Modifier un rappeur",
    },
    {
      link_to: "/admin/delete-rapper",
      text: "Supprimer un rappeur",
    },
  ],
  [
    {
      link_to: "/admin/create-type",
      text: "Créer un type",
    },
    {
      link_to: "/admin/modify-type",
      text: "Modifier un type",
    },
    {
      link_to: "/admin/delete-type",
      text: "Supprimer un type",
    },
  ],
  [
    {
      link_to: "/admin/create-weakness",
      text: "Créer une faiblesse",
    },
    {
      link_to: "/admin/modify-weakness",
      text: "Modifier une faiblesse",
    },
    {
      link_to: "/admin/delete-weakness",
      text: "Supprimer une faiblesse",
    },
  ],
];

export const AdminHome = () => {
  const [isShown, setIsShown] = useState([false, false, false]);
  const [kendrickOpacity, setKendrickOpacity] = useState(0.75);
  const handleHoverMenu = (i) => {
    let shownArray = isShown.map((elt, index) => {
      if (index === i) {
        console.log(index);
        return true;
      } else {
        console.log(index);
        return false;
      }
    });
    setIsShown(shownArray);
    setKendrickOpacity(0.25);
  };
  return (
    <main className="page">
      <section className="adminNav">
        <button
          type="button"
          className="buttonAdminNav"
          onMouseEnter={() => handleHoverMenu(0)}
        >
          Gestion des Rappeurs
        </button>
        <button
          type="button"
          className="buttonAdminNav"
          onMouseEnter={() => handleHoverMenu(1)}
        >
          Gestion des Types
        </button>
        <button
          type="button"
          className="buttonAdminNav"
          onMouseEnter={() => handleHoverMenu(2)}
        >
          Gestion des Faiblesses
        </button>
      </section>
      <section className="adminMenu">
        {menuList.map((array, index) => (
          <div className={isShown[index] ? "menuList" : "hidden"}>
            <Link to={array[0].link_to}>
              <button type="button" className="buttonAdminMenu">
                {array[0].text}
              </button>
            </Link>
            <Link to={array[1].link_to}>
              <button type="button" className="buttonAdminMenu">
                {array[1].text}
              </button>
            </Link>
            <Link to={array[2].link_to}>
              <button type="button" className="buttonAdminMenu last">
                {array[2].text}
              </button>
            </Link>
          </div>
        ))}
      </section>
      <img
        src={Kendrick}
        alt="background Kendrick Lamar"
        className="kendrick"
        style={{ opacity: kendrickOpacity }}
      />
    </main>
  );
};
