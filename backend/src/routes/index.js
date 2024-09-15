const express = require("express");

const router = express.Router();

const routes = [
  // {
  //   path: "/user",
  //   route: userRouter,
  // },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
