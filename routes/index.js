import { Router } from "express";
import fs from "fs";
import path from "path";
import parseMd from "parse-md";

const router = Router();

router.get("/", (req, res) => {
  const demosDir = path.join(__dirname, "../demos");
  const demos = fs.readdirSync(demosDir);
  res.render("index", { demos });
});

router.get("/:slug/view", (req, res) => {
  const { slug } = req.params;

  // Getting Images names
  const imagesPath = path.join(__dirname, "../demos", slug, "assets", "");
  const images = fs.readdirSync(imagesPath);

  // Getting metadata from About.md
  const aboutPath = path.join(__dirname, "../demos", slug, "About.md");
  const about = fs.readFileSync(aboutPath, "utf-8");
  const { metadata } = parseMd(about);

  res.render("demo", { slug, metadata, images });
});

module.exports = router;
