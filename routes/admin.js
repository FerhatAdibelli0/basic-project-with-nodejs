const express = require("express");
const route = express.Router();

const users = [];
route.post("/add-user", (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect("/");
});


route.get("/user", (req, res, next) => {
  res.render("user", {
    title: "User",
  });
});

exports.routes = route;
exports.users = users;
