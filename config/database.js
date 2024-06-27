const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aadityayadav', 'root', 'Aaditya@2004', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
