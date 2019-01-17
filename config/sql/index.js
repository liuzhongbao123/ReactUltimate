const mysql = require("mysql");
const sqlConfig = require('./config');
const connection = mysql.createConnection(sqlConfig);
connection.connect();
module.exports.login = function(username, password, callback) {
    const sql = "select * from persions where classname like '" + username + "'";
    connection.query(sql, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    })
}

module.exports.Register = function(username, password, callback) {
    // const $sql = 'select * from userlist where username=? and password=?';
    const sql = "insert into students (name,score,classname) values('username','password','LZB')";
    connection.query(sql, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    })

}