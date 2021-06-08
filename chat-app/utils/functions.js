const  isObjectId = id =>{
    if(!mongoose.Types.ObjectId.isValid(id)){
           throw new UserInputError(`${id} is not valid id`)
       }
}

module.exports = {
    isObjectId
}