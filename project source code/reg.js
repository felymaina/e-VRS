// connect to mysqldb

const mysql = require ("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mynah",
    database: "nodejs"

});
 connection.connect(function(error){
     if(error)throw error
     else console.log("database connection success!")
 })