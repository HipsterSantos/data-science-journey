const express = require('express');
const app = express();

const mongoose =require('mongoose');
const {Schema}  = mongoose;
mongoose.connect('mongodb://localhost/tssss',{useNewUrlParser:true,useUnifiedTopology:true})
.then(_=>console.log('listening on port 4000'))
.catch(console.error);

app.get('/',async(req,res)=>{
  console.log(`Hey I'm listening on port 4000`);
})

app.listen(4000,_=>console.log(`listening on port 4000`));
