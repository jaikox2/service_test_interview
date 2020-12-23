const { insertProduct, selectProducts } = require("../query/product");


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

async function findProducts() {
  try {
    var result = {
      success: true,
      data: null,
      error: null
    }

    result.data = await selectProducts();

    return result;
  } catch (error) {
    result.success = false;
    result.error = error;
    return result;
  }
}

module.exports = {
  createProduct,
  findProducts
}