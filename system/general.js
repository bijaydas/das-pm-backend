module.exports.isEmail = (input) => {
  // TODO: Email validation with RegEx
  return input.indexOf('@') > -1 && input.indexOf('.') > 3;
};
