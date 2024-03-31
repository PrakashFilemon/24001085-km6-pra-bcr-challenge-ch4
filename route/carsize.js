const express = require("express");
const router = express.Router();

const carsizeController = require("../controller/carsize");

router
  .route("/")
  .get(carsizeController.getAllCarsize)
  .post(carsizeController.createCarsize);

router
  .route("/:id")
  .get(carsizeController.getCarsize)
  .put(carsizeController.updateCarsize)
  .delete(carsizeController.deleteCarsize);

module.exports = router;
