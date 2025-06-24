const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'techcode_rumahweb'
})

connection.connect()
