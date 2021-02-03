const router = require("express").Router();
const connection = require("../../database");

// GET ALL TYPES
router.get("/", (req, res) => {
    const sql = `SELECT * FROM types`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        }
        else if (result.length === 0) {
            res.status(404).json({ error: "aucun type n'a été trouvé. Votre base de données est sûrement vide" })
        } else {
            res.status(200).json(result);
        }
    })
})

// GET ONE TYPE
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM types WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        }
        else if (result.length === 0) {
            res.status(404).json({ error: `le type numéro ${id} n'a pas été trouvé` })
        } else {
            res.status(200).json(result[0]);
        }
    })
})

// MODIFY ONE TYPE
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, logo, color } = req.body
    let sql = `UPDATE types
                SET name=?, logo=?, color=?
                WHERE id=${id}`;
    connection.query(sql, [name, logo, color], (errOne) => {
        if (errOne) {
            res.status(500).json({ error: errOne.message })
        } else {
            sql = `SELECT * FROM types WHERE id=${id}`;
            connection.query(sql, (errTwo, result) => {
                if (errTwo) {
                    res.status(500).json({ errorTwo: err.message })
                } else {
                    res.status(200).json(result[0]);
                }
            })
        }
    })
})

// CREATE ONE TYPE
router.post("/", (req, res) => {
    const { name, logo, color } = req.body
    let sql = `INSERT INTO types
                (name, logo, color)
                VALUES (?,?,?)`;
    connection.query(sql, [name, logo, color], (errOne, resultOne) => {
        if (errOne) {
            res.status(500).json({ error: errOne.message })
        } else {
            const id = resultOne.insertId
            sql = `SELECT * FROM types WHERE id=${id}`;
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

// DELETE ONE TYPE
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM types WHERE id=${id}`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        }
        else if (result.length === 0) {
            res.status(404).json({ error: `le type numéro ${id} n'a pas été trouvé` })
        } else {
            res.status(200).json({ success: "the type was successfully deleted" });
        }
    })
})

module.exports = router;