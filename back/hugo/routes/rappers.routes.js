const router = require("express").Router();
const { connection } = require("../../database");

router.get("/", (req, res) => {
    const { name } = req.query;
    if (name.length > 0) {
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
        const sql = "SELECT * FROM rappers";
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
      res.status(200).json(resultOne);
    }
  })
});

module.exports = router;
