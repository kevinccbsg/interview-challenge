/**
 * We are going to receive an array of objects. Each of those objects will have an _id we are going to ignore to compare and then we will restore the _id
 * @param {object[]} elements array of objects
 * @returns filtered array of objects
 */
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
