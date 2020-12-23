const router = require('express').Router();
const { createProduct, findProducts, updateProduct } = require('../service/handler/products');
const middleware = require('../service/middleware/authorization');

router.get('/', middleware(), async (req, res, next) => {
  try {

    const { success, data, error } = await findProducts();

    if (!success) {
      return next(error);
    }

    return res.status(200).send({ message: 'success', data });
  } catch (error) {
    return next(error);
  }
})

router.post('/', middleware(), async (req, res, next) => {
  try {
    const {
      name,
      code,
      price,
      detail
    } = req.body;

    const { success, error } = await createProduct(name, code, price, detail);

    if (!success) {
      return next(error);
    }

    return res.status(200).send({ message: 'success'});
  } catch (error) {
    return next(error);
  }
})

router.put('/', middleware(), async (req, res, next) => {
  try {
    const {
      id,
      name,
      code,
      price,
      detail
    } = req.body;

    const { success, error } = await updateProduct(id, name, code, price, detail);

    if (!success) {
      return next(error);
    }

    return res.status(200).send({ message: 'success'});
  } catch (error) {
    return next(error);
  }
})

router.delete('/', (req, res, next) => {
  try {
    
  } catch (error) {
    return next(error);
  }
})

module.exports = router;
