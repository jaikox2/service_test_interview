const login = require('../service/handler/login');
const register = require('../service/handler/register');
const { deleteUserActivedByToken } = require('../service/query/user');

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

    return res.status(200).send({ message: 'success', data})
  } catch (error) {
    return next(error);
  }
})


router.post('/logout', async (req, res, next) => {
  try {
    const {
      access_token
    } = req.body;

    const resutl = await deleteUserActivedByToken(access_token);
    if (resutl === 0) {
      const err = new Error('Not Found To LOGOUT')
      return next(err);
    }

    return res.status(200).send({ message: 'success'})
  } catch (error) {
    return next(error);
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
