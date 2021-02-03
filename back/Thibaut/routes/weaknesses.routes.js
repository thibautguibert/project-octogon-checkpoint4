const router = require("express").Router();
const connection = require("../../database");

// Get all the Weaknesses with names of types
router.get("/", (req, res) => {
    const sql = `SELECT w.id AS line, atk.id AS id_atk, atk.name AS attacker, def.id AS id_def, def.name AS defender
                FROM types AS atk
                JOIN weaknesses AS w ON atk.id=w.id_attacker
                JOIN types AS def ON def.id=w.id_defender`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.status(200).json(result)
        }
    })
})

// Get all the "supereffectives types" of the attacker
router.get("/attacker/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT atk.id AS id_atk, atk.name, atk.logo, atk.color, def.id AS id_def, def.name AS defender
    FROM types AS atk
    JOIN weaknesses AS  w ON atk.id=w.id_attacker
    JOIN types AS def ON def.id=w.id_defender
    WHERE w.id_attacker=${id}
    ORDER BY def.id ASC`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            let weaknessArray = {}
            result.forEach((weakness, index) => {
                const { id_def, defender, ...attacker } = weakness;
                if (index === 0) {
                    attacker.strong_against = [
                        {
                            id: id_def,
                            name: defender
                        }
                    ]
                    weaknessArray = attacker
                }
                else {
                    weaknessArray.strong_against.push({
                        id: id_def,
                        name: defender
                    })
                }
            })
            res.status(200).json(weaknessArray)
        }
    })
})

// GET ALL THE WEAKNESSES OF THE DEFENDER
router.get("/defender/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT atk.id AS id_atk, atk.name AS attacker, def.logo, def.color, def.id AS id_def, def.name
    FROM types AS atk
    JOIN weaknesses AS w ON atk.id=w.id_attacker
    JOIN types AS def ON def.id=w.id_defender
    WHERE w.id_defender=${id}
    ORDER BY atk.id ASC`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            let weaknessArray = {}
            result.forEach((weakness, index) => {
                const { id_atk, attacker, ...defender } = weakness;
                if (index === 0) {
                    defender.weak_against = [
                        {
                            id: id_atk,
                            name: attacker
                        }
                    ]
                    weaknessArray = defender
                }
                else {
                    weaknessArray.weak_against.push({
                        id: id_atk,
                        name: attacker
                    })
                }
            })
            res.status(200).json(weaknessArray)
        }
    })
})

// CREATE ONE WEAKNESS
router.post("", (req, res) => {
    const { id_attacker, id_defender } = req.body;
    let sql = `INSERT INTO weaknesses (id_attacker, id_defender) VALUES (?,?)`
    connection.query(sql, [id_attacker, id_defender], (errOne, resultOne) => {
        if (errOne) {
            res.status(500).json({ error: errOne.message })
        } else {
            const id = resultOne.insertId;
            sql = `SELECT * FROM weaknesses WHERE id=${id}`
            connection.query(sql, (errTwo, resultTwo) => {
                if (errTwo) {
                    res.status(500).json({ errorTwo: err.message })
                } else {
                    res.status(200).json(resultTwo[0]);
                }
            })
        }
    })
})

// DELETE ONE WEAKNESS
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM weaknesses WHERE id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        }
        else if (result.length === 0) {
            res.status(404).json({ error: `weakness number ${id} could not be found` })
        } else {
            res.status(200).json({ success: "the type was successfully deleted" });
        }
    })
})

module.exports = router;