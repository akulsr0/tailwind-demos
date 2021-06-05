import express from "express";
import cors from "cors";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/demos"));

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server started running at ${port}`);
});
