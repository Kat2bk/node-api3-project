const express = require('express');
const helmet = require('helmet')
// put cors here

const logger = require('./middleware/logger');
const {validateUserId, validatePost} = require('./middleware/validateFunctions');

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
// validating user requires checking the id via the req
// valiadating post requires checking the req.body
// error middleware

server.use(express.json());
server.use(helmet());
// // server.use(cors());
server.use(logger());

// server.use() for route for /api/users
server.use('/api/users', userRouter)
// server.use() for route for /api/posts

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
      message: 'There was an error performing the required operation',
      error: err
  })
})
//custom middleware
// remember to include next()

module.exports = server;
