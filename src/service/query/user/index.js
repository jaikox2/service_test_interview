const db = require('../../../conf/database');

const craeteUserSQL = `INSERT INTO users(username, password, name, surname)
VALUES($1, $2, $3, $4)`;

function craeteUser(username, password, name, surname) {
  return new Promise((resolve, reject) => {
    db.query(craeteUserSQL, [username, password, name, surname, ])
      .then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
  })
}


const findUserByUsernameSQL = `SELECT * 
FROM users
WHERE username = $1`;

function findUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.query(findUserByUsernameSQL, [username])
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

module.exports = {
  craeteUser,
  findUserByUsername,
};
