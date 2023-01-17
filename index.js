const validate = require('./schema/validate');
const { removeIDs, removeJSONDuplicates } = require('./utils');

const cleanApp = (appObject) => {
  if (!appObject) {
    throw new Error('Missing App object');
  }
  validate(appObject);
  const versions = appObject.versions.map(version => {
    const filteredObjects = removeJSONDuplicates(version.objects);
    const scenes = version.scenes.map(scene => {
      const filteredViews = removeJSONDuplicates(scene.views);
      return { ...scene, views: filteredViews };
    });
    return {
      ...version,
      objects: filteredObjects,
      scenes,
    };
  });
  return { ...appObject, versions };
};

module.exports = cleanApp;
