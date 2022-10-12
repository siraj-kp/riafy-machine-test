const cors = require("cors");
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
var corsOptions = {
  origin: true,
};
app.use(cors(corsOptions));
global.__basedir = __dirname;

const initRoutes = require("../routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

module.exports = app;
module.exports.handler = serverless(app);
