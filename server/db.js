//Connecting to the DB 
const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: process.env.POOL_PW,
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;