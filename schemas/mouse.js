const mongoose = require('mongoose');

const MouseSchema = new mongoose.Schema({
  date: {type: Date, required: true, default: Date.now},
  color: {type: String},
  brand: {type: String}
  // battery:{type: Boolean}
});

const Mouse = mongoose.model('mouse', MouseSchema);
module.exports = Mouse;
