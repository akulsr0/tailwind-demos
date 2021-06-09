import { Router } from "express";
import fs from "fs";
const parseMd = require("parse-md").default;
import path from "path";
import hljs from "highlight.js";

const router: Router = Router();

router.get("/", (req, res) => {
  const demosDir = path.join(__dirname, "../../demos");
  const demos: string[] = fs.readdirSync(demosDir);

  res.render("index", { demos });
});

router.get("/:slug/view", (req, res) => {
  const { slug } = req.params;

  // Getting Images names
  const imagesPath = path.join(
    __dirname,
    "../../demos",
    slug,
    "assets",
    "screenshots"
  );
  let images: string[] | undefined;
  if (fs.existsSync(imagesPath)) {
    images = fs.readdirSync(imagesPath);
  }

  // Getting metadata from About.md
  const aboutPath = path.join(__dirname, "../../demos", slug, "About.md");
  const about = fs.readFileSync(aboutPath, "utf-8");
  const { metadata } = parseMd(about);

  // Getting code text
  let css, js, markup;
  const stylesPath = path.join(
    __dirname,
    "../../demos",
    slug,
    "css/styles.css"
  );
  if (fs.existsSync(stylesPath)) {
    css = fs.readFileSync(stylesPath, "utf-8");
  }
  const jsPath = path.join(__dirname, "../../demos", slug, "js/app.js");
  if (fs.existsSync(jsPath)) {
    js = fs.readFileSync(jsPath, "utf-8");
  }
  const markupPath = path.join(__dirname, "../../demos", slug, "index.html");
  markup = fs.readFileSync(markupPath, "utf-8");

  const code = {
    css: css && hljs.highlightAuto(css).value,
    js: js && hljs.highlightAuto(js).value,
    markup: hljs.highlightAuto(markup).value,
  };

  res.render("demo", { slug, metadata, images, code });
});

module.exports = router;
