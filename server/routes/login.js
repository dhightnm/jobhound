const router = require('express').Router();

router.get('/login', (req, res) => {
  res.send({token: 'test123'});
});

module.exports = router;