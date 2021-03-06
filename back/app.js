const express = require("express");
const cors = require("cors");
const { inTestEnv, SERVER_PORT } = require("./env");

const app = express();
const router = require("./routes");

// pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/rappers", express.static("public/Images/rappers"))
app.use("/icons", express.static("public/Images/icons"))

// routes
app.use("/api", router);

// server setup
const server = app.listen(SERVER_PORT, () => {
    if (!inTestEnv) {
        console.log(`Server running on port ${SERVER_PORT}`);
    }
});

module.exports = server;
