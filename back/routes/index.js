const router = require("express").Router();
const exampleRoutes = require("./example.routes");
const rappers = require("../hugo/routes/rappers.routes");
const typeRoutes = require("../Thibaut/routes/types.routes")
const weaknessRoutes = require("../Thibaut/routes/weaknesses.routes")

router.use("/types", typeRoutes);
router.use("/weaknesses", weaknessRoutes);
router.use("/example", exampleRoutes);
router.use("/rappers", rappers);

module.exports = router;
