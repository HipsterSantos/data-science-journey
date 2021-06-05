const { MoodOutlined } = require('@material-ui/icons');
const {Schema ,model} = require('mongoose') ;

const Users = model('Users',userSchema); 
const useSchema = new Schema({
    name:{type: String, required:true},
    age:Number,
    isMember:Boolean
  })

  
module.exports = Users;