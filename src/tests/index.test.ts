import path from "path";
import fs from "fs";
const parseMd = require("parse-md").default;

test("demo metadata", () => {
  const demosDir = path.join(__dirname, "../../demos");
  const demos = fs.readdirSync(demosDir);
  demos.forEach((demo) => {
    const aboutPath = path.join(demosDir, demo, "About.md");
    const about = fs.readFileSync(aboutPath, "utf-8");
    const { metadata } = parseMd(about);
    expect(metadata).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        description: expect.any(String),
        author: expect.any(String),
      })
    );
  });
});
