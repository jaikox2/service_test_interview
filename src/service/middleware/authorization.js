const {
  verifyToken,
} = require('../authorization/token');

module.exports = () => async (req, res, next) => {
  try {
    const { headers } = req;
    if (headers.authorization) {
      const subtoken = headers.authorization.split(' ');
      if (subtoken[0] !== 'Bearer') {
        return res.status(401).send({
          message: 'authentication failed',
        });
      }
      const token = subtoken[1];
      await verifyToken(token);
      return next();
    }
    return res.status(401).send({
      message: 'authentication failed',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(401).send({
      message: 'authentication failed',
    });
  }
};
