const { Pool } = require('pg');
//const db = new Pool({
//   user: 'postgres', database: 'techtonica1'
//     //connectionString: process.env.DB_URI
//   });

//this one works! 
const db = new Pool({
  connectionString: process.env.DB_URI
});

//const db = pgp('postres://localhost:5432/techtonica1')

// const db = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'techtonica1',
//   //Password: <none>,
//   port: '5432',
// })

  module.exports = db;