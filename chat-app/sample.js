
const {graphql, buildSchema } = require('graphql'); 

const schema = buildSchema (`
  type Query {
      message: String
  }
`)

const rootValue = {
    message:  ()=> 'GrahQL works'
}

graphql(
    schema,
    `
    query{
        message
    }
    ` ,
    rootValue

    
).then(console.log)
.catch(console.error)