const express = require('express'); 
const app  = express();
const crypto =require('crypto')
const {ApolloServer,gql} =  require('apollo-server'); 
const typeDefs = require('./schema');
const resolvers = require('./resolvers'); 

const {
    APP_PORT = 4000, 
    NODE_ENV = 'development'
} = process.env;
const IN_PROD = NODE_ENV == 'production'
console.log(IN_PROD)
app.disable('x-powered-by');

const server = new ApolloServer({typeDefs,resolvers,playground: !IN_PROD})
server.listen(4000,_=>console.log('listening on port 4000'));