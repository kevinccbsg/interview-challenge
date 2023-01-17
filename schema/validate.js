const Ajv = require('ajv');
const ajv = new Ajv({
  strictTuples: false,
});
const appConfig = require('./appConfig.json');

const validate = (data) => {
  const valid = ajv.validate(appConfig, data)
  if (!valid) {
    throw new Error('Invalid schema');
  }
};

module.exports = validate;