const express = require('express')
const app = express();
const port = 3000

app.use(express.static(`${__dirname}/../client/dist/`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/login', require('./routes/login'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
