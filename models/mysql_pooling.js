// mysql

var mysql = require('mysql');
var mysqlConfig = require('../config').mysql;

var pool = mysql.createPool({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    port: mysqlConfig.port,
    database: mysqlConfig.database
});

module.exports = pool;
