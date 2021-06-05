"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _ejs = _interopRequireDefault(require("ejs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3001;
app.use((0, _cors["default"])());
app.set("view engine", "ejs");
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public")));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../demos")));
app.use("/", require("./routes/index"));
app.listen(port, function () {
  console.log("Server started running at ".concat(port));
});