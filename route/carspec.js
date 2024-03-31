const express = require("express");
const router = express.Router();

const carspecController = require("../controller/carspec");

router
  .route("/")
  .get(carspecController.getAllSpec)
  .post(carspecController.createSpec);

router
  .route("/:id")
  .get(carspecController.getSpec)
  .put(carspecController.updateSpec)
  .delete(carspecController.deleteSpec);

module.exports = router;
