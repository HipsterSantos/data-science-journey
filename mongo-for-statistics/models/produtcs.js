const {model ,Schema} =require('mongoose'); 

const productSchema = new Schema({
    name:String,
    price: Number,
    amount:Number,
    total:{type:Number,default: function(){return this.price * this.amount}}
  })

const Product = model('Product',productSchema);

module.exports = Product;