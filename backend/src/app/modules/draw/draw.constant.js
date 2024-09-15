const httpStatus = require("http-status");
const catchAsyncError = require("../../../ErrorHandler/catchAsyncError");
const sendResponse = require("../../../shared/sendResponse");

const createDraw = catchAsyncError(async (req, res) => {
  //   const result = await productServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Drawing created successfully",
    data: {
      //   result,
    },
  });
});

const drawController = {
  createDraw,
};
module.exports = drawController;
