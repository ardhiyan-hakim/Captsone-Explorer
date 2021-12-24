const express = require("express");
const app = express();
const ContentController = require("../controllers/ContentController");

app.get("/content/html1", ContentController.html1);
app.get("/content/html2", ContentController.html2);
app.get("/content/html3", ContentController.html3);
app.get("/content/css1", ContentController.css1);
app.get("/content/css2", ContentController.css2);
app.get("/content/css3", ContentController.css3);
app.get("/content/js1", ContentController.js1);
app.get("/content/js2", ContentController.js2);
app.get("/content/js3", ContentController.js3);
module.exports = app;
