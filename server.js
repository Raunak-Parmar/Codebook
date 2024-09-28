const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // Path to your db.json
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(8001, () => {
  console.log('JSON Server is running on port 8001');
});
