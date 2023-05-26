const server = require('./app' );
const PORT = 3001;
const session = require('supertest');
const agent = session(app)
const getCharByID = require("./controllers/getCharByID")




server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });

 