const {gql } = require('apollo-server') ;

module.exports = gql`

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