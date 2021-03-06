import { Router } from "express";
import fs from "fs";
const parseMd = require("parse-md").default;
import path from "path";
import Prism from "prismjs";

const router: Router = Router();

router.get("/", (req, res) => {
  const search = req.query?.search;
  const demosDir = path.join(__dirname, "../../demos");
  const allDemos: string[] = fs.readdirSync(demosDir);
  if (!search) {
    return res.render("index", { demos: allDemos });
  }
  const demos: string[] = [];
  allDemos.forEach((demo) => {
    const _demoName = demo.split("-").join("");
    if (_demoName.includes(<string>search)) {
      demos.push(demo);
    }
  });
  res.render("index", { demos, searchText: search });
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
    css: css && Prism.highlight(css, Prism.languages.css, "css"),
    js: js && Prism.highlight(js, Prism.languages.javascript, "javascript"),
    markup: Prism.highlight(markup, Prism.languages.html, "html"),
  };

  res.render("demo", { slug, metadata, images, code });
});

module.exports = router;
