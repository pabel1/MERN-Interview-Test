const mongoose = require("mongoose");

const coordinatesSchema = new mongoose.Schema(
  {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const ShapeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["line", "rectangle", "circle", "text"],
      required: true,
    },

    color: {
      type: String,
      default: "#000000",
    },
    thickness: {
      type: Number,
      default: 1,
    },
    content: {
      type: String,
      default: "",
    },
    font: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 12,
    },
    coordinates: {
      type: [[coordinatesSchema]],
      required: true,
    },
  },
  { _id: false }
);
const drawSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    elements: {
      type: [ShapeSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DrawModel = mongoose.model("draw", drawSchema);

module.exports = DrawModel;
