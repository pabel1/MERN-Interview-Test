/* eslint-disable node/no-extraneous-require */
const express = require("express");

const validateRequest = require("../../../Middleware/validateRequest");

const drawController = require("./draw.controller");
const JoiValidationSchema = require("./draw.validation");
const router = express.Router();

router.post(
  "/create",
  validateRequest(JoiValidationSchema.drawSchema),
  drawController.createDraw
);
router.get(
  "/all",

  drawController.getAllDraw
);

const drawRouter = router;

module.exports = drawRouter;
