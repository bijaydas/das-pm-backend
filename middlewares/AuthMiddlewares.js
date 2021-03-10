require('dotenv').config();

module.exports.isValidDPMToken = (req, res, next) => {
  const token = req.headers['X-DPM-Token'];
  if (token && token === process.env.TOKEN) {
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized access',
  });
};
