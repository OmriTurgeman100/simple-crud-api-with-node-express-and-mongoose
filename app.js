const express = require("express");
const reportsRouter = require("./routes/reportsRouter");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
// localhost/api/v1/reports
app.use("/api/v1/reports", reportsRouter);

app.all("*", (req, res, next) => {
  res.status(500).json({
    data: "undefined route, the resource you are looking for is not found",
  });
  next();
});

module.exports = app;
