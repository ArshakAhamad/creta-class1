const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'auth_db' // create this database in MySQL
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected.');
});

module.exports = db;