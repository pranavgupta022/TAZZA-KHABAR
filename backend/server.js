const express = require("express");
const http = require("http");
const ejs = require("ejs");
const path = require("path");
app = express();
app.use(express.json());
app.use(express.static("../public"));
const templatepath = path.join(__dirname, "../public");
app.set("view engine", "ejs");
app.set("views", templatepath);

app.get("/", async (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  try {
    console.log("server on");
  } catch (error) {
    console.log("error");
  }
});
