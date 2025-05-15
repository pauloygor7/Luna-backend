const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  location: {
    lat: Number,
    lng: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Alerta", alertSchema);
