require('dotenv').config()

const Sequelize = require('sequelize');

const sequelize = new Sequelize('movieapp', 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('Connected to movieapp db');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;