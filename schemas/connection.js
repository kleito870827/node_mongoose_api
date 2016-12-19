const mongoose = require('mongoose');

const Mouse = require('./mouse');
const Keyboard = require('./Keyboard');

mongoose.connect('mongodb://localhost/shop', (err)=>{
  if(err){
    throw err;
  }

  
});
