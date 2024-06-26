const express = require("express");
const router = express.Router();
const carsize = require("./carsize");
const car = require("./car");
const spec = require("./carspec");
const option = require("./caroption");

router.use("/carsize", carsize);
router.use("/car", car);
router.use("/spec", spec);
router.use("/option", option);

module.exports = router;
