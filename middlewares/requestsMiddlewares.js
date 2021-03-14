const {isEmail} = require('../system/general');

module.exports.quickSignupValidation = (req, res, next) => {
  const {email, password} = req.body;
  if (email && !isEmail(email)) {
    return res.status(403).json({
      message: 'Invalid email',
      status: 403,
    });
  }

  if (!password) {
    return res.status(403).json({
      message: 'Invalid password',
      status: 403,
    });
  }
  next();
};

module.exports.loginFieldsValidation = (req, res, next) => {
  const {email, password} = req.body;
  if (email && !isEmail(email)) {
    return res.status(403).json({
      message: 'Invalid email',
      status: 403,
    });
  }

  if (!password) {
    return res.status(403).json({
      message: 'Invalid password',
      status: 403,
    });
  }
  next();
};
