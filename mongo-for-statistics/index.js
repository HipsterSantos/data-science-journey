const express = require('express');
const {ApolloServer} = require('apollo-server-express'); 
const {typeDefs ,resolvers }  =  require('./schema');
const app = express();
const port  = 4000; 

async function startApolloServer(){

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start();
  server.applyMiddleware({app});
  app.use((req,res)=>{
    res.status(200); 
    res.end("Hello");
    res.end();
  })

  await new Promise(resolve => app.listen({port}),resolve); 
  console.log(`Server ready and listening at http://localhost:${port}/${server.graphqlPath}`);
}
  



const mongoose =require('mongoose');
const {Schema}  = mongoose;
mongoose.connect('mongodb://localhost/tssss',{useNewUrlParser:true,useUnifiedTopology:true})
.then(_=>console.log('listening on port 4000'))
.catch(console.error);

app.get('/',async(req,res)=>{
  console.log(`Hey I'm listening on port 4000`);
})

// app.listen(4000,_=>console.log(`listening on port 4000`));
startApolloServer()
.then(console.log)
.catch(console.error);
