const express = require('express');
const helmet = require('helmet')
// put cors here

const userRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');
const e = require('express');

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
// server.use(cors());
server.use(logger);
server.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Sorry, something broke, try again later')
})

// server.use() for route for /api/users
server.use('/api/users', userRouter)
// server.use() for route for /api/posts

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// remember to include next()

function logger(req, res, next) {
  const requestTime = new Date();
  console.log(`${req.method} request to ${req.path} at ${requestTime.toISOString().slice(0, 10)}`)
  next();
}

function validateUserId(req, res, next) {
  if (req.id) {
    req.user = req.id;
    next();
  } else {
    res.status(400).json({
      error: res.message
    })
  }
}

function validateUser(req, res, next) {
  if (req.body) {
    next();
  } else if (req.body && !req.body.name) {
    res.status(400).json({
      error: "missing required name field"
    })
  } else {
    res.status(400).json({
      error: "missing user data"
    })
  }
}

function validatePost(req, res, next) {
  if (req.body) {
    next();
  } else if (req.body && !req.body.text) {
    res.status(400).json({
      error: "missing required text field"
    })
  } else {
    res.status(400).json({
      error: "missing post data"
    })
  }
}

module.exports = server;
