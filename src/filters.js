const { removeJSONDuplicates } = require('../utils');

const filterObjects = (objects) => (
  removeJSONDuplicates(objects)
);

const filterScenes = (scenes) => (
  scenes.map(scene => {
    const filteredViews = removeJSONDuplicates(scene.views);
    return { ...scene, views: filteredViews };
  })
);

module.exports = {
  filterScenes,
  filterObjects,
};
