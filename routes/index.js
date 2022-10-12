const express = require("express");
const router = express.Router();
const controller = require("../controller/transaction.controller");
let routes = (app) => {
  router.get("/search/:query?", controller.search);
  router.get("/stock/:id?", controller.getStock);
  // router.get("/files/:name", controller.download);
  app.use(router);

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
};
module.exports = routes;
