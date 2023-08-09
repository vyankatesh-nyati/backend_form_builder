const mongoose = require("mongoose");
const questionSchema = require("./question");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: [questionSchema],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("form", formSchema);
