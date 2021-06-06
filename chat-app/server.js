const crypto =require('crypto')
const {ApolloServer,gql} =  require('apollo-server'); 
// const {typeDefs,resolvers} = require('./schema');
const data  ={users:[{ 
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

const typeDefs = gql`
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

 

`;
const resolvers = {
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

const server = new ApolloServer({typeDefs,resolvers})
server.listen(4000,_=>console.log('listening on port 4000'));