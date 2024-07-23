const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`${PORT} 포트 서버 실행 중`);
});
