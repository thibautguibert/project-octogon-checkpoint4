const router = require("express").Router();
const exampleRoutes = require("./example.routes");
const typeRoutes = require("../Thibaut/routes/types.routes")

router.use("/types", typeRoutes);
router.use("/example", exampleRoutes);

module.exports = router;
