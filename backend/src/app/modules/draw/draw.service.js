const DrawModel = require("./draw.model");

const createDrawIntoDB = async (payload) => {
  const draw = new DrawModel(payload);
  const newDraw = await draw.save();

  return newDraw;
};
const allDrawsFromDB = async (payload) => {
  const draws = DrawModel.find();

  return draws;
};

const drawService = {
  createDrawIntoDB,
  allDrawsFromDB,
};

module.exports = drawService;
