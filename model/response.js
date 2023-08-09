const mongoose = require("mongoose");
const personalResponseSchema = require("./personal_response");

const Schema = mongoose.Schema;

const responseSchema = new Schema(
  {
    formId: {
      type: String,
      required: true,
    },
    responses: [personalResponseSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("form", formSchema);
