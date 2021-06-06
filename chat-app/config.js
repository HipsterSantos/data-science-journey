const {
    APP_PORT = 4000, 
    NODE_ENV = 'development',
    DB_URI='mongodb://localhost/mern'
} = process.env;

module.exports = {
    APP_PORT,
    NODE_ENV,
    DB_URI
}