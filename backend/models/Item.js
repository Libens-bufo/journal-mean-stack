const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  todo: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  reminder: {
    type: Boolean,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  day: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Todo', schema)
