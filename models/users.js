// users info
var pool = require('./mysql_pooling');

/*
var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
var selectSQL = 'select * from t_user limit 10';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="conan update"  where name="conan"';
*/

//get a user by id
var getUserById = function (id) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from t_user where id = ' + id, function (err, result) {
            if (err) {
                return {
                    status: false,
                    errorMess: err.code
                }
            } else {
                console.log(result);
            }
            connection.release();
        });
    });
}

// get user by name
var getUserByName = function (name) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from t_user where name = ' + name, function (err, result) {
            if (err) {
                return {
                    status: false,
                    errorMess: err.code
                }
            } else {
                console.log(result);
            }
            connection.release();
        });
    });
}

//get all users
var getAllUsers = function (callback) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from t_user limit 10', function (err, result) {
            if (err) {
                return {
                    status: false,
                    errorMess: err.code
                }
            } else {
                console.log(result);
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
            connection.release();
        });
    });
}

//add user
var addUser = function (user, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('insert into t_user(name) values("' + user.name + '")', function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log(result);
            if (typeof callback === 'function') {
                callback(result);
            }
        });
    });
}


var users = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserByName: getUserByName,
    addUser: addUser
}

module.exports = users;
