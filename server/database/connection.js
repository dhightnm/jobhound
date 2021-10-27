const { Sequelize } = require('sequelize');

const authenticate = new Sequelize('jobhound', 'postgres', '!RunningOnFumes', {
  host: '54.153.60.83',
  dialect: 'postgres'
});

module.exports = authenticate;