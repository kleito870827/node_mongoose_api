const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const _=require('lodash');
const app = express();
const Mouse = require('./../schemas/mouse');
const Keyboard = require('./../schemas/keyboard');
const PORT = 7000;


app.use(express.static('web'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/product/mouse/read', (req,res)=>{
  res.sendFile(__dirname+'/../web/mouse.html', (err)=>{
    if(err){
      console.log(err.toString());
      res.status(500).send(err);
    }
  })
})

app.get('/products', (req,res)=>{
    Mouse.find((err, products)=>{
      if(err){
        throw err;
      }
      res.json(products);
      console.log(products);
    })
});

app.post('/product/mouse', (req,res)=>{

    let mouse = new Mouse({
      date: Date.now(),
      color: req.body.color,
      brand: req.body.brand
  })

  mouse.save((err)=>{
    if(err){
      throw err;
    }
    console.log(mouse);
  })
  res.redirect('/mouse.html');

  // let mouse = req.body;
  // product_id++;
  // mouse.product_id = product_id + '';
  // products.push(mouse);
  // res.json(mouse);
});

app.delete('/product/:product_id', (req,res)=>{
  let mouse = _.find()
});


// mongoose.connect('mongodb://localhost/shop', (err)=>{
//   if(err){
//     throw err;
//   }
// });
mongoose.connect('mongodb://localhost/shop', (err)=>{
  if(err){
    throw err;
  }
});


app.listen(PORT, ()=>{
  console.log('listening on http://localhost:', PORT);
});
