const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personalResponseSchema = new Schema(
  {
    solution: [],
  },
  { timestamps: true }
);

module.exports = personalResponseSchema;
