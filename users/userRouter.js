const express = require('express');

const users = require('./userDb');
const posts = require('../posts/postDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  users.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  if (req.params.id) {
    req.user = req.params.id;
    next();
  } else {
    res.status(400).json({
      message: "Invalid user id"
    })
  }
}

function validateUser(req, res, next) {
  // do your magic!
  if (req.body && req.body.name) {
    next()
  } else if (req.body && !req.body.name) {
    res.status(400).json({
      message: "Missing required field name"
    })
  } else {
    res.status(400).json({
      message: "missing user data"
    })
  }
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
