const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.String
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Song = model("Song", userSchema);

module.exports = Song;
