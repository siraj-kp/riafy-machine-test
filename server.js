const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
var corsOptions = {
  origin: true,
};
app.use(cors(corsOptions));
global.__basedir = __dirname;

const initRoutes = require("./routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
