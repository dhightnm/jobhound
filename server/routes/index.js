const router = require('express').Router();
const express = require('express')
const app = express();
const port = 3000

app.use(express.static(`${__dirname}/../client/dist/`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
     if (err) {
      res.status(500).send(err)
     }
   })
})

module.exports = router;