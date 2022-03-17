const express = require("express");
const route = express.Router();
const adminData = require("../routes/admin");

route.get("/", (req, res, next) => {
  res.render("main", {
    users: adminData.users,
    title: "Main",
  });
});

module.exports = route;
