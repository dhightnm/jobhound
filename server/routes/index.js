const router = require('express').Router();

router.get('/', (req, res) => {
  res.end('Home Page');
});

module.exports = router;