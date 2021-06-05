const  {Schema,model} = require('mongoose')

const clientSchema = new Schema({
    user:{type: Schema.Types.ObjectID,ref:'Users'},
    whatBought:[{type: productSchema}],
    refcode:{type:String,default: Math.random() * 100},
    stats:{
      totalProducts: {type:Number,default:function(){return this.whatBought.length}}
    }
  })
  
const Client = model('Client',clientSchema);
module.exports =  Client;