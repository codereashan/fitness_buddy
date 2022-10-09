const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//defines structure of document
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //this adds createdAt and updatedAt properties
);

// use model to interact with collection and create document of that name
module.exports = mongoose.model("Workout", workoutSchema);
