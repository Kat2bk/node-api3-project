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

  module.exports = validateUserId, validatePost;