const { removeJSONDuplicates } = require('../utils');

/**
 * Function to filter objects from the schema appConfig in the schema folder
 * @param {object[]} objects
 * @returns array of objects without duplicates
 */
const filterObjects = (objects) => (
  removeJSONDuplicates(objects)
);

/**
 * Function to filter scenes from the schema appConfig in the schema folder
 * @param {object[]} scenes
 * @returns array of scenes without duplicates
 */
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
