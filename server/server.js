const express = require('express')
const app = express();
const port = 3000

const sequelize = require('./database/connection.js');

app.use(express.static(`${__dirname}/../client/dist/`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

sequelize.authenticate()
  .then(() => {
      console.log('Successfully connected to the database.')
  })
  .catch((err) => {
      console.log(`Error has been detected with database connection: ${err}`)
  })

app.use('/', require('./routes/index.js'))
// app.use('/', require('./routes/login')); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
