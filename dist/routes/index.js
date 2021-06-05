"use strict";

var _express = require("express");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _parseMd2 = _interopRequireDefault(require("parse-md"));

var _highlight = _interopRequireDefault(require("highlight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  var demosDir = _path["default"].join(__dirname, "../../demos");

  var demos = _fs["default"].readdirSync(demosDir);

  res.render("index", {
    demos: demos
  });
});
router.get("/:slug/view", function (req, res) {
  var slug = req.params.slug; // Getting Images names

  var imagesPath = _path["default"].join(__dirname, "../../demos", slug, "assets", "");

  var images = _fs["default"].readdirSync(imagesPath); // Getting metadata from About.md


  var aboutPath = _path["default"].join(__dirname, "../../demos", slug, "About.md");

  var about = _fs["default"].readFileSync(aboutPath, "utf-8");

  var _parseMd = (0, _parseMd2["default"])(about),
      metadata = _parseMd.metadata; // Getting code text


  var css, js, markup;

  var stylesPath = _path["default"].join(__dirname, "../../demos", slug, "css/styles.css");

  if (_fs["default"].existsSync(stylesPath)) {
    css = _fs["default"].readFileSync(stylesPath, "utf-8");
  }

  var jsPath = _path["default"].join(__dirname, "../../demos", slug, "js/app.js");

  if (_fs["default"].existsSync(jsPath)) {
    js = _fs["default"].readFileSync(jsPath, "utf-8");
  }

  var markupPath = _path["default"].join(__dirname, "../../demos", slug, "index.html");

  markup = _fs["default"].readFileSync(markupPath, "utf-8");
  var code = {
    css: css && _highlight["default"].highlightAuto(css).value,
    js: js && _highlight["default"].highlightAuto(js).value,
    markup: _highlight["default"].highlightAuto(markup).value
  };
  res.render("demo", {
    slug: slug,
    metadata: metadata,
    images: images,
    code: code
  });
});
module.exports = router;