const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  completed: {
    type: Boolean,
    required: false,
  },
  exercise: {
    type: Boolean,
    required: false,
    default: false
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
    default: Date.now
  },
  drinks: {
    type: Number,
    required: true,
    default: 0
  },
  mood: {
    type: Number,
    required: true,
    default: 10
  }
})

module.exports = mongoose.model('Entry', schema)
