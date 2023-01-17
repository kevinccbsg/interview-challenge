const removeJSONDuplicates = (elements) => (
  Array.from(new Set(elements.map(JSON.stringify))).map(JSON.parse)
);

module.exports = removeJSONDuplicates;
