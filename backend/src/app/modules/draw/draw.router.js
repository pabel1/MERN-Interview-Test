/* eslint-disable node/no-extraneous-require */
const express = require("express");

const validateRequest = require("../../../Middleware/validateRequest");
const { drawSchema } = require("./draw.validation");
const drawController = require("./draw.controller");
const JoiValidationSchema = require("./draw.validation");
const router = express.Router();

router.post(
  "/create",
  validateRequest(JoiValidationSchema.drawSchema),
  drawController.createDraw
);

const drawRouter = router;

module.exports = drawRouter;
