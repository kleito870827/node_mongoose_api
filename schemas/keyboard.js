const mongoose = require('mongoose');

const KeyboardSchema = new mongoose.Schema({
  date: {type: Date, required: true, default: Date.now},
  color:{type: String},
  brand:{type: String},
  size:{type: String}
});

const Keyboard = mongoose.model('keyboard', KeyboardSchema);
module.exports = Keyboard;
