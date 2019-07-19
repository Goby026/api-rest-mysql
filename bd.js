var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'app'
});

// connection.connect();

// connection.query('SELECT * FROM usuarios', function(err, rows, fields){
//     if(err) throw err;

//     console.log('filas: ', rows);
// });


// connection.end();

exports.conn = connection;