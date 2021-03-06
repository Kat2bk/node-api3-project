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

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  const postInfo = {
    text: req.body.text,
    user_id: req.params.id
  }

posts.insert(postInfo)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/', (req, res) => {
  // do your magic!
  users.get()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/:id', validateUserId, (req, res) => {
  const {id} = req.params;
  // do your magic!
  users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  const {id} = req.params;
  users.getUserPosts(id)
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(error => {
    next(error)
  })
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
  if (req.body && req.body.text) {
    next()
  } else if (req.body && !req.body.text) {
    res.status(400).json({
      message: "Missing required field text"
    })
  } else {
    res.status(400).json({
      message: "Missing post data"
    })
  }
}

module.exports = router;
