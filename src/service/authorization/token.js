const jwt = require('jsonwebtoken');

function genToken(data) {
  const token = jwt.sign({
    data,
  },
  process.env.APP_TOKEN_SECRET || 'JAIKOX2', { expiresIn: '24h' });
  return token;
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.APP_TOKEN_SECRET || 'JAIKOX2', (err, decoded) => {
      if (decoded) resolve(decoded);
      reject(err);
    });
  });
}

module.exports = {
  genToken,
  verifyToken,
};
