const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");
const expressLayout = require("express-ejs-layouts");
const ContentRoute = require("./routes/ContentRoute");

//view engine ejs
app.set("view engine", "ejs");
app.use(expressLayout);

//morgan console styling
app.use(morgan("dev"));

//static access folder public
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing
app.get("/", (req, res) => {
  res.render("pages/index", {
    layout: "layouts/main-layout",
    title: "Home Page",
  });
});
app.get("/signup", (req, res) => {
  res.render("pages/auth/signup", {
    layout: "layouts/auth",
    title: "sign up",
  });
});
//routing tampilan content
app.use(ContentRoute);
app.listen(port, () => {
  console.log(`server listen at http://localhost:${port}`);
});
