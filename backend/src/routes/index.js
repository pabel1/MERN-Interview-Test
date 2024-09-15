const express = require("express");
const drawRouter = require("../app/modules/draw/draw.router");

const router = express.Router();

const routes = [
  {
    path: "/draw",
    route: drawRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
