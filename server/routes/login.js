const router = require('express').Router();

router.get('/login', (req, res) => {
  res.end('Login Page');
});

module.exports = router;