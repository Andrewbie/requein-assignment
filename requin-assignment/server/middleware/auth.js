const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send('Access Denied');
    }
    next();
  };
};

module.exports = { verifyToken, authorizeRole };
