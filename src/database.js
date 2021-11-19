const Pool = require('pg').Pool;
const {database} = require('./config/credenciales');


const pool = new Pool(database);

console.log("La base de datos está conectada")

module.exports = pool;