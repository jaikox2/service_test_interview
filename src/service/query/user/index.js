const { timeNow } = require('../..');
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


const insertUserActiveSQL = `INSERT INTO users_active(userid, token)
VALUES($1, $2)`;

function insertUserActive(userid, token) {
  return new Promise((resolve, reject) => {
    db.query(insertUserActiveSQL, [userid, token])
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

const findUserActiveSQL = 'SELECT * FROM users_active WHERE userid = $1';

function findUserActive(userid) {
  return new Promise((resolve, reject) => {
    db.query(findUserActiveSQL, [userid])
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

const deleteUserActivedSQL = `DELETE FROM users_active WHERE id = $1`;

function deleteUserActived(id) {
  return new Promise((resolve, reject) => {
    db.query(deleteUserActivedSQL, [id])
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

const deleteUserActivedByTokenSQL = `DELETE FROM users_active WHERE token = $1`;

function deleteUserActivedByToken(token) {
  return new Promise((resolve, reject) => {
    db.query(deleteUserActivedByTokenSQL, [token])
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
  insertUserActive,
  findUserActive,
  deleteUserActived,
  deleteUserActivedByToken,
};
