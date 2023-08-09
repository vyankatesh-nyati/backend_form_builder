const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    id: String,
    type: String,
    question: String,
    categories: [{ id: String, name: String }],
    items: [{ id: String, name: String, category: String }],
    wordsArray: [{ word: String, isShow: Boolean }],
    options: [{ isExist: Boolean, name: String, id: String }],
    comprehension: String,
    comprehnesionQuestions: [
      { id: String, question: String, options: [String], answer: String },
    ],
  },
  { timestamps: true }
);

module.exports = questionSchema;
