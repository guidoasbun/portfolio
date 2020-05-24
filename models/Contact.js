const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Contact = mongoose.model('contact', ContactSchema)
