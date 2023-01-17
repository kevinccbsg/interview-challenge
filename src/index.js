const validate = require('../schema/validate');
const { filterObjects, filterScenes } = require('./filters');

/**
 * 
 * @param {object} appObject app content. You have the schema in the schema folder
 * @returns parsed object without duplicates
 */
const cleanApp = (appObject) => {
  if (!appObject) {
    throw new Error('Missing App object');
  }
  validate(appObject);
  const versions = appObject.versions.map(version => {
    const filteredObjects = filterObjects(version.objects);
    const scenes = filterScenes(version.scenes);
    return {
      ...version,
      objects: filteredObjects,
      scenes,
    };
  });
  return { ...appObject, versions };
};

module.exports = cleanApp;

