const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");

mongoose.connect("mongodb://127.0.0.1:27017/userdb");

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

const port = 3333;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
