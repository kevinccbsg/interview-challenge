const validate = require('../schema/validate');
const { filterObjects, filterScenes } = require('./filters');

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

