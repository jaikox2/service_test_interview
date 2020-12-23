const router = require('express').Router()

router.get('/', (req, res, next) => {
  try {
    res.status(200).send('web service test interview')
  } catch (error) {
    next(error)
  }
})

module.exports = router;
