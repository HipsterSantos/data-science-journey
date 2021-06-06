const { mongoose } = require('mongoose');
const { UserInputError } = require('apollo-server-express');
const User = require('../models/user');

module.exports = {
Query: { 
    users: (root,args, context,info)=>{
        return User.find({})
    },
    user: (root,{id},context,info) =>{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new UserInputError(`${id} is not valid id`)
        }
        return User.findById(id)
    }
},
Mutation:{
    signUp:(root,args,context,info)=> {
        return User.create(args)
    }
}

}