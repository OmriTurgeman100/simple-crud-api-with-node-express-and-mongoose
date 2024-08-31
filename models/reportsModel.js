const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "report must have a title"],
    },
    description: {
      type: String,
      required: [true, "report must have a description"],
    },
    status: {
      type: String,
      enum: ["up", "down"],
      default: "up",
    },
  },
  { timestamps: true } // Add this option
);

const Reports = mongoose.model("Reports", reportsSchema);

module.exports = Reports;
