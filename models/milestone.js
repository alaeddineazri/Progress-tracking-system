const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const milestoneSchema = new Schema(
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
    },
    due_date: {
        type: Date,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Milestone", milestoneSchema);
