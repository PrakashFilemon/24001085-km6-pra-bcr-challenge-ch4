const express = require("express");
const router = express.Router();

const caroptionController = require("../controller/caroption");

router
  .route("/")
  .get(caroptionController.getAllOption)
  .post(caroptionController.createOption);

router
  .route("/:id")
  .get(caroptionController.getCarOption)
  .put(caroptionController.updateOption)
  .delete(caroptionController.deleteOption);

module.exports = router;
