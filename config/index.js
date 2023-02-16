require ('dotenv').config();
const { createPool } = require('mysql');
let connection = createPool ({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    post: process.env.dbPost,
    database: process.env.dbPost,
    multipleStatements: true,

})
module.exports = connection;