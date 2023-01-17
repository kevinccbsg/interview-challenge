const validate = require('./schema/validate')

const cleanApp = (appObject) => {
  if (!appObject) {
    throw new Error('Missing App object');
  }
  validate(appObject);
  return true;
};

module.exports = cleanApp;
