
const {graphql, buildSchema } = require('graphql');
const {graphqlHTTP }= require('express-graphql'); 
const express = require('express');
const app = express();
const crypto = require('crypto');
const schema = buildSchema (`

 type Query{ 
    users: [User!]!
    message: String
  }
  type User{
      id: ID!
      email: String! 
      name: String! 
      avatarUrl: String!
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
]
};
const rootValue = {
    message:  ()=> 'GrahQL works',
    users: ()=>  user.users,
    addUser:()=>{
        const user = {
            
        }
    }
}

graphql(
    schema,
    `
    query{
        users{
            name
            id
            email
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