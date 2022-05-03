var mysql = require('mysql')
var connMysql = () => {
  return mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'fasipe@2022',
    database: 'portal_noticias'
  })
}

module.exports = () => {
  return connMysql;
} 