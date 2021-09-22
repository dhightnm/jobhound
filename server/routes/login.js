const router = require('express').Router();

router.get('/', (req, res) => {
  res.end('Login Page');
});

module.exports = router;