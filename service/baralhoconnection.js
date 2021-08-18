var mysql = require('mysql');

const pool = mysql.createPool({
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT,
    "database": process.env.MYSQL_DATABASE,
    "user": process.env.MYSQL_USER 
});

exports.pool = pool;