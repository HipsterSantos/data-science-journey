const express = require('express'); 
const app  = express();
const crypto =require('crypto')
const {ApolloServer,gql} =  require('apollo-server'); 
const typeDefs = require('./schema');
const resolvers = require('./resolvers'); 

const server = new ApolloServer({typeDefs,resolvers})
server.listen(4000,_=>console.log('listening on port 4000'));