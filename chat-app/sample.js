
const {graphql, buildSchema } = require('graphql'); 

const schema = buildSchema (`

type Query{ 
    users: User
    message: String
  }
  type User{
      id: ID!
      email: String! 
      name: String! 
      avatarUrl: String!
  }
`)
const user  = { 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
}
const rootValue = {
    message:  ()=> 'GrahQL works',
    users: ()=> user,
}

graphql(
    schema,
    `
    query{
        users{
            id
            name
        }
    }
    ` ,
    rootValue

    
).then(console.log)
.catch(console.error)