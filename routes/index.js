import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  const demosDir = path.join(__dirname, "../demos");
  const demos = fs.readdirSync(demosDir);
  res.render("index", { demos });
});

module.exports = router;
