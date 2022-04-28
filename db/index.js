const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs'
})

connection.connect((err) => {
    if (err) {
        console.log(`Sql连接失败`);
    } else {
        console.log('sql连接成功');
    }
})
module.exports = connection;

