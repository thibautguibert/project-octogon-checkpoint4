import React from "react";

export const CreateRapper = () => {
  return (
    <main className="page">
      <section className="create-form">
        <h1>Créer un rappeur</h1>
        <form action="submit">
          <label>
            <input type="text" name="nom" id="nom" placeholder="Nom" />
          </label>
          <label>
            <select name="type" id="type">
              <option value="" disabled selected hidden>
                Type
              </option>
            </select>
          </label>
          <label>
            <select name="rareté" id="rareté">
              <option value="" disabled selected hidden>
                Rareté
              </option>
            </select>
          </label>
          <label>
            <input
              type="number"
              name="puissance"
              id="puissance"
              placeholder="Puissance"
            />
          </label>
          <label>
            <input
              type="number"
              name="points-de-vie"
              id="points-de-vie"
              placeholder="Points de vie"
            />
          </label>
          <label>
            <input
              type="number"
              name="cout"
              id="cout"
              placeholder="Coût pour attaquer"
            />
          </label>
          <button type="submit" className="buttonCreate">
            Créer
          </button>
        </form>
      </section>
    </main>
  );
};
