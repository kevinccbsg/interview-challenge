const fs = require('fs').promises;
const cleanApp = require('./src');

/**
 * Function to generate exercise file
 * @param {object} appObject app content. You have the schema in the schema folder
 * @param {string} fileName name for the formatted file
 * @returns success message
 */
const generateFile = async (appObject, fileName = 'clean_application.json') => {
  const newObject = cleanApp(appObject);
  await fs.writeFile(
    fileName,
    JSON.stringify(newObject, null, 2),
  );
  return `File ${fileName} generated`;
};

module.exports = generateFile;
