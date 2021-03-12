require('dotenv').config();

module.exports.isValidDXToken = (req, res, next) => {
  const token = req.headers['x-token'];
  if (token && token === process.env['x-token']) {
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized access',
  });
};
