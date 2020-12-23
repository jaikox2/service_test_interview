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

module.exports = {
  craeteUser,
};
