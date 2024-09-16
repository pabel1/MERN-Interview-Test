const httpStatus = require("http-status");
const ErrorHandler = require("../../../ErrorHandler/errorHandler");
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

const singleDraw = async (payload) => {
  const { id } = payload || {};
  const draws = DrawModel.findById(id);

  return draws;
};
const deleteDrawFromDB = async (payload) => {
  const { id } = payload || {};
  const draw = DrawModel.findByIdAndDelete(id);
  if (!draw) {
    throw new ErrorHandler(
      `${id} this Drawing Not Found!!`,
      httpStatus.NOT_FOUND
    );
  }
  return draw;
};

const updateDrawIntoDB = async (payload) => {
  const { id, newDraw } = payload || {};
  const draw = DrawModel.findByIdAndUpdate(id, newDraw, { new: true });
  if (!draw) {
    throw new ErrorHandler(
      `${id} this Drawing Not Found!!`,
      httpStatus.NOT_FOUND
    );
  }
  return draw;
};

const drawService = {
  createDrawIntoDB,
  allDrawsFromDB,
  singleDraw,
  deleteDrawFromDB,
  updateDrawIntoDB,
};

module.exports = drawService;
