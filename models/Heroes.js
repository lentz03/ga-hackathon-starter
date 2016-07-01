const mongoose = require('mongoose');

const heroesSchema = new mongoose.Schema({
  file: String,
  name: String,
  content: [{
    tips: [String],
    counter: [String]
  }]
})

const Heroes = mongoose.model('Heroes', heroesSchema);

module.exports = Heroes;
