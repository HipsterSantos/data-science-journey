const express = require('express');
const app = express();

const mongoose =require('mongoose');
const {Schema}  = mongoose;
mongoose.connect('mongodb://localhost/tssss',{useNewUrlParser:true,useUnifiedTopology:true})
.then(_=>console.log('listening on port 4000'))
.catch(console.error);

const useSchema = new Schema({
  name:{type: String, required:true},
  age:Number,
  isMember:Boolean
})
const productSchema = new Schema({
  name:String,
  price: Number,
  amount:Number,
  total:{type:Number,default: function(){return this.price * this.amount}}
})
const clientSchema = new Schema({
  user:{type: Schema.Types.ObjectID,ref:'Users'},
  whatBought:[{type: productSchema}],
  refcode:{type:String,default: Math.random() * 100},
  stats:{
    totalProducts: {type:Number,default:function(){return this.whatBought.length}}
  }
})
app.get('/',async(req,res)=>{
  console.log(`Hey I'm listening on port 4000`);
})

app.listen(4000,_=>console.log(`listening on port 4000`));
