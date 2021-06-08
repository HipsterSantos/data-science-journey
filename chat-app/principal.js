const express = require('express'); 
const app  = express();
const crypto =require('crypto')
const mongoose  = require('mongoose'); 

const {ApolloServer,gql} =  require('apollo-server'); 
const typeDefs = require('./schema');
const resolvers = require('./resolvers'); 
const {APP_PORT,NODE_ENV,DB_URI}  = require('./config');
const IN_PROD = NODE_ENV == 'production';
(async function(){
    
    mongoose.connect(DB_URI,
    {useNewUrlParse:true,useUnifiedTopology:true})
    .then((res)=>console.log('connected '+res))
    .catch((er)=>console.error(er))
    console.log('Is in Production',IN_PROD)
    app.disable('x-powered-by');
    
    const server = new ApolloServer({typeDefs,resolvers,playground: !IN_PROD})
    server.listen(APP_PORT,_=>console.log(`listening on port ${APP_PORT}`));
})().catch(console.log)