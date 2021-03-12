const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports.hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRounds);
};

module.exports.comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};
