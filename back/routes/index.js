const router = require("express").Router();
const exampleRoutes = require("./example.routes");
const rappers = require("../hugo/routes/rappers.routes");

router.use("/example", exampleRoutes);
router.use("/rappers", rappers);

module.exports = router;
