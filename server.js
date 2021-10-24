var express = require("express");
var router = express.Router();
const path = require("path");
const app = express();
var cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.use(cors());
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3301);
