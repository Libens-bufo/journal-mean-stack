const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  completed: {
    type: Boolean,
    required: false,
  },
  exercise: {
    type: Boolean,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  goal: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  drinks: {
    type: Number,
    required: false,
  },
  mood: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Entry', schema)
