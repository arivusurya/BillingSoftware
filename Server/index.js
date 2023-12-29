require("dotenv").config();
const express = require("express");
const Allrouter = require("./router");

const app = express();

const PORT = 5000;

app.use("/api", Allrouter);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
