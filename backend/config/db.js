const mysql = require('mysql2');

// สร้างการเชื่อมต่อฐานข้อมูล MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// ทำการส่งออกการเชื่อมต่อฐานข้อมูลแบบ Promise
module.exports = pool.promise();