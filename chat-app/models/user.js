const {Schema , model }= require('mongoose') ; 
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    email: String,
    username:{ type: String, required: true}, 
    name: String, 
    password: String
},{timestamps: true})

module.exports = model('User',userSchema);