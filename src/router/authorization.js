const login = require('../service/handler/login');
const register = require('../service/handler/register');

const router = require('express').Router()

router.post('/login', async (req, res, next) => {
  try {
    const {
      username,
      password
    } = req.body;

    const { success, data, error } = await login(username, password);

    if (!success) {
      return next(error);
    }

    res.status(200).send({ message: 'success', data})
  } catch (error) {
    next(error);
  }
})

router.post('/register', async (req, res, next) => {
  try {
    const {
      username,
      password,
      name,
      surname
    } = req.body;


    const { success, error } = await register(username, password, name, surname);

    if (!success) {
      return next(error);
    }

    return res.status(200).send({ message: 'success'})
  } catch (error) {
    return next(error);
  }
})

module.exports =  router
