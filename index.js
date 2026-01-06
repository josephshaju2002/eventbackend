// 1. import json server
const JSONServer = require('json-server');

// 2. create the server for running json file
const eventServer = JSONServer.create();

// 3. create middleware for json server
const Middleware = JSONServer.defaults();

// 6. import db.json file
const router = JSONServer.router('db.json');

// 4. define port to run the server
const PORT = 3000 || process.env.PORT;

// 5. use the middleware
eventServer.use(Middleware);

// 7. use the router
eventServer.use(router);

// 8. tell server to listen for client request 
eventServer.listen(PORT, () => {
    console.log(`JSON Server is running at port: ${PORT}`);
});