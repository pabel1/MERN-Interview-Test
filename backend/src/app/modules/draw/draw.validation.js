const Joi = require("joi");

// Coordinates schema
const coordinatesSchema = Joi.object({
  x: Joi.number().required().messages({
    "number.base": "X coordinate must be a number",
    "any.required": "X coordinate is required",
  }),
  y: Joi.number().required().messages({
    "number.base": "Y coordinate must be a number",
    "any.required": "Y coordinate is required",
  }),
});

// Shape schema
const shapeSchema = Joi.object({
  type: Joi.string()
    .valid(
      "line",
      "rectangle",
      "circle",
      "text",
      "pencil",
      "arrow",
      "star",
      "triangle",
      "diamond"
    )
    .required()
    .messages({
      "string.base": "Type must be a string",
      "any.only":
        "Type must be one of the following: line , rectangle ,circle , text , pencil , arrow , star ,triangle , diamond ",
      "any.required": "Type is required",
    }),
  color: Joi.string().default("#000000").messages({
    "string.base": "Color must be a string",
  }),
  thickness: Joi.number().default(1).messages({
    "number.base": "Thickness must be a number",
  }),
  content: Joi.string().default(null),
  font: Joi.string().default("").messages({
    "string.base": "Font must be a string",
  }),
  size: Joi.number().default(12).messages({
    "number.base": "Size must be a number",
  }),
  coordinates: Joi.array()
    .items(Joi.array().items(coordinatesSchema))
    .required()
    .messages({
      "array.base": "Coordinates must be an array",
      "any.required": "Coordinates are required",
    }),
});

// Draw schema
const drawSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.base": "Title must be a string",
    "any.required": "Title is required",
  }),
  description: Joi.string().required().messages({
    "string.base": "Description must be a string",
    "any.required": "Description is required",
  }),
  elements: Joi.array().items(shapeSchema).required().messages({
    "array.base": "Elements must be an array",
    "any.required": "Elements are required",
  }),
});

const JoiValidationSchema = {
  coordinatesSchema,
  shapeSchema,
  drawSchema,
};

module.exports = JoiValidationSchema;
