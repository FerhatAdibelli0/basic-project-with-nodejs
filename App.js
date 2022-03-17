const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const adminData = require("./routes/admin");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(userRoute);
app.use(adminData.routes);
app.use(adminData.routes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", {
    title: "Error",
  });
});

app.listen(3000);
