const { insertProduct } = require("../query/product");


async function createProduct(name, code, price, detail) {
  try {
    var result = {
      success: true,
      data: null,
      error: null
    }

    await insertProduct(name, code, price, detail);

    return result;
  } catch (error) {
    result.success = false;
    result.error = error;
    return result;
  }
}

module.exports = {
  createProduct,
}