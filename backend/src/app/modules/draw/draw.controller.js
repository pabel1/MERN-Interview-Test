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
const getSingleDraw = catchAsyncError(async (req, res) => {
  const result = await drawService.singleDraw(req.params);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Drawing created successfully",
    data: {
      result,
    },
  });
});
const deleteDraw = catchAsyncError(async (req, res) => {
  const result = await drawService.deleteDrawFromDB(req.params);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Drawing Deleted successfully",
    data: {
      result,
    },
  });
});
const updateDraw = catchAsyncError(async (req, res) => {
  const payload = {
    id: req.params,
    newDraw: req.body,
  };
  const result = await drawService.updateDrawIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Drawing Updated successfully",
    data: {
      result,
    },
  });
});

const drawController = {
  createDraw,
  getAllDraw,
  getSingleDraw,
  deleteDraw,
  updateDraw,
};
module.exports = drawController;
