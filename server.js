const express = require('express');
const helmet = require('helmet')
// put cors here

const userRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');

const server = express();

// remember to keep things in order
// first download necessary files - express, nodemon
// place nodemon in scripts file
// set up port, server.listen... index.js?
// set up require files
// set up routers and require them
// set up server.use(express.json())
// set up a welcome route with server.get('/')
// export any middleware, routers, functions
// set up logger

server.use(express.json());
server.use(helmet());
// server.use(cors());
server.use(logger);

// server.use() for route for /api/users
// server.use() for route for /api/posts

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// remember to include next()

function logger(req, res, next) {
  const requestTime = new Date();
  console.log(`${req.method} request to ${req.path} at ${requestTime.toISOString().slice(0, 10)}`)
  next()
}

module.exports = server;
