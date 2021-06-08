const {Schema , model }= require('mongoose') ; 
const {hash,genSalt} = require('bcrypt');
const userSchema = new Schema({
    email: String,
    username:{ type: String, required: true}, 
    name: String, 
    password: String
},{timestamps: true})

userSchema.pre('save',async function(next){
    if (this.isModified('password')){
        try{
        const salt = await genSalt(10);
        this.password = await hash(this.password,salt);
        }catch(err){
            console.error(err);
        }
    }
    next();
})

module.exports = model('User',userSchema);