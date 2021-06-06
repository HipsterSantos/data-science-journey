module.exports = {
    Query:{
        messages:  ()=> data.messages,
        users: () =>  data.users,
        user: (root,{id})=>data.users.find(vl => vl.id == id)
    }, 
    Mutation:{
        addUser:(root,{email,name})=>{
            const newUser = {
                id: crypto.randomBytes(10).toString(),
                name,email
            }
            data.users.push(newUser)
            return newUser;
        }
    },
    User:{
        messages: user  =>data.messages.filter(message => message.userId)
    }
}