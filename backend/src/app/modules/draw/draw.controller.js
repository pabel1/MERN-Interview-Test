const httpStatus = require("http-status");
const catchAsyncError = require("../../../ErrorHandler/catchAsyncError");
const sendResponse = require("../../../shared/sendResponse");
const drawService = require("./draw.service");

const createDraw = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const result = await drawService.createDrawIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Drawing created successfully",
    data: {
      result,
    },
  });
});

const getAllDraw = catchAsyncError(async (req, res) => {
  const result = await drawService.allDrawsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Drawing created successfully",
    data: {
      result,
    },
  });
});

const drawController = {
  createDraw,
  getAllDraw,
};
module.exports = drawController;
