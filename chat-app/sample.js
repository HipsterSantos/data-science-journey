
const {graphql, buildSchema } = require('graphql');
const {graphqlHTTP }= require('express-graphql'); 
const express = require('express');
const app = express();
const crypto = require('crypto');
const schema = buildSchema (`

 type Query{ 
    users: [User!]!
    user(id:ID!): User
    messages: [Message!]!
  }
  type User{
      id: ID!
      email: String! 
      name: String! 
      avatarUrl: String!
      messages:Message
  }
  
  type Message{
      id: ID! 
      body: String!
      createdAt: String
      userId:Int
  }
  
  type Mutation{
      addUser(email:String!,name: String):User
  }
`)
const user  ={users:[{ 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
}, { 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
},{ 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
}
],messages:[
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    
]
};
class User{
    constructor(user){
        Object.assign(this,user);
    }
    message(){
        return user.messages.filter(m=>m.userId === this.id);
    }
}
const rootValue = {
    messages:  ()=> user.messages,
    users: ()=>  user.users.map(c=>new User(c).message() ),
    user: ({id})=>user.users.filter(vl => vl.id == id),
    addUser:({email,name})=>{
        const newUser = {
            id: crypto.randomBytes(10).toString(),
            name,email
        }
        user.users.push(newUser)
        return newUser;
    }
}

graphql(
    schema,
    `
    query{
        users{
            email
            messages{
                id
                body
            }
        }
    }
    ` ,
    rootValue

    
).then(_=>console.dir(_,{depth:null}))
.catch(console.error)


app.use('graphql',graphqlHTTP({
    schema,
    rootValue,
    graphql: true
}))
app.listen(4000,_=>console.log('listening on port 4000'))