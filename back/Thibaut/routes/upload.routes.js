const router = require("express").Router();
const multer = require("multer")

router.post("/type", (req, res) => {
    // configuration du dossier de stockage d'image et le nom de l'image
    const storage = multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, "public/Images/rappers/icons")
        },
        filename: (_, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    })
    // pour save un seul fichier 
    const upload = multer({ storage }).single("file")
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message })
        } else {
            res.status(201).json({ filename: req.file.filename })
        }
    })
})

router.post("/rapper", (req, res) => {
    // configuration du dossier de stockage d'image et le nom de l'image
    const storage = multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, "public/Images/rappers")
        },
        filename: (_, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    })
    // pour save un seul fichier 
    const upload = multer({ storage }).single("file")
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message })
        } else {
            res.status(201).json({ filename: req.file.filename })
        }
    })
})

module.exports = router;
