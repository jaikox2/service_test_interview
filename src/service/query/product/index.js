const db = require('../../../conf/database');

const insertProductSQL = `INSERT INTO products(name, code, price, detail)
VALUES($1, $2, $3, $4)`;

function insertProduct(name, code, price, detail) {
  return new Promise((resolve, reject) => {
    db.query(insertProductSQL, [name, code, price, detail])
      .then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
  })
}

const selectProductsSQL = `SELECT * FROM products`;

function selectProducts() {
  return new Promise((resolve, reject) => {
    db.query(selectProductsSQL)
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

module.exports = {
  insertProduct,
  selectProducts
}