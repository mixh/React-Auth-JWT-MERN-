const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");

mongoose.connect("mongodb://127.0.0.1:27017/userdb");

const allowedOrigins = ["http://localhost:5173"]; // Replace with your frontend's actual origin
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/", userRoutes);

const port = 3333;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
