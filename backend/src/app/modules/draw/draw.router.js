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
router.get(
  "/single-draw/:id",

  drawController.getSingleDraw
);
router.delete(
  "/draw/:id",

  drawController.deleteDraw
);
router.patch(
  "/draw-update/:id",

  drawController.updateDraw
);

const drawRouter = router;

module.exports = drawRouter;
