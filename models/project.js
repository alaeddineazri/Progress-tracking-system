const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    office_id: {
      type: Number,
      required: true,
    },
    owner_id: {
      type: String,
      required: true,
    },
    team_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
