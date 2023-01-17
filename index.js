const fs = require('fs').promises;
const cleanApp = require('./src');

const generateFile = async (appObject, fileName = 'clean_application.json') => {
  const newObject = cleanApp(appObject);
  await fs.writeFile(
    fileName,
    JSON.stringify(newObject, null, 2),
  );
  return `File ${fileName} generated`;
};

module.exports = generateFile;
