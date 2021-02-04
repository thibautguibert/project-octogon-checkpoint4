const router = require("express").Router();
const { connection } = require("../../database");

router.get("/", (req, res) => {
    const { name } = req.query;
    if (name) {
        const sql = `SELECT r.name, r.id, r.rarity, r.lifepoints, r.power, r.cost, r.image, m.id AS id_type, m.name AS name_type, m.logo AS logo_type, m.color AS color_type
                     FROM rappers AS r
                     JOIN types AS m ON m.id=r.id_type 
                     WHERE r.name LIKE "${name}%"`
        connection.query(sql, (err, result) => {
            if (err) {
              res.status(500).json({ errorContact: err.message });
            } else {
              res.status(200).json(result);
            }
          });
    } else {
      const sql = `SELECT r.name, r.id, r.rarity, r.lifepoints, r.power, r.cost, r.image, m.id AS id_type, m.name AS name_type, m.logo AS logo_type, m.color AS color_type
      FROM rappers AS r
      JOIN types AS m ON m.id=r.id_type `
        connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
    });
    }
});

router.post("/", (req, res) => {
  const { name, rarity, lifepoints, power, cost, image, id_type} = req.body;
  const sql = "INSERT INTO rappers (name, rarity, lifepoints, power, cost, image, id_type) VALUES (?, ?, ?, ?, ?, ?, ? )";
  connection.query(sql, [name, rarity, lifepoints, power, cost, image, id_type], (err, result) => {
    if (err) {
      res.status(500).json({ errorImage: err.message });
    } else {
      const id = result.insertId
      const sql2 = `SELECT * FROM rappers WHERE id=${id}`;
      connection.query(sql2, (errTwo, resultTwo) => {
        if (errTwo) {
          res.status(500).json({ errorTwo: err.message})
        } else {

          res.status(200).json(resultTwo[0]);
        }
     })
  }
  })
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM rappers WHERE id=${id}`
  connection.query(sql, (err, result) => {
      if (err) {
          res.status(500).json({ error: err.message })
      }
      else if (result.length === 0) {
          res.status(404).json({ error: `rappers number ${id} could not be found` })
      } else {
          res.status(200).json({ success: "this rappers was successfully deleted" });
      }
  })
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, rarity, lifepoints, power, cost, image, id_type } = req.body
  const sql = `UPDATE rappers
              SET name=?, rarity=?, lifepoints=?, power=?, cost=?, image=?, id_type=?
              WHERE id=${id}`;
  connection.query(sql, [name, rarity, lifepoints, power, cost, image, id_type], (err) => {
    if (err) {
      res.status(500).json({ error: err.message })
    } else {
      const sql = `SELECT * FROM rappers WHERE id=${id}`;
      connection.query(sql, (errO, result) => {
          if (errO) {
              res.status(500).json({ errorO: errO.message })
          } else {
              res.status(200).json(result[0]);
          }
      })
  }
  })
})


module.exports = router;
