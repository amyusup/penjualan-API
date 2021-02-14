const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const routeNavigator = require("./src");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("*", cors());
app.get("/", (req, res) => {
  res.send("server online.");
});

app.use("/api/v1", routeNavigator)

app.listen( process.env.PORT || 8000, () => {
  console.log(`Server running on PORT ${ process.env.PORT || 8000 }`);
});

// PORT=8000
// DB_HOST=db4free.net
// DB_USER=app_penjualan
// DB_PASSWORD=app_penjualan
// DB_NAME=app_penjualan
