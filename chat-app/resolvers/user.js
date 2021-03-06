const { mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server-express');
const User = require('../models/user');
const {isObjectId} = require('../utils/functions')

module.exports = {
Query: { 
    users: (root,args, context,info)=>{
        return User.find({})
    },
    user: (root,{id},context,info) =>{
        isObjectId(id);
        return User.findById(id)
    }
},
Mutation:{
    signUp: async (root,args,context,info)=> {
        console.log(await User.find({}))
        return User.create(args)
    }
}

}