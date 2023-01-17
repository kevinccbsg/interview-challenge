const removeJSONDuplicates = (elements) => {
  const stringElements = elements.map(({ _id, ...element }) =>
    JSON.stringify(element)
  );
  const filteredElements = Array.from(new Set(stringElements));
  return filteredElements.map(element => {
    const elementIndex = stringElements.indexOf(element);
    if (elementIndex !== -1) {
      return elements[elementIndex];
    }
    return false;
  }).filter(Boolean);
};

module.exports = { removeJSONDuplicates };
