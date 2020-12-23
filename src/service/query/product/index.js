const { timeNow } = require('../..');
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

const updateProductsSQL = `UPDATE products
SET name = $2,
  code = $3,
  price = $4,
  detail = $5,
  "updatedAt" = $6
WHERE id = $1`;

function updateProducts(id, name, code, price, detail) {
  return new Promise((resolve, reject) => {
    db.query(updateProductsSQL, [id, name, code, price, detail, timeNow()])
      .then((result) => {
        resolve(result.rows);
      }).catch((err) => {
        reject(err);
      });
  })
}

module.exports = {
  insertProduct,
  selectProducts,
  updateProducts
}