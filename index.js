import express from "express";
import cors from "cors";
import ejs from "ejs";
import open from "open";

const app = express();
const port = process.env.PORT || 3001;
const environment = process.env.NODE_ENV || "dev";

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/demos"));

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server started running at ${port}`);
  environment === "dev" && open(`http://localhost:${port}`);
});
