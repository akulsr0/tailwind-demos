import express, { Application } from "express";
import cors from "cors";
import ejs from "ejs";
import path from "path";

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../demos")));

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server started running at ${port}`);
});
