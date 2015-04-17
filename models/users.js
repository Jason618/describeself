// users info
var pool = require('./mysql_pooling');

/*
table sql:
CREATE TABLE SELF_USER(
     ID INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
     EMAIL VARCHAR(32) NOT NULL,
     PASSWORD VARCHAR(32) NOT NULL,
     FULLNAME VARCHAR(32) DEFAULT NULL,
     NICKNAME VARCHAR(32) DEFAULT NULL,
     CREATED TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     GENDER CHAR(5) DEFAULT NULL,
     BIRTHDAY DATE DEFAULT NULL,
     PHONE VARCHAR(32) DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE UNIQUE INDEX unique_index_email on SELF_USER(EMAIL);


var insertSQL = 'insert into SELF_USER(name) values("conan"),("fens.me")';
var selectSQL = 'select * from SELF_USER limit 10';
var deleteSQL = 'delete from SELF_USER';
var updateSQL = 'update SELF_USER set name="conan update"  where name="conan"';
*/

//get a user by id
var getUserById = function (id) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from SELF_USER where id = ' + id, function (err, result) {
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

// get user by email
var getUserByEmail = function (email) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from SELF_USER where email = ' + email, function (err, result) {
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
        connection.query('select * from SELF_USER limit 10', function (err, result) {
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
        connection.query('insert into SELF_USER(email,password) values("' + user.email + '","' + user.password + '")', function (err, result) {
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


//delete user by email
var deleteUserByEmail = function (user, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('delete from SELF_USER where email = "' + user.email + '"', function (err, result) {
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
    getUserByName: getUserByEmail,
    addUser: addUser,
    deleteUserByEmail: deleteUserByEmail
}

module.exports = users;
